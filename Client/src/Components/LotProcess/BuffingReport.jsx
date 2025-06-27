// import React, { useState } from 'react';
// import {
//   Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
//   Checkbox, FormControlLabel, Table, TableBody, TableCell,
//   TableContainer, TableHead, TableRow, TextField, Typography, Paper
// } from "@mui/material";
// import { FaEye } from "react-icons/fa";
// import Navbar from '../Navbar/Navbar';
// import { Delete } from "@mui/icons-material";
// import styles from './BuffingReport.module.css'

// const getTodayDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };
  
// const BuffingReport = () => {
//   const [isAssignOpen, setIsAssignOpen] = useState(false);
//   const [viewEntry, setViewEntry] = useState(null);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [entries, setEntries] = useState([]);
//   const [date, setDate] = useState(getTodayDate());

//   const items = [
//     { item: "cst", beforeWeight: "50", touch: "91.7", purity: "22K", remarks:'aaaa' },
//     { item: "cst1", beforeWeight: "48", touch: "91.7", purity: "22K",remarks:'bbbb'  },
//     { item: "Ring", beforeWeight: "50", touch: "92", purity: "22K", remarks: 'aaaa', stoneWeight: "20", stoneCount: "3" },
    
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
//       remarks: it.remarks,
//       stoneCount:it.stoneCount,
//       stoneWeight:it.stoneWeight,
      
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
//         sx={{ marginLeft:'85rem', marginTop:'1.5rem',
//           backgroundColor:"#5f4917", color:"white", height:'2.2rem' }}
//         onClick={() => setIsAssignOpen(true)}
//       >
//         Add Buffing Items
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
//                   <TableCell align="center">{e.receiptWeight ? `${e.receiptWeight}g` : '—'}</TableCell>

//                   <TableCell align="center">
//                     <FaEye
//                       style={{ cursor:'pointer' }}
//                       onClick={() => setViewEntry(e)}
//                     />
//                   </TableCell>
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
//   <DialogTitle>Assign Buffing Items</DialogTitle>
//   <DialogContent>
//     <Box sx={{ mb: 2, marginTop:'1rem' }}>
//       <TextField
//         label="Date"
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         InputLabelProps={{ shrink: true }}
//         fullWidth
//       />
//     </Box>

//     <Typography variant="h6" gutterBottom>Available Buffing Items</Typography>
//     <Table size="small">
//       <TableHead>
//         <TableRow>
//           <TableCell>Select</TableCell>
//           <TableCell>Item</TableCell>
//           <TableCell>Weight</TableCell>
//           <TableCell>Touch</TableCell>
//           <TableCell>Purity</TableCell>
//           <TableCell>Remarks</TableCell>
//           <TableCell> Stone Count </TableCell>
//           <TableCell> Stone Weight </TableCell>
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
//             <TableCell>{item.stoneCount} </TableCell> 
//             <TableCell>{item.stoneWeight} </TableCell>
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
//               <TableCell><strong>Stone Weight</strong></TableCell>
//               <TableCell><strong>Stone Count</strong></TableCell>
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
//               <TableCell>{viewEntry.stoneWeight}</TableCell>
//               <TableCell>{viewEntry.stoneCount}</TableCell>
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
//     label="Remarks"
//     fullWidth
//     value={viewEntry.extraRemarks || ''}
//     onChange={(e) =>
//       setViewEntry({ ...viewEntry, extraRemarks: e.target.value })
//     }
//   />
// </Box>

// <Box sx={{ mt: 3, display: 'block' }}>

//   {/* Scrap Items — right side remains the same */}
  
//   <Box sx={{ mt: 2 }}>
//    <Button variant="outlined"  onClick={() =>
//         setViewEntry({
//           ...viewEntry,
         
//           scrapItems: [...(viewEntry.scrapItems || []), {
//             itemName: '', weight: '', hasStone: 'No', touch: '', purity: '', remarks: ''
//           }]
          
//         })
//       }>Add Scrap Items </Button>
 
