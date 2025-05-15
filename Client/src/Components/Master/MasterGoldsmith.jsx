import React, { useState } from "react";
import "./MasterGoldsmith.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  InputAdornment
} from "@mui/material";
import { Edit, Delete, Search } from "@mui/icons-material";

function MasterGoldsmith() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    clearForm();
  };

  const clearForm = () => {
    setCustomerName("");
    setPhoneNumber("");
    setAddress("");
    setEditIndex(null);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editIndex] = {
        customerName,
        phoneNumber,
        address,
      };
      setCustomers(updatedCustomers);
    } else {
      setCustomers([...customers, { customerName, phoneNumber, address }]);
    }
    closeModal();
  };

  const handleEdit = (index) => {
    const customer = customers[index];
    setCustomerName(customer.customerName);
    setPhoneNumber(customer.phoneNumber);
    setAddress(customer.address);
    setEditIndex(index);
    openModal();
  };

  const handleDelete = (index) => {
    const updatedCustomers = [...customers];
    updatedCustomers.splice(index, 1);
    setCustomers(updatedCustomers);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customer-container">
      <Button
        style={{
          backgroundColor: "#F5F5F5",
          color: "black",
          borderColor: "#25274D",
          borderStyle: "solid",
          borderWidth: "2px",
        }}
        variant="contained"
        onClick={openModal}
      >
        Add Casting Workers
      </Button>

<TextField 
sx={{marginLeft:'47.3rem'}}
          placeholder="Search by Name"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle style={{ color: "#a33768" }}>
          {editIndex !== null ? "Edit Customer" : "Add New Customer"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Worker Name"
            type="text"
            fullWidth
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>S.No</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Name Not Found
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{customer.customerName}</TableCell>
                  <TableCell>{customer.phoneNumber}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        handleEdit(customers.indexOf(customer))
                      }
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        handleDelete(customers.indexOf(customer))
                      }
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MasterGoldsmith;
