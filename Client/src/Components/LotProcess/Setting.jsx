import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../Navbar/Navbar";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import './Setting.css';



import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personName, setPersonName] = useState([]);
  const [beforeWeight, setBeforeWeight] = useState("");
  const [purity, setPurity] = useState("");
  const [touch, setTouch] = useState("");
  const [difference, setDifference] = useState("");
  const [afterWeight, setAfterWeight] = useState("");
  const [date,setDate] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [settingsList, setSettingsList] = useState([]); // Table data



   // Toast state
   const [openToast, setOpenToast] = useState(false);
   const [toastMessage, setToastMessage] = useState("");
 
   const handleToast = (message) => {
     setToastMessage(message);
     setOpenToast(true);
   };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };



  const handleSave = () => {
    // Check if at least one value is filled
    const hasData = date || personName.length > 0 || beforeWeight || purity || touch || difference || afterWeight;
  
    if (!hasData) {
      handleToast("Please fill in at least one field before saving.");
      return;
    }

 
  
    const updatedSetting = {
      settingName: personName.join(", "),
      date,
      beforeWeight,
      purity,
      touch,
      difference,
      afterWeight,
    };
  
    if (editIndex !== null) {
      // Update existing item
      const updatedList = [...settingsList];
      updatedList[editIndex] = updatedSetting;
      setSettingsList(updatedList);      
      setEditIndex(null); // Reset edit index
      toast.success("Updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Add new item
      setSettingsList([...settingsList, updatedSetting]);
      toast.success("Saved successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  
    // Clear form
    setPersonName([]);
    setBeforeWeight("");
    setPurity("");
    setTouch("");
    setDifference("");
    setAfterWeight("");
    setDate("");
  
    closeModal();
  };
  

  const handleViewEdit = (index) => {
    const item = settingsList[index];
    setDate(item.date);
    setPersonName(item.settingName.split(", "));
    setBeforeWeight(item.beforeWeight);
    setPurity(item.purity);
    setTouch(item.touch);
    setDifference(item.difference);
    setAfterWeight(item.afterWeight);
    setIsModalOpen(true);
    setEditIndex(index);
  };
  

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="customer-container">
        <br />
        <TextField
          id="date-filter"
          label="From Date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          id="date-filter"
          label="To Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          sx={{marginLeft:'1rem'}}
        />

        <Button
          style={{
            backgroundColor: "#F5F5F5",
            color: "black",
            borderColor: "#25274D",
            borderStyle: "solid",
            borderWidth: "2px",
            marginLeft: "50rem",
            position:"absolute"
          }}
          variant="contained"
          onClick={openModal}
        >
          Add Setting Items
        </Button>

        {/* Dialog */}
        <Dialog open={isModalOpen} onClose={closeModal}>
          <DialogTitle style={{ color: "#a33768" }}>Setting Items</DialogTitle>
          <DialogContent>
<br/> 
          <TextField
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
            />


            <FormControl sx={{ m: 0, width: 351, marginTop: 1 }}>
              <InputLabel id="demo-multiple-checkbox-label">Setting Name</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Casting Name" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.includes(name)} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              label="Before Weight"
              type="number"
              fullWidth
              value={beforeWeight}
              onChange={(e) => setBeforeWeight(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Purity"
              type="number"
              fullWidth
              value={purity}
              onChange={(e) => setPurity(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Touch"
              type="number"
              fullWidth
              value={touch}
              onChange={(e) => setTouch(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Difference"
              type="number"
              fullWidth
              value={difference}
              onChange={(e) => setDifference(e.target.value)}
            />
            <TextField
              margin="dense"
              label="After Weight"
              type="number"
              fullWidth
              value={afterWeight}
              onChange={(e) => setAfterWeight(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="secondary">Cancel</Button>
            {/* <Button onClick={handleSave} color="primary">Save</Button> */}

            <Button onClick={handleSave} color="primary">
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Table */}
        <br />

        <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Before Weight</TableCell>
                  <TableCell>Purity</TableCell>
                  <TableCell>Touch</TableCell>
                  <TableCell>Difference</TableCell>
                  <TableCell>After Weight</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {settingsList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.settingName}</TableCell>
                    <TableCell>{item.beforeWeight}</TableCell>
                    <TableCell>{item.purity}</TableCell>
                    <TableCell>{item.touch}</TableCell>
                    <TableCell>{item.difference}</TableCell>
                    <TableCell>{item.afterWeight}</TableCell>
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

export default Setting;
