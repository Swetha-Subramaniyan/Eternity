// import React, { useState } from 'react';
// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
//   Checkbox, FormControlLabel, Table, TableBody, TableCell,
//   TableContainer, TableHead, TableRow, TextField, Typography, Paper } from "@mui/material";
// import { FaEye } from "react-icons/fa";
// import styles from './FilingReport.module.css';
// import Navbar from '../Navbar/Navbar';

// const SettingReport = () => {
//   const [isAssignOpen, setIsAssignOpen] = useState(false);
//   const [viewEntry, setViewEntry] = useState(null);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [entries, setEntries] = useState([]);
//   const [date, setDate] = useState("");

//   const items = [
//     { item: "Ring", beforeWeight: "50", touch: "92", purity: "22K", remarks:'aaaa' },
//     { item: "Chain", beforeWeight: "48", touch: "91", purity: "22K",remarks:'bbbb'  },
//     { item: "Stud", beforeWeight: "55", touch: "90", purity: "22K",remarks:'cccc'  }
//   ];

//   // Toggle item selection
//   const handleToggle = (item) => {
//     setSelectedItems(prev =>
//       prev.find(i => i.item === item.item)
//         ? prev.filter(i => i.item !== item.item)
//         : [...prev, item]
//     );
//   };

//   // Assign selected items
//   const handleAssign = () => {
//     if (!date) { alert("Please Select the Date to Assign the Item "); return; }
//     if (!selectedItems.length) { alert("Select at least one item."); return; }
    
//     const newEntries = selectedItems.map(it => ({
//       date,
//       item: it.item,
//       beforeWeight: it.beforeWeight,
//       touch: it.touch,
//       purity: it.purity,
//       remarks: it.remarks
//     }));
//     setEntries(prev => [...prev, ...newEntries]);
//     setSelectedItems([]);
//     setDate("");
//     setIsAssignOpen(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <Button
//         sx={{ marginLeft:'85rem', marginTop:'1.5rem', backgroundColor:"#5f4917", color:"white", height:'2.2rem' }}
//         onClick={() => setIsAssignOpen(true)}
//       >
//         Add Setting Items
//       </Button>
//       <div className={styles.card}>
//         <div className={styles.headingg}>Eternity Jewellery Details</div>
//         <div className={styles.details}><b>Name:</b> <span>Dhanusha R</span></div>
//         <div className={styles.details}><b>Phone Number:</b> <span>9342516726</span></div>
//         <div className={styles.details}><b>Address:</b> <span>4/253, Coimbatore</span></div>
//         <hr style={{ marginTop:'1rem' }} />
//       </div>
//       <div className={styles.tablecontainer}>
//         <TableContainer component={Paper} sx={{ width:'60rem', marginTop:0 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center"><b>S.No</b></TableCell>
//                 <TableCell align="center"><b>Date</b></TableCell>
//                 <TableCell align="center"><b>Process</b></TableCell>
//                 <TableCell align="center"><b>Issue</b></TableCell>
//                 <TableCell align="center"><b>Receipt</b></TableCell>
//                 <TableCell align="center"><b>Actions</b></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {entries.map((e, i) => (
//                 <TableRow key={i}>
//                   <TableCell align="center">{i + 1}</TableCell>
//                   <TableCell align="center">{e.date}</TableCell>
//                   <TableCell align="center">{e.item}</TableCell>
//                   <TableCell align="center">{e.beforeWeight}</TableCell>
//                   <TableCell align="center">{e.receiptWeight ? `${e.receiptWeight}` : '—'}</TableCell>
             
//                   <TableCell> 
//                   <FaEye
//   style={{ cursor: 'pointer' }}
//   onClick={() => {
//     const entry = entries.find(ent => ent.item === e.item && ent.date === e.date);
//     setViewEntry(entry);
//   }}
// />
// </TableCell>

//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//       <Dialog
//   open={isAssignOpen}
//   onClose={() => setIsAssignOpen(false)}
//   fullWidth
//   maxWidth={false} 
//   PaperProps={{
//     sx: {
//       width: '50rem !important',   
//     },
//   }}
// >
//   <DialogTitle>Assign Setting Items</DialogTitle>
//   <DialogContent>
//     <Box sx={{ mb: 2 }}>
//       <TextField
//       sx={{mt:'1rem'}}
//         label="Date"
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         InputLabelProps={{ shrink: true }}
//         fullWidth
//       />
//     </Box>

