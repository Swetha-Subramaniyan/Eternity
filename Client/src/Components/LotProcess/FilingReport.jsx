import React, { useState } from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,Checkbox, Table, TableBody, TableCell,TableContainer, TableHead, TableRow, TextField, Typography, Paper} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { Delete } from "@mui/icons-material";
import styles from './FilingReport.module.css';
import Navbar from '../Navbar/Navbar';

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

const FilingReport = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState(getTodayDate());
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const items = [
    { item: "cst", beforeWeight: "50", touch: "91.7", purity: "22K", remarks: 'aaaa' },
    { item: "cst1", beforeWeight: "48", touch: "91.7", purity: "22K", remarks: 'bbbb' },
    { item: "cst2", beforeWeight: "55", touch: "91.7", purity: "22K", remarks: 'cccc' }
  ];
  const [wastagePercent, setWastagePercent] = useState('');

  const assignedItemNames = entries.flatMap(entry => entry.items.map(it => it.item));
  const handleToggle = (item) => {
    setSelectedItems(prev =>
      prev.find(i => i.item === item.item)
        ? prev.filter(i => i.item !== item.item)
        : [...prev, item]
    );
  };

  const handleAssign = () => {
    if (!date || !selectedItems.length) return alert("Select date and at least one item");
  
    const newEntry = {
      id: Date.now(), 
      date,
      items: selectedItems.map(it => ({
        ...it,
        receiptWeight: '—'
      })),
      afterWeight: '',
      productItems: [],
      scrapItems: []
    };
  
    setEntries(prev => [...prev, newEntry]);
    setSelectedItems([]);
    setDate(getTodayDate());
    setIsAssignOpen(false);
  };
  

  const handleSaveViewEntry = () => {
    const index = entries.findIndex(entry => entry.id === viewEntry.id);
    if (index === -1) return;
  
    const totalProduct = (viewEntry.productItems || []).reduce(
      (acc, item) => acc + Number(item.weight || 0), 0
    );
    const totalScrap = (viewEntry.scrapItems || []).reduce(
      (acc, item) => acc + Number(item.weight || 0), 0
    );
    const receiptWeight = (totalProduct - totalScrap).toFixed(2);
  
    const updatedEntries = [...entries];
    updatedEntries[index] = {
      ...viewEntry,
      receiptWeight
    };
  
    setEntries(updatedEntries);
    setViewEntry(null);
  };

  const totalReceipt = entries.reduce((acc, entry) => {
    const receipt = parseFloat(entry.receiptWeight || 0);
    return acc + (isNaN(receipt) ? 0 : receipt);
  }, 0);
  const totalWastage = ((totalReceipt * parseFloat(wastagePercent || 0)) / 100).toFixed(2);

  
  return (
    <>
      <Navbar />

      <div className="date-fields">
        <TextField
            id="from-date"
            label="From Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            sx={{ marginLeft: "3.5rem" }}
          />
          <TextField
            id="to-date"
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            sx={{ marginLeft: "1rem" }}
          />
          <Button
             onClick={() => setIsAssignOpen(true)}
            sx={{
              m: 2,
              marginLeft: 110,
              backgroundColor: "#5f4917",
              color: "white",
              paddingLeft:2,
              paddingRight:2
            }}
          >
            Add Filing Items
          </Button>
        </div> 

<div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '0rem' }}>
  {/* Left side: Card + Table vertically stacked */}
  <div style={{ display: 'flex', flexDirection: 'column',}}>
    <div className={styles.card}>
      <div className={styles.headingg}>Eternity Jewellery Details</div>
      <div className={styles.details}><b>Name:</b> <span>Dhanusha R</span></div>
      <div className={styles.details}><b>Phone Number:</b> <span>9342516726</span></div>
      <div className={styles.details}><b>Address:</b> <span>4/253, Coimbatore</span></div>
    </div>
    <div className={styles.tablecontainer} >
      <TableContainer component={Paper} sx={{ width: '60rem' }}>
        <Table>
          {/* Table content unchanged */}
          <TableHead>
              <TableRow>
                <TableCell align="center"><b>S.No</b></TableCell>
                <TableCell align="center"><b>Date</b></TableCell>
                <TableCell align="center"><b>Process</b></TableCell>
                <TableCell align="center"><b>Issue</b></TableCell>
                <TableCell align="center"><b>Receipt</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((group, i) => {
                const totalProduct = (group.productItems || []).reduce((acc, it) => acc + Number(it.weight || 0), 0);
                const totalScrap = (group.scrapItems || []).reduce((acc, it) => acc + Number(it.weight || 0), 0);
                const receipt = (totalProduct - totalScrap).toFixed(2);
               
                
                return (
                  <React.Fragment key={i}>
                    <TableRow>
                      <TableCell rowSpan={group.items.length}>{i + 1}</TableCell>
                      <TableCell rowSpan={group.items.length}>{group.date}</TableCell>
                      <TableCell>{group.items[0].item}</TableCell>
                      <TableCell>{group.items[0].beforeWeight}</TableCell>
                      <TableCell rowSpan={group.items.length}>{(group.receiptWeight || receipt)}g </TableCell>
                      <TableCell rowSpan={group.items.length}>
                        <FaEye style={{ cursor: 'pointer' }} onClick={() => setViewEntry(group)} />
                      </TableCell>
                    </TableRow>
                    {group.items.slice(1).map((item, idx) => (               
                      <TableRow key={`${i}-${idx}`}>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{item.beforeWeight}</TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                );
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>

  {/* Right side: Summary box */}
  <Box
    sx={{
      ml: 10,
      p: 2,
      border: '1px solid #ccc',
      borderRadius: '8px',
      minWidth: '70px',
      height: 'fit-content',
      mt: 6,
      mr: 10
    }}
  >
    <Typography variant="h6" sx={{ color:'red', marginLeft:'2rem'}}> Montly Wastage </Typography>
    <Box sx={{ mt: 2 }}>
      <Typography><strong>Total Receipt:</strong> {totalReceipt.toFixed(2)}g</Typography>
      <TextField
        label="Wastage (%)"
        type="number"
        fullWidth
        size="small"
        value={wastagePercent}
        onChange={(e) => setWastagePercent(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Typography sx={{ mt: 2 }}>
        <strong>Total Wastage:</strong> {isNaN(totalWastage) ? '0.00' : totalWastage}g
      </Typography>
    </Box>
  </Box>
</div>

      {/* Assign Dialog */}
      <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} fullWidth maxWidth={false}
        PaperProps={{ sx: { width: '50rem !important' } }}>
        <DialogTitle>Assign Filing Items</DialogTitle>
        <DialogContent>
          <TextField
            label="Date"
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2, mt:2 }}
          />
          <Typography variant="h6" gutterBottom>Available Filing Items</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Touch</TableCell>
                <TableCell>Purity</TableCell>
                <TableCell>Remarks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, idx) => {
                const isAssigned = assignedItemNames.includes(item.item);
                return (
                  <TableRow key={idx} sx={{
                    backgroundColor: isAssigned ? '#d0f0c0' : 'inherit',
                    pointerEvents: isAssigned ? 'none' : 'auto',
                    opacity: isAssigned ? 0.6 : 1
                  }}>
                    <TableCell>
                      <Checkbox
                        checked={!!selectedItems.find(i => i.item === item.item)}
                        onChange={() => handleToggle(item)}
                        disabled={isAssigned}
                      />
                    </TableCell>
                    <TableCell>{item.item}</TableCell>
                    <TableCell>{item.beforeWeight}</TableCell>
                    <TableCell>{item.touch}</TableCell>
                    <TableCell>{item.purity}</TableCell>
                    <TableCell>{item.remarks}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAssign}>Assign</Button>
        </DialogActions>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={!!viewEntry} onClose={() => setViewEntry(null)} fullWidth maxWidth={false}
        PaperProps={{ sx: { width: '60rem !important' } }}>
        <DialogTitle>Assigned Items</DialogTitle>
        <DialogContent>
          {viewEntry && (
            <>
              <Table size="small">
                <TableHead >
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Weight</TableCell>
                    <TableCell>Touch</TableCell>
                    <TableCell>Purity</TableCell>
                    <TableCell>Remarks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {viewEntry.items.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.beforeWeight}</TableCell>
                      <TableCell>{item.touch}</TableCell>
                      <TableCell>{item.purity}</TableCell>
                      <TableCell>{item.remarks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Box sx={{ mt: 1 }}>
  <Typography>
    <strong>Total Assigned Weight:</strong>{" "}
    {viewEntry.items.reduce((acc, item) => acc + Number(item.beforeWeight || 0), 0).toFixed(2)}g
  </Typography>
</Box>
              <TextField
                label="After Weight"
                type="number"
                fullWidth
                sx={{ mt: 2 }}
                value={viewEntry.afterWeight || ''}
                onChange={(e) =>
                  setViewEntry({ ...viewEntry, afterWeight: e.target.value })
                }
              />
<Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
</Box>
{/* Product Items Section */}
<Box sx={{ mt: 3 }}>
<Button
  variant="outlined"
  onClick={() => {
    const defaultTouch = viewEntry.items?.[0]?.touch || '';
    setViewEntry({
      ...viewEntry,
      productItems: [...(viewEntry.productItems || []), {
        itemName: '', weight: '', hasStone: 'No', touch: defaultTouch, purity: '', remarks: ''
      }]
    });
  }}
>
  Add Product Items
</Button>

  <Table size="small" sx={{ mt: 1}}>
    <TableHead>
      <TableRow>
        <TableCell>S.No</TableCell>
        <TableCell>Item Name</TableCell>
        <TableCell>Weight</TableCell>
        <TableCell>Has Stone</TableCell>
        <TableCell>Process</TableCell>
        <TableCell>Touch</TableCell>
        <TableCell>Purity</TableCell>
        <TableCell>Remarks</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {(viewEntry.productItems || []).map((item, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.itemName}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].itemName = e.target.value;
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              type="number"
              value={item.weight}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].weight = e.target.value;
                const weight = parseFloat(e.target.value) || 0;
                const touch = parseFloat(updated[index].touch) || 0;
                updated[index].purity = ((weight * touch) / 100).toFixed(2);
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              select
              SelectProps={{ native: true }}
              value={item.hasStone}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].hasStone = e.target.value;
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </TextField>
          </TableCell>
          <TableCell>{item.hasStone === 'Yes' ? 'Setting' : 'Buffing'}</TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.touch}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].touch = e.target.value;
                const weight = parseFloat(updated[index].weight) || 0;
                const touch = parseFloat(e.target.value) || 0;
                updated[index].purity = ((weight * touch) / 100).toFixed(2);
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.purity}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].purity = e.target.value;
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.remarks}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].remarks = e.target.value;
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <Button
              color="error"
              size="small"
              onClick={() => {
                const updated = [...viewEntry.productItems];
                updated.splice(index, 1);
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            >
              <Delete />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  <Box sx={{ mt: 1 }}>
    <Typography>
      <strong>Total Product Weight:</strong>{" "}
      {
        (viewEntry.productItems || []).reduce(
          (acc, item) => acc + Number(item.weight || 0),
          0
        ).toFixed(2)
      }g
    </Typography>
  </Box>
</Box>

{/* Scrap Items Section */}
<Box sx={{ mt: 4 }}>
  <Button
    variant="outlined"
    onClick={() =>
      setViewEntry({
        ...viewEntry,
        scrapItems: [...(viewEntry.scrapItems || []), {
          itemName: '', weight: '', touch: '', purity: '', remarks: ''
        }]
      })
    }
  >
    Add Scrap Items
  </Button>

  <Table size="small" sx={{ mt: 1 }}>
    <TableHead>
      <TableRow >
        <TableCell>S.No</TableCell>
        <TableCell>Item Name</TableCell>
        <TableCell>Weight</TableCell>
        <TableCell>Touch</TableCell>
        <TableCell>Purity</TableCell>
        <TableCell>Remarks</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {(viewEntry.scrapItems || []).map((item, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.itemName}
              onChange={(e) => {
                const updated = [...viewEntry.scrapItems];
                updated[index].itemName = e.target.value;
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              type="number"
              value={item.weight}
              onChange={(e) => {
                const updated = [...viewEntry.scrapItems];
                updated[index].weight = e.target.value;
                const weight = parseFloat(e.target.value) || 0;
                const touch = parseFloat(updated[index].touch) || 0;
                updated[index].purity = ((weight * touch) / 100).toFixed(2);
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.touch}
              onChange={(e) => {
                const updated = [...viewEntry.scrapItems];
                updated[index].touch = e.target.value;
                const weight = parseFloat(updated[index].weight) || 0;
                const touch = parseFloat(e.target.value) || 0;
                updated[index].purity = ((weight * touch) / 100).toFixed(2);
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.purity}
              onChange={(e) => {
                const updated = [...viewEntry.scrapItems];
                updated[index].purity = e.target.value;
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              size="small"
              value={item.remarks}
              onChange={(e) => {
                const updated = [...viewEntry.scrapItems];
                updated[index].remarks = e.target.value;
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            />
          </TableCell>
          <TableCell>
            <Button
              color="error"
              size="small"
              onClick={() => {
                const updated = [...viewEntry.scrapItems];
                updated.splice(index, 1);
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            >
              <Delete />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  <Box sx={{ mt: 1 }}>
    <Typography>
      <strong>Total Scrap Weight:</strong>{" "}
      {
        (viewEntry.scrapItems || []).reduce(
          (acc, item) => acc + Number(item.weight || 0),
          0
        ).toFixed(2)
      }g
    </Typography>
  </Box>
</Box>

{/* Receipt Weight Calculation */}
<Box sx={{ mt: 2 }}>
  <Typography variant="h6">
    Receipt Weight = Product Weight - Scrap Weight ={" "}
    {
      (
        (viewEntry.productItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0) -
        (viewEntry.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0)
      ).toFixed(2)
    }g
  </Typography>
</Box> </>
          )}
        </DialogContent>
        <DialogActions>
  <Button onClick={() => setViewEntry(null)}>Cancel</Button>
  <Button variant="contained" onClick={handleSaveViewEntry}>Save</Button>
</DialogActions>
      </Dialog>
    </>
  );
};

export default FilingReport;

