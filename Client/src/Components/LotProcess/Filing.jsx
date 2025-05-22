import React, { useState } from "react";
import {Button,Dialog, DialogTitle,DialogContent,DialogActions,TextField,Snackbar} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Filing.css'
import { Checkbox, FormControlLabel } from '@mui/material';
import { Edit, Delete } from "@mui/icons-material";


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
  background: "linear-gradient(to right, #bf883b, #ebedee, #bf883b )",
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



        <div className="popup-column">
                  <button className="add-btn" onClick={addItem}>Add Item</button>
                  <div className="scroll-table">
                    <table>
                      <thead >
                        <tr>
                          <th>Item</th>
                          <th>Weight</th>
                          <th>Touch</th>
                          <th>Purity</th>
                          <th>Remarks</th>
                          <th> Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <input
                                type="text"
                                value={item.name}
                                onChange={(e) =>
                                  handleItemChange(index, "name", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={item.weight}
                                onChange={(e) =>
                                  handleItemChange(index, "weight", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={item.touch}
                                onChange={(e) =>
                                  handleItemChange(index, "touch", e.target.value)
                                }
                              />
                            </td>
                        

                            <td>
  {(
    (parseFloat(item.weight || 0) *
     parseFloat(item.touch || 0)) / 100
  ).toFixed(3)}
</td>
<td>
        <input
          type="text"
          value={item.remark}
          onChange={(e) =>
            handleItemChange(index, "remark", e.target.value)
          }
        />
      </td>

<td>
        <div style={{ display: 'flex', gap: '0px' }}>
    <Button onClick={() => handleEditItem(index)} color="primary">
      <Edit />
    </Button>
    <Button onClick={() => handleDeleteItem(index)} color="error">
      <Delete />
    </Button>
  </div>
      </td>

                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>After Weight: <strong>{afterWeight}</strong></p>
                  

                  <button className="save-btn" onClick={handleSave}>
                    {editIndex !== null ? "Update" : "Save"}
                  </button>
                </div>





<TableContainer component={Paper} sx={{ width: "100%", margin: "0 auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                {/* <TableCell>Date</TableCell> */}
                <TableCell>Item Name</TableCell>
                <TableCell>Has Stone?</TableCell>
                <TableCell>Next Process</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  {/* <TableCell>{item.date}</TableCell> */}
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <TextField
                      select
                      value={item.hasStone}
                      onChange={(e) => handleStoneChange(index, e.target.value)}
                      size="small"
                    >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </TextField>
                  </TableCell>
                  <TableCell>{item.nextProcess}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleMoveToNext(index)}
                      disabled={!item.nextProcess}
                    >
                      Move
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredItems.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No records found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>


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


        <div className="tables-container">
        <div className="left-table"> 
        <h3 style={{textAlign:'center', color:'#d40b4e',fontSize:'1.3rem',fontWeight:'bold'}}> Filing </h3>
        <TableContainer component={Paper} style={{ marginTop: "1rem",width:"60rem"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >S.No</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Date</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Name</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Before Weight</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Purity</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Touch</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Difference</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >After Weight</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.beforeWeight}</TableCell>
                  <TableCell>{entry.purity}</TableCell>
                  <TableCell>{entry.touch}</TableCell>
                  <TableCell>{entry.difference}</TableCell>
                  <TableCell>{entry.afterWeight}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleViewEdit(index)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        <div className="right-table">  
<h3 style={{textAlign:'center',color:'#d40b4e',fontSize:'1.3rem',fontWeight:'bold'}}> Filing Items </h3>
        <TableContainer component={Paper} style={{ marginTop: "1rem",width:"30rem"}} > 
          <Table> 
            <TableHead> 
              <TableRow> 
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} > S.No</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} > Item Name</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} > Weight</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} > Touch</TableCell>
                <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} > Purity</TableCell>              
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
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