// <Table size='small'> 
// <TableHead>
//   <TableRow>
//     <TableCell>S.No</TableCell>
//     <TableCell>Item Name</TableCell>
//     <TableCell>Weight</TableCell>
//     <TableCell>Touch</TableCell>
//     <TableCell>Purity</TableCell>
//     <TableCell>Remarks</TableCell>
//     <TableCell>Actions</TableCell>
    
//   </TableRow>
// </TableHead>

// <TableBody>
//   {(viewEntry.scrapItems || []).map((item, index) => (
//     <TableRow key={index}>
//       <TableCell>{index + 1}</TableCell>
//       <TableCell>
//         <TextField
//           size="small"
//           value={item.itemName}
//           onChange={(e) => {
//             const updated = [...viewEntry.scrapItems];
//             updated[index].itemName = e.target.value;
//             setViewEntry({ ...viewEntry, scrapItems: updated });
//           }}
//         />
//       </TableCell>
//       <TableCell>
//         <TextField
//           size="small"
//           type="number"
//           value={item.weight}
//           onChange={(e) => {
//             const updated = [...viewEntry.scrapItems];
//             updated[index].weight = e.target.value;
//             const weight = parseFloat(e.target.value) || 0;
//             const touch = parseFloat(updated[index].touch) || 0;
//             updated[index].purity = ((weight * touch) / 100).toFixed(2);
//             setViewEntry({ ...viewEntry, scrapItems: updated });
//           }}
//         />
//       </TableCell>
//       <TableCell>
//         <TextField
//           size="small"
//           value={item.touch}
//           onChange={(e) => {
//             const updated = [...viewEntry.scrapItems];
//             updated[index].touch = e.target.value;
//             const weight = parseFloat(updated[index].weight) || 0;
//             const touch = parseFloat(e.target.value) || 0;
//             updated[index].purity = ((weight * touch) / 100).toFixed(2);
//             setViewEntry({ ...viewEntry, scrapItems: updated });
//           }}
          
//         />
//       </TableCell>
//       <TableCell>
//         <TextField
//           size="small"
//           value={item.purity}
//           onChange={(e) => {
//             const updated = [...viewEntry.scrapItems];
//             updated[index].purity = e.target.value;
//             setViewEntry({ ...viewEntry, scrapItems: updated });
//           }}
//         />
//       </TableCell>
//       <TableCell>
//         <TextField
//           size="small"
//           value={item.remarks}
//           onChange={(e) => {
//             const updated = [...viewEntry.scrapItems];
//             updated[index].remarks = e.target.value;
//             setViewEntry({ ...viewEntry, scrapItems: updated });
//           }}
//         />
//       </TableCell>
//       <TableCell>
//   <Button
//     color="error"
//     size="small"
//     onClick={() => {
//       const updated = [...viewEntry.scrapItems];
//       updated.splice(index, 1); // remove the current row
//       setViewEntry({ ...viewEntry, scrapItems: updated });
//     }}
//   >
//     <Delete/>
//   </Button>
// </TableCell>

//     </TableRow>
//   ))}
// </TableBody>
// </Table>
//   </Box>
// </Box>
//       </>
//     )}
//   </DialogContent>
//   <DialogActions>
//   <Button variant="contained" color="primary" onClick={() => {
//     if (!viewEntry.afterWeight) {
//       alert('Please enter After Weight');
//       return;
//     }
//     const totalProductWeight = (viewEntry.productItems || []).reduce(
//       (acc, item) => acc + Number(item.weight || 0),
//       0
//     ).toFixed(2);
    
//     const updatedEntries = entries.map(entry =>
//       entry.item === viewEntry.item && entry.date === viewEntry.date
//         ? { ...viewEntry, receiptWeight: totalProductWeight }
//         : entry
//     );
//     setEntries(updatedEntries);
//     setViewEntry(null);
//   }}>
//     Save
//   </Button>
//   <Button onClick={() => setViewEntry(null)}>Close</Button>
// </DialogActions>
// </Dialog>

//     </>
//   );
// };

// export default BuffingReport;
 

import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Checkbox, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, TextField, Typography, Paper
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { Delete } from "@mui/icons-material";
import styles from './BuffingReport.module.css';
import { Tooltip } from '@mui/material'; 

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};



