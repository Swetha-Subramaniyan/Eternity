// import React from 'react'

// const MasterSetting = () => {
//   return (
//     <div>MasterSetting</div>
//   )
// }

// export default MasterSetting




import React, { useState } from "react";
import "./MasterSetting.css"; // You can reuse the same CSS
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const MasterSetting = () => {
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
        Add Setting Customer
      </Button>

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle style={{ color: "#a33768" }}>Add New Setting</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Setting Name"
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

export default MasterSetting;