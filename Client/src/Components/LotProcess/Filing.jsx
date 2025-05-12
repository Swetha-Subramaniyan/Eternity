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

  const handleSave = () => {
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
          InputLabelProps={{
            shrink: true,
          }}
         
        />
        <TextField
          id="date-filter"
          label="To Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginLeft: "1rem" }}
        />
        <Button
          style={{
            backgroundColor: "#F5F5F5",
            color: "black",
            borderColor: "#25274D",
            borderStyle: "solid",
            borderWidth: "2px",
            marginLeft: "50rem",
            position: "absolute",
          }}
          variant="contained"
          onClick={openModal}
        >
          Add Filing Items
        </Button>

        <Dialog open={isModalOpen} onClose={closeModal}>
          <DialogTitle style={{ color: "#a33768" }}>Filing</DialogTitle>
          <DialogContent>
            <br />
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

            <Box sx={{ minWidth: 120, marginTop: 1 }}>
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
            <Button onClick={closeModal} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>

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
