import React, { useState } from "react";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem, Select, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TextField, Typography, Paper
} from "@mui/material";
import toast from "react-hot-toast";

const Buffing = ({ movedItems = [] }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [assignedItems, setAssignedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const availableItems = movedItems?.filter((item) => {
    const movedTo = item?.movedTo?.toLowerCase() || "";
    const fromProcess = item?.fromProcess?.toLowerCase() || "";
    const stage = item?.stage?.toLowerCase() || "";
    const status = item?.status?.toLowerCase() || "";

    return movedTo.includes("buffing") || (fromProcess.includes("setting") || (stage === "setting" && status === "completed"));
  });

  const clearFields = () => {
    setDate("");
    setName("");
    setSelectedItem(null);
  };

  const closeModal = () => {
    clearFields();
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (!selectedItem) {
      toast.error("Please select an item");
      return;
    }
    if (!name) {
      toast.error("Please select a member");
      return;
    }

    const alreadyAssigned = assignedItems.find(item => item.itemName === selectedItem.itemName);
    if (alreadyAssigned) {
      toast.error("Item already assigned");
      return;
    }

    const updatedItem = {
      ...selectedItem,
      assignedTo: name
    };

    setAssignedItems((prev) => [...prev, updatedItem]);
    clearFields();
    setIsModalOpen(false);
    toast.success("Item Assigned");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Buffing Process</Typography>

      <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
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
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          Add Buffing Items
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 3 }}>
  {/* Left Side - Assigned Items */}
  <Box sx={{ flex: 1 }}>
    <Typography fontWeight="bold" sx={{ mb: 1 }}>Assigned Items</Typography>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Before Weight</TableCell>
            <TableCell>Touch</TableCell>
            <TableCell>Purity</TableCell>
            <TableCell>After Weight</TableCell>
            <TableCell>Stone Weight</TableCell>
            <TableCell>Stone Charge</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assignedItems.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{date}</TableCell>
              <TableCell>{entry.assignedTo}</TableCell>
              <TableCell>{entry.itemName}</TableCell>
              <TableCell>{entry.afterWeight}</TableCell>
              <TableCell>{entry.touch}</TableCell>
              <TableCell>{entry.purity}</TableCell>
              <TableCell>{entry.finalAfterWeight || "-"}</TableCell>
              <TableCell>{entry.stoneWeight || "-"}</TableCell>
              <TableCell>{entry.stoneCharge || "-"}</TableCell>
              <TableCell>
                <Button size="small" variant="outlined" onClick={() => {
                  setEditItem(entry);
                  setEditModalOpen(true);
                }}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>

  {/* Right Side - Completed Items */}
  <Box sx={{ flex: 1 }}>
    <Typography fontWeight="bold" sx={{ mb: 1 }}>Completed Items</Typography>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Before Weight</TableCell>
            <TableCell>Touch</TableCell>
            <TableCell>Purity</TableCell>
            <TableCell>After Weight</TableCell>
            <TableCell>Stone Weight</TableCell>
            <TableCell>Stone Charge</TableCell>
            <TableCell>Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completedItems.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{date}</TableCell>
              <TableCell>{item.assignedTo}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>{item.afterWeight}</TableCell>
              <TableCell>{item.touch}</TableCell>
              <TableCell>{item.purity}</TableCell>
              <TableCell>{item.finalAfterWeight}</TableCell>
              <TableCell>{item.stoneWeight || "-"}</TableCell>
              <TableCell>{item.stoneCharge || "-"}</TableCell>
              <TableCell>{item.remarks || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</Box>

      <Dialog open={isModalOpen} onClose={closeModal} fullWidth maxWidth="md">
        <DialogTitle>Assign to Buffing</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <TextField
              label="Date"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <Select
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSelectedItem((prev) => prev ? { ...prev, assignedTo: e.target.value } : null);
              }}
              displayEmpty
              fullWidth
            >
              <MenuItem value="">Select Member</MenuItem>
              <MenuItem value="Dhanusha">Dhanusha</MenuItem>
              <MenuItem value="Hari">Hari</MenuItem>
              <MenuItem value="Ravi">Ravi</MenuItem>
            </Select>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography fontWeight="bold">Available Items for Buffing</Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Before Weight</TableCell>
                  <TableCell>Touch</TableCell>
                  <TableCell>Purity</TableCell>
                  <TableCell>Stone Weight</TableCell>
                  <TableCell>Stone Charge</TableCell>
                  <TableCell>Assign To</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {availableItems.map((item, idx) => (
                  <TableRow
                    key={idx}
                    hover
                    onClick={() =>
                      setSelectedItem((prev) => ({
                        ...item,
                        assignedTo: prev?.assignedTo || name,
                      }))
                    }
                    sx={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedItem?.itemName === item.itemName ? "#f0f0ff" : "white",
                    }}
                  >
                    <TableCell>
                      <input
                        type="radio"
                        checked={selectedItem?.itemName === item.itemName}
                        readOnly
                      />
                    </TableCell>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell>{item.afterWeight}</TableCell>
                    <TableCell>{item.touch}</TableCell>
                    <TableCell>{item.purity}</TableCell>
                    <TableCell>{item.stoneWeight || "-"}</TableCell>
                    <TableCell>{item.stoneCharge || "-"}</TableCell>
                    <TableCell>{
                      assignedItems.find((assigned) => assigned.itemName === item.itemName)?.assignedTo || "-"
                    }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Assign</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <DialogTitle>Update Buffing Details</DialogTitle>
        <DialogContent>
          <TextField
            label="Final After Weight"
            type="number"
            fullWidth
            margin="dense"
            value={editItem?.finalAfterWeight || ""}
            onChange={(e) =>
              setEditItem({ ...editItem, finalAfterWeight: e.target.value })
            }
          />
          <TextField
            label="Remarks"
            fullWidth
            margin="dense"
            value={editItem?.remarks || ""}
            onChange={(e) =>
              setEditItem({ ...editItem, remarks: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditModalOpen(false)}>Cancel</Button>
          <Button
            variant="contained"

            onClick={() => {
              setAssignedItems((prev) =>
                prev.map((item) =>
                  item.itemName === editItem.itemName ? { ...item, ...editItem, status: "Completed" } : item
                )
              );
            
              const alreadyCompleted = completedItems.some(item => item.itemName === editItem.itemName);
              if (!alreadyCompleted) {
                setCompletedItems((prev) => [...prev, { ...editItem, status: "Completed" }]);
              }
            
              setEditModalOpen(false);
              toast.success("Item marked as completed");
            }}
            
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Buffing;