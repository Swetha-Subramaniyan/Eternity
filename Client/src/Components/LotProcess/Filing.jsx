
import React, { useState } from "react";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Table, TableBody, TableCell, TableContainer,TableHead,TableRow, TextField, Typography,Paper,} from "@mui/material";
import toast from "react-hot-toast";
import './Filing.css';
import Navbar from "../Navbar/Navbar";
import Setting from "./Setting";
import Buffing from "./Buffing";

const Filing = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [afterWeight, setAfterWeight] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [movedItems, setMovedItems] = useState([]);
  const [entries, setEntries] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items] = useState([
  { item: "Ring", beforeWeight: "10", touch: "92", purity: "22K" },
  { item: "Chain", beforeWeight: "18", touch: "91", purity: "22K" },
  { item: "Earring", beforeWeight: "5", touch: "90", purity: "22K" }
]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const clearFields = () => {
    setDate("");
    setName("");
    setAfterWeight("");
    setRemarks("");
    setSelectedItem(null);
    setEditIndex(null);
  };

  const closeModal = () => {
    clearFields();
    setIsModalOpen(false);
  };

  const handleToast = (msg) => toast.error(msg);

  const handleSave = () => {
    if (!name || !selectedItem) {
      handleToast("Please select a member and an item.");
      return;
  }

    const newEntry = {
      date,
      name,
      itemName: selectedItem.item,
      beforeWeight: selectedItem.beforeWeight,
      touch: selectedItem.touch,
      purity: selectedItem.purity,
      afterWeight,
      remarks,
    };

    if (editIndex !== null) {
      const updated = [...entries];
      updated[editIndex] = newEntry;
      setEntries(updated);
      toast.success("Updated successfully!");
    } else {
      const isAlreadyAssigned = entries.some(
        (entry) => entry.itemName === selectedItem.item
      );
      if (isAlreadyAssigned) {
        handleToast("This item is already assigned.");
        return;
      }
      setEntries([...entries, newEntry]);
      toast.success("Assigned successfully!");
    }
    closeModal();
  };

  const handleViewEdit = (index) => {
    const entry = entries[index];
    setDate(entry.date);
    setName(entry.name);
    setAfterWeight(entry.afterWeight || "");
    setRemarks(entry.remarks || "");
    setSelectedItem({
      item: entry.itemName,
      beforeWeight: entry.beforeWeight,
      touch: entry.touch,
      purity: entry.purity,
    });
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // Filtered completed items
  const completedItems = entries.filter((entry) => {
    const entryDate = new Date(entry.date);
    const isAfterWeight = entry.afterWeight;
    const isInDateRange =
      (!fromDate || new Date(fromDate) <= entryDate) &&
      (!toDate || new Date(toDate) >= entryDate);
    const statusMatch =
      !statusFilter || (statusFilter === entry.movedTo);
    return isAfterWeight && isInDateRange && statusMatch;
  });

  return (
    <> 
    <Navbar/>
    <Box sx={{ p: 3 }}>
      <div className="top-bar">
        <div className="filters">
          <TextField
            type="date"
            label="From Date"
            size="small"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="date"
            label="To Date"
            size="small"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Select
            size="small"
            displayEmpty
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}  >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Setting">Setting</MenuItem>
            <MenuItem value="Buffing">Buffing</MenuItem>
          </Select>
        </div>
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>  Add Filing Items  </Button>
      </div>
      <div className="table-wrapper">
        {/* Filing Assignments Table - LEFT */}
        <div className="left-table">
          <Typography variant="h6" gutterBottom>
            Filing Assignments
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Member</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Touch</TableCell>
                  <TableCell>Purity</TableCell>
                  <TableCell>After Weight</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.date}</TableCell>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.itemName}</TableCell>
                    <TableCell>{entry.beforeWeight}</TableCell>
                    <TableCell>{entry.touch}</TableCell>
                    <TableCell>{entry.purity}</TableCell>
                     <TableCell>{entry.afterWeight || "-"}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleViewEdit(index)}>View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/* Completed Items Table - RIGHT */}
        <div className="right-table">
          <Typography variant="h6" gutterBottom>
            Completed Items
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
            <TableHead>
  <TableRow>
    <TableCell>S.No</TableCell>
    <TableCell>Item</TableCell>
    <TableCell>After Wt</TableCell>
    <TableCell>Touch</TableCell>
    <TableCell>Purity</TableCell>
    <TableCell>Has Stone?</TableCell> 
    <TableCell>Next</TableCell>
    <TableCell>Status</TableCell>
    <TableCell>Move</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {completedItems.map((entry, index) => (
    <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{entry.itemName}</TableCell>
      <TableCell>{entry.afterWeight}</TableCell>
      <TableCell>{entry.touch}</TableCell>
      <TableCell>
        {(Number(entry.afterWeight) * Number(entry.touch) / 100).toFixed(2)}
      </TableCell>
      {/* ✅ Has Stone? */}
      <TableCell>
        <Select
          value={entry.hasStone || ""}
          onChange={(e) => {
            const updated = [...entries];
            updated[index].hasStone = e.target.value;
            setEntries(updated);
          }}
          size="small"
          displayEmpty >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </TableCell>
      {/* Next Step */}
      <TableCell>
        {entry.hasStone === "Yes"? "Setting": entry.hasStone === "No" ? "Buffing": ""}
      </TableCell>
      {/* Current Status */}
      <TableCell>{entry.movedTo || "-"}</TableCell>
      {/* Move Button */}
      <TableCell>
        {(entry.hasStone === "Yes" || entry.hasStone === "No") && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              const updated = [...entries];
              updated[index].movedTo =
                entry.hasStone === "Yes" ? "Moved to Setting" : "Moved to Buffing";
              setEntries(updated);
              setMovedItems([...movedItems, { ...entry }]);
            }}  >
            Move
          </Button>
        )}
      </TableCell>
    </TableRow>
  ))}
</TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
  
    <Dialog open={isModalOpen} onClose={closeModal} fullWidth maxWidth={false} // disables default width constraints
  PaperProps={{ sx: { width: '55rem !important' }, }} >
    <DialogTitle>{editIndex !== null ? "Update Assigned Item" : "Assign Item to Filing Member"}</DialogTitle>
    <DialogContent>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <TextField
          label="Date"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }} />
        <Select
          value={name}
          onChange={(e) => setName(e.target.value)}
          displayEmpty
          fullWidth>
          <MenuItem value="">Select Member</MenuItem>
          <MenuItem value="Dhanusha">Dhanusha</MenuItem>
          <MenuItem value="Indusha">Indusha</MenuItem>
          <MenuItem value="Vignesh">Vignesh</MenuItem>
        </Select>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography fontWeight="bold">Available Filing Items</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Touch</TableCell>
              <TableCell>Purity</TableCell>
              <TableCell>Assigned To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(editIndex !== null ? [selectedItem] : items).map((itemData, idx) => {
  const assigned = entries.find((e) => e.itemName === itemData.item);        
              return (
       <TableRow key={idx} hover onClick={() => setSelectedItem(itemData)}
       sx={{ cursor: "pointer", backgroundColor: selectedItem?.item === itemData.item? "#f0f0ff": assigned ? "#e0f7e9" : "white", }}>
                  <TableCell>
                    <input
                      type="radio"
                      name="select"
                      checked={selectedItem?.item === itemData.item}
                      readOnly />
                  </TableCell>
                  <TableCell>{itemData.item}</TableCell>
                  <TableCell>{itemData.beforeWeight}</TableCell>
                  <TableCell>{itemData.touch}</TableCell>
                  <TableCell>{itemData.purity}</TableCell>
                  <TableCell>{assigned ? assigned.name : "Unassigned"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>

      {/* Show After Weight and Remarks if editing */}
      {editIndex !== null && (
        <Box sx={{ mt: 3 }}>
          <TextField
            label="After Weight"
            fullWidth
            value={afterWeight}
            onChange={(e) => setAfterWeight(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Remarks"
            fullWidth
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </Box>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={closeModal}>Cancel</Button>
      <Button variant="contained" onClick={handleSave}>
        {editIndex !== null ? "Update" : "Assign"}
      </Button>
    </DialogActions>
  </Dialog>
    </Box>


<Setting movedItems={movedItems} setMovedItems={setMovedItems} />
<Buffing movedItems={movedItems} />
    </>
  );
};
export default Filing;


