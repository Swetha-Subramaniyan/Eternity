// import React from 'react'

// const MasterGoldsmith = () => {
//   return (
//     <div>MasterGoldsmith</div>
//   )
// }

// export default MasterGoldsmith


import React, { useState } from "react";
import "./MasterGoldsmith.css"; // You can reuse the same CSS
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const MasterGoldsmith = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goldsmithName, setGoldsmithName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        Add Casting/Melting
      </Button>

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle style={{ color: "#a33768" }}>Add New Casting/Melting</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Casting Name"
            type="text"
            fullWidth
            value={goldsmithName}
            onChange={(e) => setGoldsmithName(e.target.value)}
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
          <Button onClick={closeModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MasterGoldsmith;