const BuffingReport = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState(getTodayDate());
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const assignedItemNames = entries.flatMap(entry => entry.items.map(it => it.item));
  const items = [
    { item: "cst", beforeWeight: "50", touch: "91.7", purity: "22K", remarks: 'aaaa' },
    { item: "cst1", beforeWeight: "48", touch: "91.7", purity: "22K", remarks: 'bbbb' },
    { item: "Ring", beforeWeight: "150", touch: "92", purity: "22K", remarks: 'aaaa', stoneWeight: "20", stoneCount: "3" },
  ];

  const handleToggle = (item) => {
    setSelectedItems(prev =>
      prev.find(i => i.item === item.item)
        ? prev.filter(i => i.item !== item.item)
        : [...prev, item]
    );
  };

  const handleAssign = () => {
    if (!date) return alert("Please Select the Date to Assign the Item");
    if (!selectedItems.length) return alert("Select at least one item.");

    const newGroup = {
      date,
      wastage: null, // Add this line
      items: selectedItems.map(it => ({
        item: it.item,
        beforeWeight: it.beforeWeight,
        touch: it.touch,
        purity: it.purity,
        remarks: it.remarks,
        stoneWeight: it.stoneWeight,
        stoneCount: it.stoneCount,
        scrapItems: []
      }))
    };

    setEntries(prev => [...prev, newGroup]);
    setSelectedItems([]);
    setDate(getTodayDate());
    setIsAssignOpen(false);
  };

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
              marginLeft: 115,
              backgroundColor: "#5f4917",
              color: "white",
            }}
          >
            Add Buffing Items
          </Button>
        </div> 

      <div className={styles.card}>
        <div className={styles.headingg}>Eternity Jewellery Details</div>
        <div className={styles.details}><b>Name:</b> <span>Dhanusha R</span></div>
        <div className={styles.details}><b>Phone Number:</b> <span>9342516726</span></div>
        <div className={styles.details}><b>Address:</b> <span>4/253, Coimbatore</span></div>
        <hr style={{ marginTop: '1rem' }} />
      </div>

      <div className={styles.tablecontainer}>
        <TableContainer component={Paper} sx={{ width: '60rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"><b>S.No</b></TableCell>
                <TableCell align="center"><b>Date</b></TableCell>
                <TableCell align="center"><b>Process</b></TableCell>
                <TableCell align="center"><b>Issue</b></TableCell>
                <TableCell align="center"><b>Receipt</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
                <TableCell align="center"><b>Wastage</b></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((group, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{group.date}</TableCell>
                  <TableCell align="center">
                    {group.items.map((it, i) => <div key={i}>{it.item}</div>)}
                  </TableCell>
                  <TableCell align="center">
                    {group.items.map((it, i) => <div key={i}>{it.beforeWeight}</div>)}
                  </TableCell>
                  <TableCell align="center">
                    {group.items.map((it, i) => <div key={i}>{it.receiptWeight || '—'}</div>)}
                  </TableCell>
                  <TableCell align="center">
                    <FaEye style={{ cursor: 'pointer' }} onClick={() => setViewEntry(group)} />
                  </TableCell>
                  <TableCell align="center">
  <span style={{ color: group.wastage === 'Yes' ? 'green' : 'red' }}>
    {group.wastage || '—'}
  </span>
</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Assign Dialog */}
      <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} fullWidth maxWidth={false}
        PaperProps={{ sx: { width: '50rem !important' } }}>
        <DialogTitle>Assign Buffing Items</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ mt: '1rem', mb: 2 }}
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <Typography variant="h6" gutterBottom>Available Buffing Items</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Touch</TableCell>
                <TableCell>Purity</TableCell>
                <TableCell>Remarks</TableCell>
                <TableCell>Stone Count</TableCell>
                <TableCell>Stone Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => {
  const isAssigned = assignedItemNames.includes(item.item);
  const isSelected = selectedItems.find((i) => i.item === item.item);

  return (
    <TableRow
      key={index}
      hover
      sx={{
        backgroundColor: isAssigned ? '#d0f0c0' : 'inherit', // green background
        pointerEvents: isAssigned ? 'none' : 'auto',         // disable interaction
        opacity: isAssigned ? 0.6 : 1,                       // fade look
      }}
    >
      <TableCell>
        <Checkbox
          checked={!!isSelected}
          disabled={isAssigned}
          onChange={() => handleToggle(item)}
          sx={{
            color: isAssigned ? 'green' : 'inherit',
            '&.Mui-checked': {
              color: isAssigned ? 'green' : 'primary.main',
            }
          }}
        />
      </TableCell>
      <TableCell>{item.item}</TableCell>
      <TableCell>{item.beforeWeight}</TableCell>
      <TableCell>{item.touch}</TableCell>
      <TableCell>{item.purity}</TableCell>
      <TableCell>{item.remarks}</TableCell>
      <TableCell>{item.stoneCount}</TableCell>
      <TableCell>{item.stoneWeight}</TableCell>
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

      {/* View Entry Dialog */}
      <Dialog open={!!viewEntry} onClose={() => setViewEntry(null)} fullWidth maxWidth={false}
        PaperProps={{ sx: { width: '60rem !important' } }}>
        <DialogTitle>Assigned Item Details</DialogTitle>

        <DialogContent>

          
  <TableContainer component={Paper}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>S.No</TableCell>
          <TableCell>Item</TableCell>
          <TableCell>Weight</TableCell>
          <TableCell>Touch</TableCell>
          <TableCell>Purity</TableCell>
          <TableCell>Remarks</TableCell>
          <TableCell>Stone Count</TableCell>
          <TableCell>Stone Weight</TableCell>
          <TableCell>After Weight</TableCell>
          <TableCell>Extra Remarks</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {viewEntry?.items?.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{item.item}</TableCell>
            <TableCell>{item.beforeWeight}g</TableCell>
            <TableCell>{item.touch}</TableCell>
            <TableCell>{item.purity}</TableCell>
            <TableCell>{item.remarks}</TableCell>
            <TableCell>{item.stoneCount || '-'}</TableCell>
            <TableCell>{item.stoneWeight || '-'}</TableCell>
            <TableCell>
              <TextField
                variant="standard"
                type="number"
                value={item.afterWeight || ''}
                onChange={(e) => {
                  const updated = { ...viewEntry };
                  updated.items[i].afterWeight = e.target.value;
                  updated.items[i].receiptWeight = e.target.value;
                  setViewEntry(updated);
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                variant="standard"
                value={item.extraRemarks || ''}
                onChange={(e) => {
                  const updated = { ...viewEntry };
                  updated.items[i].extraRemarks = e.target.value;
                  setViewEntry(updated);
                }}
              />
            </TableCell>
          </TableRow>
        
        ))}
      </TableBody>
   
    </Table>
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2, mt:3,ml:1 }}>
  <Typography variant="subtitle1"><b>Wastage:</b></Typography>
  <Button
    variant={viewEntry?.wastage === 'Yes' ? 'contained' : 'outlined'}
    color="success"
    onClick={() => setViewEntry({ ...viewEntry, wastage: 'Yes' })}
  >
    Yes
  </Button>
  <Button
    variant={viewEntry?.wastage === 'No' ? 'contained' : 'outlined'}
    color="error"
    onClick={() => setViewEntry({ ...viewEntry, wastage: 'No' })}
  >
    No
  </Button>
</Box>
  </TableContainer>
</DialogContent>
        <DialogActions>    

          
<Tooltip
  title={!viewEntry?.wastage ? "Please select Wastage (Yes or No) to enable Save" : ""}
  arrow
>
  <span>
    <Button
      variant="contained"
      disabled={!viewEntry?.wastage}
      onClick={() => {
        const updatedEntries = entries.map(e =>
          e.date === viewEntry.date ? viewEntry : e
        );
        setEntries(updatedEntries);
        setViewEntry(null);
      }}
    >
      Save
    </Button>
  </span>
</Tooltip>
  

          <Button onClick={() => setViewEntry(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BuffingReport;