//     <Typography variant="h6" gutterBottom>Available Setting Items</Typography>
//     <Table size="small">
//       <TableHead>
//         <TableRow>
//           <TableCell>Select</TableCell>
//           <TableCell>Item</TableCell>
//           <TableCell>Weight</TableCell>
//           <TableCell>Touch</TableCell>
//           <TableCell>Purity</TableCell>
//           <TableCell> Remarks</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {items.map((item, index) => (
//           <TableRow key={index} hover>
//             <TableCell>
//               <Checkbox
//                 checked={!!selectedItems.find((i) => i.item === item.item)}
//                 onChange={() => handleToggle(item)}
//               />
//             </TableCell>
//             <TableCell>{item.item}</TableCell>
//             <TableCell>{item.beforeWeight}</TableCell>
//             <TableCell>{item.touch}</TableCell>
//             <TableCell>{item.purity}</TableCell>
//             <TableCell> {item.remarks}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>
//     <Button variant="contained" onClick={handleAssign}>Assign</Button>
//   </DialogActions>
// </Dialog>
//       {/* View Entry Modal */}
// <Dialog open={!!viewEntry} onClose={() => setViewEntry(null)} fullWidth maxWidth={false}
// PaperProps={{
//   sx:{
//     width:'60rem !important'
//   }
// }}
// >
//   <DialogTitle>Assigned Item Details</DialogTitle>
//   <DialogContent>
//     {viewEntry && (
//       <>
//         {/* Assigned Item Details Table */}
//         <Table size="small" sx={{ mt: 1 }}>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Date</strong></TableCell>
//               <TableCell><strong>Item</strong></TableCell>
//               <TableCell><strong>Weight</strong></TableCell>
//               <TableCell><strong>Touch</strong></TableCell>
//               <TableCell><strong>Purity</strong></TableCell>
//               <TableCell><strong>Remarks</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>{viewEntry.date}</TableCell>
//               <TableCell>{viewEntry.item}</TableCell>
//               <TableCell>{viewEntry.beforeWeight}g</TableCell>
//               <TableCell>{viewEntry.touch}</TableCell>
//               <TableCell>{viewEntry.purity}</TableCell>
//               <TableCell>{viewEntry.remarks}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>

//         {/* After Weight and Remarks Input */}
// <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
//   <TextField
//     label="After Weight"
//     type="number"
//     fullWidth
//     required
//     value={viewEntry.afterWeight || ''}
//     onChange={(e) =>
//       setViewEntry({ ...viewEntry, afterWeight: e.target.value })
//     }
//   />
//   <TextField
//   label="Stone Count"
//   type="number"
//   fullWidth
//   required
//   value={viewEntry.stoneCount || ''}
//   onChange={(e) =>
//     setViewEntry({ ...viewEntry, stoneCount: e.target.value })
//   }
// />
// <TextField
//   label="Stone Weight"
//   type="number"
//   fullWidth
//   required
//   value={viewEntry.stoneWeight || ''}
//   onChange={(e) =>
//     setViewEntry({ ...viewEntry, stoneWeight: e.target.value })
//   }
// />

//   <TextField
//     label="Remarks"
//     fullWidth
//     value={viewEntry.extraRemarks || ''}
//     onChange={(e) =>
//       setViewEntry({ ...viewEntry, extraRemarks: e.target.value })
//     }
//   />
// </Box>
//       </>
//     )}
//   </DialogContent>
//   <DialogActions>

//   <Button
//   variant="contained"
//   color="primary"

//   onClick={() => {
//     if (!viewEntry.afterWeight) {
//       alert("Please enter After Weight");
//       return;
//     }
  
//     const updatedEntries = entries.map((entry) =>
//       entry.item === viewEntry.item && entry.date === viewEntry.date
//         ? {
//             ...entry,
//             afterWeight: viewEntry.afterWeight,
//             stoneCount: viewEntry.stoneCount,
//             stoneWeight: viewEntry.stoneWeight,
//             extraRemarks: viewEntry.extraRemarks,
//             receiptWeight: viewEntry.afterWeight, 
//           }
//         : entry
//     );
  
//     setEntries(updatedEntries);
//     setViewEntry(null); // Close the popup
//   }}
  
