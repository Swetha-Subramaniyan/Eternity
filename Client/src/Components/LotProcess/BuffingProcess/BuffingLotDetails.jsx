import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import styles from "./BuffingLotDetails.module.css";
import { useParams } from 'react-router-dom';
import { BACKEND_SERVER_URL } from "../../../../Config/config";

const BuffingLotDetails = () => {
  const [open, setOpen] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [selectedItems, setSelectedItems] = useState([]);
  const [mainTableData, setMainTableData] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [viewEntry, setViewEntry] = useState(null);
  const { id, name, lotNumber } = useParams();

  // Monthly wastage state variables
  const [wastageInputs, setWastageInputs] = useState([{ value: "" }]);
  const [wastagePercentage, setWastagePercentage] = useState("");
  const [givenGold, setGivenGold] = useState("");
  const [closingSummary, setClosingSummary] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [existingWastageId, setExistingWastageId] = useState(null);

  console.log('Buffing Datas:',`person_id: ${id},`,`name: ${name},`,`lot_number: ${lotNumber}`);

  const fetchWastageData = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_SERVER_URL}/api/buffing/entry/${id}/${lotNumber}`
      );

      if (response.data.length > 0) {
        const wastageData = response.data[0];
        setExistingWastageId(wastageData.id);
        setWastagePercentage(wastageData.wastage_percentage.toString());
        setGivenGold(wastageData.given_gold?.toString() || "");

        if (wastageData.add_wastage) {
          setWastageInputs([{ value: wastageData.add_wastage.toString() }]);
        }
      } else {
        setExistingWastageId(null);
      }
    } catch (error) {
      console.error("Error fetching wastage data:", error);
      setExistingWastageId(null);
    }
  };

  const applyDateFilter = () => {
    if (!fromDate || !toDate) {
      setFilteredEntries(mainTableData);
      return;
    }
    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999);
    const filtered = mainTableData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= from && entryDate <= to;
    });

    setFilteredEntries(filtered);
  };

  // Monthly wastage calculations
  const totalReceipt = filteredEntries.reduce((sum, entry) => {
    return sum + entry.items.reduce((itemSum, item) => itemSum + (parseFloat(item.weight) || 0), 0);
  }, 0);

  const manualWastageSum = wastageInputs.reduce(
    (sum, w) => sum + (parseFloat(w.value) || 0),
    0
  );

  // % wastage calculation
  const totalWastageFromPercentage =
    (totalReceipt * (parseFloat(wastagePercentage) || 0)) / 100;

  // Final total wastage = percentage wastage + manual wastage inputs
  const totalWastage = totalWastageFromPercentage + manualWastageSum;

  const totalBalanceSum = filteredEntries.reduce((sum, entry) => {
    // You'll need to adjust this based on your actual data structure
    // This is a placeholder calculation
    return sum + entry.items.reduce((itemSum, item) => itemSum + (parseFloat(item.weight) || 0), 0);
  }, 0);
  
  const overallWastage = totalBalanceSum - totalWastage;

  const additionalGold = parseFloat(givenGold) || 0;

  const closingBalance =
    overallWastage < 0 ? overallWastage + additionalGold : overallWastage;

  const settlementMessage =
    closingBalance < 0
      ? "Owner must give to worker"
      : "Worker must give to owner";

  const handleSaveSummary = async () => {
    try {
      const data = {
        total_receipt: totalReceipt,
        total_wastage: totalWastage,
        balance: totalBalanceSum,
        wastage_percentage: parseFloat(wastagePercentage) || 0,
        given_gold: additionalGold,
        add_wastage: manualWastageSum,
        overall_wastage: overallWastage,
        closing_balance: closingBalance,
        opening_balance: 0,
        buffing_person_id: id,
        lotId: lotNumber,
      };

      let response;
      if (existingWastageId) {
        // Update existing wastage record
        response = await axios.put(
          `${BACKEND_SERVER_URL}/api/buffing/wastage/${existingWastageId}`,
          data
        );
      } else {
        // Create new wastage record
        response = await axios.post(
          `${BACKEND_SERVER_URL}/api/buffing/wastage`,
          data
        );
        setExistingWastageId(response.data.id);
      }

      localStorage.setItem("buffingSummary", JSON.stringify(data));
      setClosingSummary(data);

      alert(`Summary ${existingWastageId ? "updated" : "saved"} successfully!`);
    } catch (error) {
      console.error("Error saving summary:", error);
      alert("Failed to save summary. Check console for details.");
    }
  };

  const handleCloseJobcard = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_SERVER_URL}/api/buffing/close-jobcard`,
        {
          buffing_person_id: id,
          current_lot_number: lotNumber,
        }
      );

      // Redirect to the new lot
      window.location.href = `/buffinglot/${id}/${name}/${response.data.newLotNumber}`;

      alert("Jobcard closed and new lot created successfully!");
    } catch (error) {
      console.error("Error closing jobcard:", error);
      alert("Failed to close jobcard. Check console for details.");
    }
  };

  const addWastageInput = () => {
    setWastageInputs([...wastageInputs, { value: "" }]);
  };

  const removeWastageInput = (index) => {
    const newInputs = [...wastageInputs];
    newInputs.splice(index, 1);
    setWastageInputs(newInputs);
  };

  const handleWastageInputChange = (index, value) => {
    const newInputs = [...wastageInputs];
    newInputs[index].value = value;
    setWastageInputs(newInputs);
  };

  const handleAssign = async () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one row.");
      return;
    }

    try {
      // Prepare payload for backend
      const payload = {
        buffing_person_id: parseInt(id),      
        lot_number: parseInt(lotNumber),            
        items: selectedItems.map((item) => ({
          filing_item_id: item.id,  
        })),
      };

      console.log("Posting Buffing Entry:", payload);

      const res = await axios.post(`${BACKEND_SERVER_URL}/api/buffingentry`, payload);
      const newEntry = {
        date,
        items: selectedItems,
      };

      setMainTableData((prev) => [...prev, newEntry]);
      setOpen(false);
      setSelectedItems([]);

      alert("Buffing Entry created successfully!");
    } catch (error) {
      console.error("Error assigning buffing entry:", error);

      if (error.response) {
        alert(error.response.data.error || "Failed to create Buffing Entry");
      } else {
        alert("Something went wrong while assigning buffing entry.");
      }
    }
  };

  useEffect(() => {
    const fetchBuffingEntries = async () => {
      try {
        const res = await axios.get(`${BACKEND_SERVER_URL}/api/buffingentry/person/${id}/${lotNumber}`);
        const formatted = res.data.map((entry) => ({
          date: new Date(entry.createdAt).toISOString().split("T")[0],
          items: entry.lotBuffingMapper.length > 0
            ? entry.lotBuffingMapper.map((mapper) => ({
                id: mapper.filing_item_id || mapper.setting_item_id,
                item: mapper.filing_item_name || mapper.setting_item_name,
                weight: mapper.filing_item_weight || entry.casting_item_weight,
                touch: mapper.filing_item_touch || entry.touch,
                purity: mapper.filing_item_purity || entry.casting_item_purity,
                remarks: mapper.filing_item_remarks || entry.casting_item_remarks,
                stoneCount: "-",
                stoneWeight: "-"
              }))
            : [
                {
                  id: entry.casting_item_id,
                  item: entry.item_name,
                  weight: entry.casting_item_weight,
                  touch: entry.touch,
                  purity: entry.casting_item_purity,
                  remarks: entry.casting_item_remarks,
                  stoneCount: "-",
                  stoneWeight: "-"
                }
              ]
        }));
       
        setMainTableData(formatted);
        setFilteredEntries(formatted);
        fetchWastageData();
      } catch (error) {
        console.error("Error fetching buffing entries:", error);
      }
    };

    fetchBuffingEntries();
  }, [id]);

  const handleView = (entry) => {
    setViewEntry(entry);
    setOpen(true);        
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${BACKEND_SERVER_URL}/api/filingitems`);
        const data = await res.json();

        // filter only WithoutStone
        const filtered = data.filter(
          (item) => item.stone_option === "WithoutStone"
        );
        console.log('Filtered items from Filing Process', filtered)

        const transformed = filtered.map((item) => ({
          id: item.id,
          item: item.filingitem?.name,
          weight: item.weight,
          touch: item.touch?.touch || "-",
          purity: item.item_purity,
          remarks: item.remarks,
          stoneCount: item.stoneCount || "-",
          stoneWeight: item.stoneWeight || "-",
        }));

        setPopupData(transformed);

      } catch (error) {
        console.error("Error fetching filing items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedItems([]);
    setViewEntry(null);
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <>
      <Navbar />
      <h5 className={styles.heading}>Buffing Lot Details</h5>
      <div className={styles.container}>
        <div
          className={styles.header}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="From Date"
            type="date"
            size="small"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ ml: "2rem" }}
          />
          <TextField
            label="To Date"
            type="date"
            size="small"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="outlined" onClick={applyDateFilter}>
            Filter
          </Button>
          <Button
            variant="text"
            onClick={() => {
              setFromDate("");
              setToDate("");
              setFilteredEntries(mainTableData);
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{ ml: "50rem" }}
          >
            Add Buffing
          </Button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Item</th>
              <th>Weight</th>
              <th>Touch</th>
              <th>Purity</th>
              <th>Remarks</th>
              <th>Stone Count</th>
              <th>Stone Weight</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry, index) =>
                entry.items.map((item, i) => (
                  <tr key={item.id}>
                    {i === 0 && (
                      <>
                        <td rowSpan={entry.items.length}>{index + 1}</td>
                        <td rowSpan={entry.items.length}>{entry.date}</td>
                      </>
                    )}
                    <td>{item.item}</td>
                    <td>{item.weight}</td>
                    <td>{item.touch}</td>
                    <td>{item.purity}</td>
                    <td>{item.remarks}</td>
                    <td>{item.stoneCount || "-"}</td>
                    <td>{item.stoneWeight || "-"}</td>
                    {i === 0 && (
                      <td rowSpan={entry.items.length}>
                        <Button onClick={() => handleView(entry)}>View</Button>
                      </td>
                    )}
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="10" align="center">
                  No records yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Monthly Wastage Box - Similar to Filing */}
      <Box
        sx={{
          ml: 4,
          p: 2,
          border: "1px solid #ccc",
          borderRadius: "8px",
          minWidth: "70px",
          height: "fit-content",
          mt: 1,
          mr: 10,
        }}
      >
        <Typography sx={{ marginLeft: "3rem", color: "darkblue" }}>
          <b>Opening Balance:</b> 0
        </Typography>
        <hr />

        <Typography
          sx={{ color: "red", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          Monthly Wastage
        </Typography>
        <br />

        <Typography>
          <strong>Total Receipt:</strong> {totalReceipt.toFixed(2)} g
        </Typography>

        <TextField
          label="Wastage (%)"
          type="number"
          value={wastagePercentage}
          onChange={(e) => setWastagePercentage(e.target.value)}
          fullWidth
          size="small"
          sx={{ mt: 2 }}
        />

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Wastage Values (g) Optional:
          </Typography>
          {wastageInputs.map((input, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <TextField
                label={`Wastage ${index + 1}`}
                type="number"
                value={input.value}
                onChange={(e) =>
                  handleWastageInputChange(index, e.target.value)
                }
                size="small"
                sx={{ flexGrow: 1, mr: 1 }}
              />
              {/* {wastageInputs.length > 1 && (
                <IconButton onClick={() => removeWastageInput(index)}>
                  <DeleteIcon />
                </IconButton>
              )} */}
            </Box>
          ))}
         {/*  <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addWastageInput}
            size="small"
            sx={{ mt: 1 }}
          >
            Add Wastage
          </Button> */}
        </Box>

        <Typography sx={{ mt: 2 }}>
          <strong>Total Wastage:</strong> {totalWastage.toFixed(2)} g
        </Typography>

        <Typography sx={{ mt: 2 }}>
          <strong>Balance:</strong> {totalBalanceSum.toFixed(2)} g
        </Typography>

        <Typography sx={{ mt: 2 }}>
          <strong>Overall Wastage:</strong> {overallWastage.toFixed(2)} g
        </Typography>

        {parseFloat(overallWastage) < 0 && (
          <TextField
            label="Given Gold"
            type="number"
            fullWidth
            size="small"
            value={givenGold}
            onChange={(e) => setGivenGold(parseFloat(e.target.value))}
            sx={{ mt: 2 }}
          />
        )}

        <Typography sx={{ mt: 2, color: "red" }}>
          <strong>Closing Balance:</strong> {closingBalance.toFixed(2)} g
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: closingBalance < 0 ? "red" : "green",
          }}
        >
          {settlementMessage}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            width: "100%",
            backgroundColor: "#1a1a1f",
            color: "white",
            textAlign: "center",
          }}
          onClick={handleSaveSummary}
        >
          {existingWastageId ? "Update Summary" : "Save Summary"}
        </Button>

        <Button
          variant="outlined"
          color="error"
          sx={{ mt: 2, width: "100%" }}
          onClick={handleCloseJobcard}
        >
          Close Jobcard
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{viewEntry ? "View Buffing Lot" : "Assign Buffing Lot"}</DialogTitle>
        <DialogContent>
          {!viewEntry && (
            <TextField
              label="Date"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2, mt: 2 }}
            />
          )}
          
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {!viewEntry && <th>Select</th>}
                  <th>Item</th>
                  <th>Weight</th>
                  <th>Touch</th>
                  <th>Purity</th>
                  <th>Remarks</th>
                  <th>Stone Count</th>
                  <th>Stone Weight</th>
                </tr>
              </thead>
              <tbody>
                {(viewEntry ? viewEntry.items : popupData).map((item) => (
                  <tr key={item.id}>
                    {!viewEntry && (
                      <td>
                        <Checkbox
                          checked={selectedItems.some((i) => i.id === item.id)}
                          onChange={() => handleCheckboxChange(item)}
                        />
                      </td>
                    )}
                    <td>{item.item}</td>
                    <td>{item.weight}</td>
                    <td>{item.touch}</td>
                    <td>{item.purity}</td>
                    <td>{item.remarks}</td>
                    <td>{item.stoneCount}</td>
                    <td>{item.stoneWeight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {!viewEntry && (
            <Button 
              variant="contained" 
              onClick={handleAssign}
              disabled={selectedItems.length === 0}
            >
              Assign
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BuffingLotDetails;