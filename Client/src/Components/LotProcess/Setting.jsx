import React, { useState } from "react";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  MenuItem, Select, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TextField, Typography, Paper
} from "@mui/material";
import toast from "react-hot-toast";

const Setting = ({ movedItems, setMovedItems }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [viewIndex, setViewIndex] = useState(null);
  const [afterWeight, setAfterWeight] = useState("");
  const [remarks, setRemarks] = useState("");
  const [stoneWeight, setStoneWeight] = useState("");
  const [stoneCharge, setStoneCharge] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [statusFilter, setStatusFilter] = useState(""); // "Completed", "Pending", ""

  const availableItems = movedItems?.filter(item => item.movedTo === "Moved to Setting");

  const clearFields = () => {
    setDate("");
    setName("");
    setSelectedItems([]);
    setAfterWeight("");
    setRemarks("");
    setStoneWeight("");
    setStoneCharge("");
    setViewIndex(null);
  };

  const closeModal = () => {
    clearFields();
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (!date || selectedItems.length === 0) {
      toast.error("Please select date and at least one item.");
      return;
    }

    const newEntries = selectedItems.map(({ item, member }) => {
      if (!member) {
        toast.error(`Assign member for ${item.itemName}`);
        return null;
      }
      const exists = entries.find((e) => e.itemName === item.itemName);
      if (exists) {
        toast.error(`Item ${item.itemName} already assigned.`);
        return null;
      }
      return {
        date,
        name: member,
        itemName: item.itemName,
        beforeWeight: item.afterWeight,
        afterWeight: "",
        remarks: "",
        stoneWeight: "",
        stoneCharge: "",
        touch: item.touch,
        purity: item.purity,
      };
    });

    const valid = newEntries.filter(e => e !== null);
    if (valid.length === 0) return;

    setEntries(prev => [...prev, ...valid]);
    toast.success("Items assigned.");
    closeModal();
  };

  const handleOpenView = (index) => {
    const item = entries[index];
    setViewIndex(index);
    setAfterWeight(item.afterWeight || "");
    setRemarks(item.remarks || "");
    setStoneWeight(item.stoneWeight || "");
    setStoneCharge(item.stoneCharge || "");
    setIsViewModalOpen(true);
  };

  const handleUpdateAfterWeight = () => {
    if (!afterWeight) {
      toast.error("Enter After Weight");
      return;
    }

    const updatedEntries = [...entries];
    const updatedItem = {
      ...updatedEntries[viewIndex],
      afterWeight,
      remarks,
      stoneWeight,
      stoneCharge
    };
    updatedEntries[viewIndex] = updatedItem;
    setEntries(updatedEntries);

    // Mark item in movedItems as completed
    setMovedItems(prev =>
      prev.map(item =>
        item.itemName === updatedItem.itemName
          ? { ...item, fromProcess: "Completed from Setting" }
          : item
      )
    );

    toast.success("Updated Successfully");
    setIsViewModalOpen(false);
    clearFields();
  };

  const completedItems = entries.filter(e => e.afterWeight);

  // Filter logic for entries table
  const filteredEntries = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    const dateMatch =
      (!from || entryDate >= from) &&
      (!to || entryDate <= to);

    const statusMatch =
      statusFilter === ""
        || (statusFilter === "Completed" && entry.afterWeight)
        || (statusFilter === "Pending" && !entry.afterWeight);

    return dateMatch && statusMatch;
  });

  return (
    <Box sx={{ display: "flex", gap: 3, p: 3 }}>
      {/* Left */}
      <Box sx={{ flex: 2 }}>
        <Typography variant="h6">Setting Process</Typography>

        {/* Filter Section */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            size="small"
            label="From Date"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            size="small"
            label="To Date"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <Select
            size="small"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">All Status </MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </Select>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" onClick={() => setIsModalOpen(true)}>
            Add Setting Items
          </Button>
        </Box>

        {/* Main Table */}
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell><TableCell>Member</TableCell>
                <TableCell>Item</TableCell><TableCell>Before Weight</TableCell>
                <TableCell>Touch</TableCell><TableCell>Purity</TableCell>
                <TableCell>After Weight</TableCell><TableCell>Stone Weight</TableCell>
                <TableCell>Stone Charge</TableCell><TableCell>Remarks</TableCell><TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
  {filteredEntries.length > 0 ? (
    filteredEntries.map((entry, idx) => (
      <TableRow key={idx}>
        <TableCell>{entry.date}</TableCell>
        <TableCell>{entry.name}</TableCell>
        <TableCell>{entry.itemName}</TableCell>
        <TableCell>{entry.beforeWeight}</TableCell>
        <TableCell>{entry.touch}</TableCell>
        <TableCell>{entry.purity}</TableCell>
        <TableCell>{entry.afterWeight || "-"}</TableCell>
        <TableCell>{entry.stoneWeight || "-"}</TableCell>
        <TableCell>{entry.stoneCharge || "-"}</TableCell>
        <TableCell>{entry.remarks || "-"}</TableCell>
        <TableCell>
          <Button size="small" onClick={() => handleOpenView(idx)}>View</Button>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={11} align="center" sx={{ py: 2 }}>
        No items found for selected filters.
      </TableCell>
    </TableRow>
  )}
</TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Right - Completed Items */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">Completed Items</Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell><TableCell>After Weight</TableCell>
                <TableCell>Touch</TableCell><TableCell>Purity</TableCell>
                <TableCell>Stone Weight</TableCell><TableCell>Stone Charge</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {completedItems.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.itemName}</TableCell>
                  <TableCell>{item.afterWeight}</TableCell>
                  <TableCell>{item.touch}</TableCell>
                  <TableCell>{item.purity}</TableCell>
                  <TableCell>{item.stoneWeight}</TableCell>
                  <TableCell>{item.stoneCharge}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Modal - Assign */}
      <Dialog open={isModalOpen} onClose={closeModal} fullWidth PaperProps={{ sx: { width: '35rem !important' } }}>
        <DialogTitle>Add Setting Item</DialogTitle>
        <DialogContent dividers>
          <TextField type="date" fullWidth label="Date" value={date} onChange={(e) => setDate(e.target.value)} InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
          <Select value={name} onChange={(e) => setName(e.target.value)} displayEmpty fullWidth>
            <MenuItem value="">Select Member</MenuItem>
            <MenuItem value="Dhanusha">Dhanusha</MenuItem>
            <MenuItem value="Indusha">Indusha</MenuItem>
            <MenuItem value="Ravi">Ravikannan</MenuItem>
          </Select>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Assign Setting Item:</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell><TableCell>Item</TableCell>
                <TableCell>Before Weight</TableCell><TableCell>Touch</TableCell>
                <TableCell>Purity</TableCell><TableCell>Assign To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {availableItems.map((item, idx) => {
                const selected = selectedItems.find(i => i.item.itemName === item.itemName) || {};
                return (
                  <TableRow key={idx}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={!!selected.item}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          if (checked) {
                            setSelectedItems(prev => [...prev, { item, member: name }]);
                          } else {
                            setSelectedItems(prev => prev.filter(i => i.item.itemName !== item.itemName));
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.itemName}</TableCell>
                    <TableCell>{item.afterWeight}</TableCell>
                    <TableCell>{item.touch}</TableCell>
                    <TableCell>{item.purity}</TableCell>
                    <TableCell>
                      <Select size="small" value={selected.member || ""} onChange={(e) => {
                        const updated = selectedItems.map(i =>
                          i.item.itemName === item.itemName ? { ...i, member: e.target.value } : i
                        );
                        setSelectedItems(updated);
                      }} displayEmpty>
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Dhanusha">Dhanusha</MenuItem>
                        <MenuItem value="Indusha">Indusha</MenuItem>
                        <MenuItem value="Ravi">Ravikannan</MenuItem>
                      </Select>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Assign</Button>
        </DialogActions>
      </Dialog>

      {/* Modal - View/Update */}
      <Dialog open={isViewModalOpen} onClose={() => setIsViewModalOpen(false)}>
        <DialogTitle>Enter After Weight & Details</DialogTitle>
        <DialogContent>
          <TextField label="After Weight" fullWidth type="number" value={afterWeight} onChange={(e) => setAfterWeight(e.target.value)} sx={{ mt: 2 }} />
          <TextField label="Stone Weight" fullWidth type="number" value={stoneWeight} onChange={(e) => setStoneWeight(e.target.value)} sx={{ mt: 2 }} />
          <TextField label="Stone Charge" fullWidth type="number" value={stoneCharge} onChange={(e) => setStoneCharge(e.target.value)} sx={{ mt: 2 }} />
          <TextField label="Remarks" fullWidth value={remarks} onChange={(e) => setRemarks(e.target.value)} sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsViewModalOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateAfterWeight}>Update</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Setting;