// >
//   Save
// </Button>

//   <Button onClick={() => setViewEntry(null)}>Close</Button>
// </DialogActions>
// </Dialog>

//     </>
//   );
// };

// export default SettingReport;


// Updated SettingReport.jsx with Scrap Items and Default Date

import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Checkbox, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, TextField, Typography, Paper
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { Delete } from '@mui/icons-material';
import styles from './SettingReport.module.css';
import Navbar from '../Navbar/Navbar';

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const SettingReport = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState(getTodayDate());

  const items = [
    { item: "Ring", beforeWeight: "50", touch: "92", purity: "22K", remarks: 'aaaa' },
    { item: "Chain", beforeWeight: "48", touch: "91", purity: "22K", remarks: 'bbbb' },
    { item: "Stud", beforeWeight: "55", touch: "90", purity: "22K", remarks: 'cccc' }
  ];

  const handleToggle = (item) => {
    if (isAlreadyAssigned(item)) return;
    setSelectedItems(prev =>
      prev.find(i => i.item === item.item)
        ? prev.filter(i => i.item !== item.item)
        : [...prev, item]
    );
  };

  const handleAssign = () => {
    if (!date) {
      alert("Please Select the Date to Assign the Item");
      return;
    }
    if (!selectedItems.length) {
      alert("Select at least one item.");
      return;
    }

    const newEntries = selectedItems.map(it => ({
      date,
      item: it.item,
      beforeWeight: it.beforeWeight,
      touch: it.touch,
      purity: it.purity,
      remarks: it.remarks,
      scrapItems: []
    }));
    setEntries(prev => [...prev, ...newEntries]);
    setSelectedItems([]);
    setDate(getTodayDate());
    setIsAssignOpen(false);
  };

  const isAlreadyAssigned = (item) => {
    return entries.some(entry => entry.item === item.item);
  };

  return (
    <>
      <Navbar />
      <Button
        sx={{ marginLeft: '85rem', marginTop: '1.5rem', backgroundColor: "#5f4917", color: "white", height: '2.2rem' }}
        onClick={() => setIsAssignOpen(true)}
      >
        Add Setting Items
      </Button>

      {/* Customer Info Card */}
      <div className={styles.card}>
        <div className={styles.headingg}>Eternity Jewellery Details</div>
        <div className={styles.details}><b>Name:</b> <span>Dhanusha R</span></div>
        <div className={styles.details}><b>Phone Number:</b> <span>9342516726</span></div>
        <div className={styles.details}><b>Address:</b> <span>4/253, Coimbatore</span></div>
        <hr style={{ marginTop: '1rem' }} />
      </div>

      {/* Entries Table */}
      <div className={styles.tablecontainer}>
        <TableContainer component={Paper} sx={{ width: '60rem', marginTop: 0 }}>
          <Table>
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
              {entries.map((e, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{e.date}</TableCell>
                  <TableCell align="center">{e.item}</TableCell>
                  <TableCell align="center">{e.beforeWeight}</TableCell>
                  <TableCell align="center">{e.receiptWeight || '—'}</TableCell>
                  <TableCell align="center">
                    <FaEye
                      style={{ cursor: 'pointer' }}
                      onClick={() => setViewEntry(e)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Assign Dialog */}
      <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} fullWidth maxWidth={false} PaperProps={{ sx: { width: '50rem !important' } }}>
        <DialogTitle>Assign Setting Items</DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ mt: '1rem' }}
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>
          <Typography variant="h6">Available Setting Items</Typography>
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
              {items.map((item, index) => (
                <TableRow key={index} hover>
                  <TableCell>
                    <Checkbox
                      checked={!!selectedItems.find(i => i.item === item.item)}
                      onChange={() => handleToggle(item)}
                      disabled={isAlreadyAssigned(item)}
                    />
                  </TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.beforeWeight}</TableCell>
                  <TableCell>{item.touch}</TableCell>
                  <TableCell>{item.purity}</TableCell>
                  <TableCell>{item.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAssign}>Assign</Button>
        </DialogActions>
      </Dialog>

      {/* View Entry Dialog */}
      <Dialog open={!!viewEntry} onClose={() => setViewEntry(null)} fullWidth maxWidth={false} PaperProps={{ sx: { width: '60rem !important' } }}>
        <DialogTitle>Assigned Item Details</DialogTitle>
        <DialogContent>
          {viewEntry && (
            <>
              <Table size="small" sx={{ mt: 1 }}>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>Item</strong></TableCell>
                    <TableCell><strong>Weight</strong></TableCell>
                    <TableCell><strong>Touch</strong></TableCell>
                    <TableCell><strong>Purity</strong></TableCell>
                    <TableCell><strong>Remarks</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{viewEntry.date}</TableCell>
                    <TableCell>{viewEntry.item}</TableCell>
                    <TableCell>{viewEntry.beforeWeight}g</TableCell>
                    <TableCell>{viewEntry.touch}</TableCell>
                    <TableCell>{viewEntry.purity}</TableCell>
                    <TableCell>{viewEntry.remarks}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <TextField label="After Weight" type="number" fullWidth required value={viewEntry.afterWeight || ''} onChange={(e) => setViewEntry({ ...viewEntry, afterWeight: e.target.value })} />
                <TextField label="Stone Count" type="number" fullWidth value={viewEntry.stoneCount || ''} onChange={(e) => setViewEntry({ ...viewEntry, stoneCount: e.target.value })} />
                <TextField label="Stone Weight" type="number" fullWidth value={viewEntry.stoneWeight || ''} onChange={(e) => setViewEntry({ ...viewEntry, stoneWeight: e.target.value })} />
                <TextField label="Remarks" fullWidth value={viewEntry.extraRemarks || ''} onChange={(e) => setViewEntry({ ...viewEntry, extraRemarks: e.target.value })} />
              </Box>

              {/* Scrap Items Section */}
              <Box sx={{ mt: 2 }}>
                <Button variant="outlined" onClick={() => setViewEntry({ ...viewEntry, scrapItems: [...(viewEntry.scrapItems || []), { itemName: '', weight: '', hasStone: 'No', touch: '', purity: '', remarks: '' }] })}>Add Scrap Items</Button>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
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
                        <TableCell><TextField size="small" value={item.itemName} onChange={(e) => { const updated = [...viewEntry.scrapItems]; updated[index].itemName = e.target.value; setViewEntry({ ...viewEntry, scrapItems: updated }); }} /></TableCell>
                        <TableCell><TextField size="small" type="number" value={item.weight} onChange={(e) => { const updated = [...viewEntry.scrapItems]; updated[index].weight = e.target.value; const weight = parseFloat(e.target.value) || 0; const touch = parseFloat(updated[index].touch) || 0; updated[index].purity = ((weight * touch) / 100).toFixed(2); setViewEntry({ ...viewEntry, scrapItems: updated }); }} /></TableCell>
                        <TableCell><TextField size="small" value={item.touch} onChange={(e) => { const updated = [...viewEntry.scrapItems]; updated[index].touch = e.target.value; const weight = parseFloat(updated[index].weight) || 0; const touch = parseFloat(e.target.value) || 0; updated[index].purity = ((weight * touch) / 100).toFixed(2); setViewEntry({ ...viewEntry, scrapItems: updated }); }} /></TableCell>
                        <TableCell><TextField size="small" value={item.purity} onChange={(e) => { const updated = [...viewEntry.scrapItems]; updated[index].purity = e.target.value; setViewEntry({ ...viewEntry, scrapItems: updated }); }} /></TableCell>
                        <TableCell><TextField size="small" value={item.remarks} onChange={(e) => { const updated = [...viewEntry.scrapItems]; updated[index].remarks = e.target.value; setViewEntry({ ...viewEntry, scrapItems: updated }); }} /></TableCell>
                        <TableCell><Button color="error" size="small" onClick={() => { const updated = [...viewEntry.scrapItems]; updated.splice(index, 1); setViewEntry({ ...viewEntry, scrapItems: updated }); }}><Delete /></Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={() => {
            if (!viewEntry.afterWeight) {
              alert("Please enter After Weight");
              return;
            }
            const updatedEntries = entries.map((entry) =>
              entry.item === viewEntry.item && entry.date === viewEntry.date
                ? { ...entry, ...viewEntry, receiptWeight: viewEntry.afterWeight }
                : entry
            );
            setEntries(updatedEntries);
            setViewEntry(null);
          }}>
            Save
          </Button>
          <Button onClick={() => setViewEntry(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingReport;





