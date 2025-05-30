import React, { useState } from "react";
import {Button,Dialog, DialogTitle,DialogContent,DialogActions,TextField,Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Filing.css'

const Filing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [beforeWeight, setBeforeWeight] = useState("");
  const [purity, setPurity] = useState("");
  const [touch, setTouch] = useState("");
  const [difference, setDifference] = useState("");
  const [afterWeight, setAfterWeight] = useState("");
  const [entries, setEntries] = useState([]);
  const [castingItems, setCastingItems] = useState([
    { name: "", weight: "", touch: "", hasStone: false }
  ]);
  
  const addItem = () => {
    setItems([...items, { name: "", weight: "", touch: "" }]);
  };

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Ring A",
      date: "2025-05-19",
      hasStone: "",
      nextProcess: "",
      status: "Pending",
    },
    {
      id: 2,
      name: "Pendant B",
      date: "2025-05-20",
      hasStone: "",
      nextProcess: "",
      status: "Pending",
    },
  ]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStoneChange = (index, value) => {
    const updated = [...items];
    updated[index].hasStone = value;
    updated[index].nextProcess = value === "Yes" ? "Setting" : value === "No" ? "Buffing" : "";
    setItems(updated);
  };

  const handleMoveToNext = (index) => {
    const updated = [...items];
    updated[index].status = "Moved to " + updated[index].nextProcess;
    setItems(updated);
  };

  const filteredItems = items.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFromDate = !fromDate || item.date >= fromDate;
    const matchToDate = !toDate || item.date <= toDate;
    return matchSearch && matchFromDate && matchToDate;
  });


  // Toast state
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleToast = (message) => {
    setToastMessage(message);
    setOpenToast(true);
  };

  const openModal = () => {
    clearFields();
    setEditIndex(null); // new entry
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    clearFields();
    setEditIndex(null);
  };

  const clearFields = () => {
    setDate("");
    setName("");
    setBeforeWeight("");
    setPurity("");
    setTouch("");
    setDifference("");
    setAfterWeight("");
  };

  const handleSavee = () => {
    const hasData =
      date || name || beforeWeight || purity || touch || difference || afterWeight;

    if (!hasData) {
      handleToast("Please fill in at least one field before saving.");
      return;

      
    }

    const newEntry = {
      date,
      name,
      beforeWeight,
      purity,
      touch,
      difference,
      afterWeight,
    };

    if (editIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = newEntry;
      setEntries(updatedEntries);
      toast.success("Updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setEntries([...entries, newEntry]);
      toast.success("Saved successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    }

    closeModal();
  };

  const handleViewEdit = (index) => {
    const entry = entries[index];
    setDate(entry.date);
    setName(entry.name);
    setBeforeWeight(entry.beforeWeight);
    setPurity(entry.purity);
    setTouch(entry.touch);
    setDifference(entry.difference);
    setAfterWeight(entry.afterWeight);
    setEditIndex(index);
    setIsModalOpen(true);
  };


  const handleItemChange = (index, field, value) => {
    const updatedItems = [...castingItems];
    updatedItems[index][field] = value;
    setCastingItems(updatedItems);
  };
  const handleSave = () => {
    const buffingItems = castingItems.filter(item => item.hasStone);
    const settingItems = castingItems.filter(item => !item.hasStone);
  
    // Example logging, or send them to appropriate processing functions
    console.log("To Buffing Process:", buffingItems);
    console.log("To Setting Process:", settingItems);
  
    // Then proceed with saving logic...
  };


  
    

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="filing-container">
        <br />
       

<Box display="flex" alignItems="center" gap="1rem" mb={2}>
  <TextField
    id="from-date"
    label="From Date"
    type="date"
    InputLabelProps={{ shrink: true }}
  />
  <TextField
    id="to-date"
    label="To Date"
    type="date"
    InputLabelProps={{ shrink: true }}
  />
  <FormControl>
    <InputLabel id="status-label">Status</InputLabel>
    <Select
      labelId="status-label"
      id="status"
      value={name}
      label="Status"
      onChange={(e) => setName(e.target.value)}
      style={{ minWidth: 150 }}
    >
      <MenuItem value="Processing">Processing</MenuItem>
      <MenuItem value="Completed">Completed</MenuItem>
    </Select>
  </FormControl>
 
        <Button   onClick={openModal} sx={{ m: 0, marginLeft:95, backgroundColor:'#5f4917', color:'white' }}>
          Add Filing Items
</Button>
</Box>
       

        <Dialog open={isModalOpen} onClose={closeModal} 
        >
          <DialogTitle style={{ color: "#a33768" }}>Filing</DialogTitle>

          <Dialog
  open={isModalOpen}
  onClose={closeModal}
  maxWidth="lg"
  fullWidth
  PaperProps={{
    style: { minHeight: "300px", padding: "1rem",minWidth:"70%" , height:"fit-content"},
  }}
>
  <DialogTitle 

  style={{ color: "#855819", 
  textAlign: "center", 
  fontSize:"1.3rem" ,
  fontWeight:'bold', 
  background:'aliceblue',
  height:'1.4rem'

  }}
  >
    Filing Entry
  </DialogTitle>

  <DialogContent>
    <Box display="flex" gap={4}>
      {/* Left Column - Filing Section */}
      <Box flex={1} p={2} borderRight="1px solid #ccc">
        <h3 style={{ textAlign: "center", marginBottom: "1rem",color:'brown' }}>Filing</h3>
        <TextField
          id="date"
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          style={{ marginBottom: "1rem" }}
        />
        <FormControl fullWidth>
          <InputLabel id="name-label">Name</InputLabel>
          <Select
            labelId="name-label"
            id="name"
            value={name}
            label="Name"
            onChange={(e) => setName(e.target.value)}
          >
            <MenuItem value="Dhanusha">Dhanusha</MenuItem>
            <MenuItem value="Saranya">Saranya</MenuItem>
            <MenuItem value="Boobalan">Boobalan</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Right Column - Casting Items */}
      <Box flex={2} p={2}>
        <h3 style={{ textAlign: "center", color:'brown' }}>Casting Items</h3>
        <br/>


        <div style={{ width: "100%", margin: "0 auto" }}>
  <table style={{ width: "100%", borderCollapse: "collapse" }} border="1">
    <thead>
      <tr>
        <th>S.No</th>
        <th>Date</th>
        <th>Item Name</th>
        <th>Has Stone?</th>
        <th>Next Process</th>
        <th>Status</th>
        <th>Action</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      {filteredItems.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.date}</td>
          <td>{item.name}</td>
          <td>
            <select
              value={item.hasStone}
              onChange={(e) => handleStoneChange(index, e.target.value)}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            {item.hasStone === "Yes" && (
      <input
        type="number"
        placeholder="Stone Wt"
        value={item.stoneWeight || ""}
        onChange={(e) => handleStoneWeightChange(index, e.target.value)}
        style={{ width: "80px",height:'2rem', marginTop:'1rem' }}
        required
      />
    )}
          </td>
          <td>{item.nextProcess}</td>
          <td>{item.status}</td>
          <td>
            <button
              onClick={() => handleMoveToNext(index)}
              disabled={!item.nextProcess}
            >
              Move
            </button>
          </td>
          <td>{item.remarks || ""}</td>
        </tr>
      ))}
      {filteredItems.length === 0 && (
        <tr>
          <td colSpan="8" style={{ textAlign: "center" }}>
            No records found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

      </Box>
    </Box>
  </DialogContent>

  <DialogActions>
    <Button onClick={closeModal} color="secondary">
      Cancel
    </Button>
    <Button onClick={handleSavee} color="primary">
      {editIndex !== null ? "Update" : "Save"}
    </Button>
  </DialogActions>
</Dialog>
          <DialogActions>
            <Button onClick={closeModal} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>



   <div className="tables-container" style={{ display: 'flex', gap: '2rem' }}>
  {/* Left Table - Filing */}
  <div className="left-table">
    <h3 style={{ textAlign: 'center', color: '#d40b4e', fontSize: '1.3rem', fontWeight: 'bold' }}>
      Filing
    </h3>
    <div style={{ marginTop: '1rem', width: '60rem', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr>
            <th style={{ fontSize: '1rem' }}>S.No</th>
            <th style={{ fontSize: '1rem' }}>Date</th>
            <th style={{ fontSize: '1rem' }}>Name</th>
            <th style={{ fontSize: '1rem' }}>Before Weight</th>
            <th style={{ fontSize: '1rem' }}>Purity</th>
            <th style={{ fontSize: '1rem' }}>Touch</th>
            <th style={{ fontSize: '1rem' }}>Difference</th>
            <th style={{ fontSize: '1rem' }}>After Weight</th>
            <th style={{ fontSize: '1rem' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.date}</td>
              <td>{entry.name}</td>
              <td>{entry.beforeWeight}</td>
              <td>{entry.purity}</td>
              <td>{entry.touch}</td>
              <td>{entry.difference}</td>
              <td>{entry.afterWeight}</td>
              <td>
                <button onClick={() => handleViewEdit(index)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Right Table - Filing Items */}
  <div className="right-table">
    <h3 style={{ textAlign: 'center', color: '#d40b4e', fontSize: '1.3rem', fontWeight: 'bold' }}>
      Filing Items
    </h3>
    <div style={{ marginTop: '1rem', width: '30rem', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }} border="1">
        <thead>
          <tr>
            <th style={{ fontSize: '1rem' }}>S.No</th>
            <th style={{ fontSize: '1rem' }}>Item Name</th>
            <th style={{ fontSize: '1rem' }}>Weight</th>
            <th style={{ fontSize: '1rem' }}>Touch</th>
            <th style={{ fontSize: '1rem' }}>Purity</th>
          </tr>
        </thead>
        <tbody>
        
            <tr >
            
            </tr>
        
        </tbody>
      </table>
    </div>
  </div>
</div>


        {/* Snackbar for Toast */}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openToast}
          autoHideDuration={3000}
          onClose={() => setOpenToast(false)}
        >
          <MuiAlert
            onClose={() => setOpenToast(false)}
            severity="warning"
            elevation={6}
            variant="filled"
          >
            {toastMessage}
          </MuiAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default Filing;


