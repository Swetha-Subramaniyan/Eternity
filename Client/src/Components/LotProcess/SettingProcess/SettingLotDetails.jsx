// import React, { useState } from 'react';
// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Paper, TableFooter } from "@mui/material";
// import { FaEye } from "react-icons/fa";
// import { Delete } from '@mui/icons-material';
// import styles from './SettingLotDetails.module.css';
// import Navbar from '../../Navbar/Navbar';

// const getTodayDate = () => {
//   const today = new Date();
//   return today.toISOString().split('T')[0];
// };

// const SettingLotDetails = () => {
//   const [isAssignOpen, setIsAssignOpen] = useState(false);
//   const [viewEntry, setViewEntry] = useState(null);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [entries, setEntries] = useState([]);
//   const [date, setDate] = useState(getTodayDate());
//   const [fromDate, setFromDate] = useState('');
// const [toDate, setToDate] = useState('');
// const [statusFilter, setStatusFilter] = useState("All");
// const [wastagePercent, setWastagePercent] = useState('');
// const [givenGold, setGivenGold] = useState('');


// const filteredEntries = entries.filter(entry => {
//   const entryDate = new Date(entry.date);
//   const from = fromDate ? new Date(fromDate) : null;
//   const to = toDate ? new Date(toDate) : null;
//   const isCompleted = !!entry.receiptWeight;
//   const statusMatch =
//     statusFilter === "All" ||
//     (statusFilter === "Completed" && isCompleted) ||
//     (statusFilter === "Pending" && !isCompleted);
//   return (
//     (!from || entryDate >= from) &&
//     (!to || entryDate <= to) &&
//     statusMatch
//   );
// });

//   const items = [
//     { item: "Ring", beforeWeight: "50", touch: "92", purity: "22K", remarks: 'aaaa' },
//     { item: "Chain", beforeWeight: "48", touch: "91", purity: "22K", remarks: 'bbbb' },
//     { item: "Stud", beforeWeight: "55", touch: "90", purity: "22K", remarks: 'cccc' }
//   ];

//   const handleToggle = (item) => {
//     if (isAlreadyAssigned(item)) return;
//     setSelectedItems(prev =>
//       prev.find(i => i.item === item.item)
//         ? prev.filter(i => i.item !== item.item)
//         : [...prev, item]
//     );
//   };

//   const handleAssign = () => {
//     if (!date) {
//       alert("Please Select the Date to Assign the Item");
//       return;
//     }
//     if (!selectedItems.length) {
//       alert("Select at least one item.");
//       return;
//     }
  
//     const newEntry = {
//       id: Date.now(),
//       date,
//       items: selectedItems.map(it => ({
//         ...it
//       })),
//       afterWeight: '',
//       stoneCount: '',
//       stoneWeight: '',
//       extraRemarks: '',
//       scrapItems: [],
//       totalIssueWeight: totalIssueWeight.toFixed(2),
//     };
  
//     setEntries(prev => [...prev, newEntry]);
//     setSelectedItems([]);
//     setDate(getTodayDate());
//     setIsAssignOpen(false);
//   };
  

//   const isAlreadyAssigned = (item) => {
//     return entries.some(entry => entry.items.some(i => i.item === item.item));
//   };

//   const getTotalScrapWeight = (scrapItems) => {
//     return scrapItems?.reduce((sum, item) => sum + parseFloat(item.weight || 0), 0).toFixed(2);
//   };


//   const getOverallBalance = () => {
//     return filteredEntries.reduce((total, group) => {
//       if (!group.afterWeight) return total;
  
//       const issueSum = group.items.reduce(
//         (sum, item) => sum + parseFloat(item.beforeWeight || 0),
//         0
//       );
  
//       const afterWeight = parseFloat(group.afterWeight || 0);
//       const stoneWeight = parseFloat(group.stoneWeight || 0);
//       const scrapWeight = parseFloat(getTotalScrapWeight(group.scrapItems || []));
  
//       const balance =
//         issueSum - (afterWeight - stoneWeight) - scrapWeight;
  
//       return total + (isNaN(balance) ? 0 : balance);
//     }, 0).toFixed(2);
//   };
  
  
//   const getTotalStoneCount = () => {
//     return filteredEntries.reduce((total, group) => {
//       const count = parseFloat(group.stoneCount || 0);
//       return total + (isNaN(count) ? 0 : count);
//     }, 0).toFixed(2);
//   };
  
  
//   const totalStoneCount = getTotalStoneCount(); 


//   const totalIssueWeight = selectedItems.reduce(
//     (sum, item) => sum + parseFloat(item.beforeWeight || 0),
//     0
//   );

//   const totalWastage = (Number(totalStoneCount) * Number(wastagePercent || 0)) / 100;
//   const closingBalance = parseFloat(getOverallBalance()) - parseFloat(totalWastage);
//   const finalClosingBalance = closingBalance + Number(givenGold || 0);

//   return (
//     <>
//       <Navbar />
//       <div className="date-fields">
//         <TextField
//             id="from-date"
//             label="From Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             sx={{ marginLeft: "3.5rem" , mt:'1.5rem'}}
//           />
//           <TextField
//             id="to-date"
//             label="To Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             sx={{ marginLeft: "1.5rem", mt:'1.5rem' }}
//           />
// <TextField
//   select
//   label="Status"
//   SelectProps={{ native: true }}
//   value={statusFilter}
//   onChange={(e) => setStatusFilter(e.target.value)}
//   sx={{ marginLeft: "1.5rem", minWidth: 120 , mt:'1.5rem' }}
// >
//   <option value="All">All</option>
//   <option value="Completed">Completed</option>
//   <option value="Pending">Pending</option>
// </TextField>

//           <Button
//              onClick={() => setIsAssignOpen(true)}
//             sx={{
//               m: 3,
//               marginLeft: 85,
//               backgroundColor: "#5f4917",
//               color: "white",
//               paddingLeft:2,
//               paddingRight:2
//             }}
//           >
//            Add Setting Items
//           </Button>
//         </div> 

//       {/* Entries Table */}
//       <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
//       <Box> 
//       <div className={styles.tablecontainer}>
// <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
//   <thead style={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>
//     <tr>
//       <th>S.No</th>
//       <th>Date</th>
//       <th>Process</th>
//       <th>Issue</th>
//       <th>Receipt</th>
//       <th>Stone Count</th>
//       <th>Stone Weight</th>
//       <th>Scrap Weight</th>
//       <th>Balance</th>
//       <th>Wastage</th>
//       <th>Actions</th>
//     </tr>
//   </thead>
// <tbody>
//   {filteredEntries.length === 0 ? (
//     <tr className={styles.noProductRow}>
//       <td colSpan="11">No Product Found</td>
//     </tr>
//   ) : (
//     filteredEntries.map((group, i) => (
//       <React.Fragment key={group.id}>
//         <tr className={styles.tbodyRow}>
//           <td rowSpan={group.items.length}>{i + 1}</td>
//           <td rowSpan={group.items.length}>{group.date}</td>
//           <td>{group.items[0].item}</td>
//           <td>{group.items[0].beforeWeight}</td>
//           <td rowSpan={group.items.length}>{group.afterWeight || '—'}</td>
//           <td rowSpan={group.items.length}>{group.stoneCount || '—'}</td>
//           <td rowSpan={group.items.length}>{group.stoneWeight || '—'}</td>
//           <td rowSpan={group.items.length}>{getTotalScrapWeight(group.scrapItems)} g</td>
//           <td rowSpan={group.items.length}>
//             {group.afterWeight
//               ? (
//                 group.items.reduce((sum, item) => sum + parseFloat(item.beforeWeight || 0), 0) -
//                 (parseFloat(group.afterWeight || 0) - parseFloat(group.stoneWeight || 0)) -
//                 parseFloat(getTotalScrapWeight(group.scrapItems || []))
//               ).toFixed(2)
//               : '—'} g
//           </td>
//           <td rowSpan={group.items.length}>{group.wastage || '—'}</td>
//           <td
//             rowSpan={group.items.length}
//             className={styles.cursorPointer}
//             onClick={() => setViewEntry(group)}
//           >
//             <FaEye />
//           </td>
//         </tr>
//         {group.items.slice(1).map((item, idx) => (
//           <tr key={`${group.id}-${idx}`} className={styles.nestedRow}>
//             <td>{item.item}</td>
//             <td>{item.beforeWeight}</td>
//           </tr>
//         ))}
//       </React.Fragment>
//     ))
//   )}
// </tbody>
// </table>

//       </div>
//       </Box>

//       </Box>
//       {/* Assign Dialog */}
//       <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} fullWidth maxWidth={false} PaperProps={{ sx: { width: '50rem !important' } }}>
//         <DialogTitle>Assign Setting Items</DialogTitle>
//         <DialogContent>
//           <Box sx={{ mb: 2 }}>
//             <TextField
//               sx={{ mt: '1rem' }}
//               label="Date"
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//             />
//           </Box>
//           <Typography variant="h6">Available Setting Items</Typography>

// <table className={styles.table}>
//   <thead>
//     <tr className={styles.theadRow}>
//       <th className={styles.th}>Select</th>
//       <th className={styles.th}>Item</th>
//       <th className={styles.th}>Issue</th>
//       <th className={styles.th}>Touch</th>
//       <th className={styles.th}>Purity</th>
//       <th className={styles.th}>Remarks</th>
//     </tr>
//   </thead>
//   <tbody>
//     {items.map((item, index) => {
//       const alreadyAssigned = isAlreadyAssigned(item);
//       return (
//         <tr
//           key={index}
//           className={`${styles.tbodyRow} ${alreadyAssigned ? styles.assigned : ''}`}
//           onClick={() => !alreadyAssigned && handleToggle(item)}
//         >
//           <td className={styles.td}>
//             <input
//               type="checkbox"
//               checked={!!selectedItems.find(i => i.item === item.item)}
//               disabled={alreadyAssigned}
//               onChange={() => handleToggle(item)}
//               onClick={e => e.stopPropagation()}
//             />
//           </td>
//           <td className={styles.td}>{item.item}</td>
//           <td className={styles.td}>{item.beforeWeight}</td>
//           <td className={styles.td}>{item.touch}</td>
//           <td className={styles.td}>{item.purity}</td>
//           <td className={styles.td}>{item.remarks}</td>
//         </tr>
//       );
//     })}
//   </tbody>
// </table>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleAssign}>Assign</Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Entry Dialog */}
//       <Dialog open={!!viewEntry} onClose={() => setViewEntry(null)} fullWidth maxWidth={false} PaperProps={{ sx: { width: '60rem !important' } }}>
//         <DialogTitle>Assigned Item Details</DialogTitle>
//         <DialogContent>
//           {viewEntry && (
//             <>

// <table className={styles.table}>
//   <thead>
//     <tr className={styles.theadRow}>
//       <th className={styles.th}>Date</th>
//       <th className={styles.th}>Item</th>
//       <th className={styles.th}>Issue</th>
//       <th className={styles.th}>Touch</th>
//       <th className={styles.th}>Purity</th>
//       <th className={styles.th}>Remarks</th>
//     </tr>
//   </thead>

//   <tbody>
//     {viewEntry.items.map((item, idx) => (
//       <tr key={idx}>
//         <td className={styles.td}>{viewEntry.date}</td>
//         <td className={styles.td}>{item.item}</td>
//         <td className={styles.td}>{item.beforeWeight}g</td>
//         <td className={styles.td}>{item.touch}</td>
//         <td className={styles.td}>{item.purity}</td>
//         <td className={styles.td}>{item.remarks}</td>
//       </tr>
//     ))}
//   </tbody>

//   <tfoot>
//     <tr className={styles.tfootRow}>
//       <td colSpan={2} className={styles.tfootCell}>Total</td>
//       <td className={styles.tfootCell}>
//         {viewEntry.items
//           .reduce((sum, item) => sum + parseFloat(item.beforeWeight || 0), 0)
//           .toFixed(2)} g
//       </td>
//       <td className={styles.tfootCell}></td>
//       <td className={styles.tfootCell}>
//         {viewEntry.items
//           .reduce((sum, item) => sum + parseFloat(item.purity || 0), 0)
//           .toFixed(2)}
//       </td>
//       <td className={styles.tfootCell}></td>
//     </tr>
//   </tfoot>
// </table>

//               <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
//                 <TextField label="Receipt Weight" type="number" fullWidth required value={viewEntry.afterWeight || ''} onChange={(e) => setViewEntry({ ...viewEntry, afterWeight: e.target.value })} />
//                 <TextField label="Stone Count" type="number" fullWidth value={viewEntry.stoneCount || ''} onChange={(e) => setViewEntry({ ...viewEntry, stoneCount: e.target.value })} />
//                 <TextField label="Stone Weight" type="number" fullWidth value={viewEntry.stoneWeight || ''} onChange={(e) => setViewEntry({ ...viewEntry, stoneWeight: e.target.value })} />
//                 <TextField label="Remarks" fullWidth value={viewEntry.extraRemarks || ''} onChange={(e) => setViewEntry({ ...viewEntry, extraRemarks: e.target.value })} />
//               </Box>

// {viewEntry && (() => {
//   const afterWeight = parseFloat(viewEntry.afterWeight || 0);
//   const stoneWeight = parseFloat(viewEntry.stoneWeight || 0);
//   const totalIssuedWeight = viewEntry.items.reduce((sum, item) => sum + parseFloat(item.beforeWeight || 0), 0);
//   const totalScrapWeight = parseFloat(getTotalScrapWeight(viewEntry.scrapItems));

//   const total = afterWeight - stoneWeight;
//   const totalBalance =  totalIssuedWeight - total;
//   const finalBalance = totalBalance - totalScrapWeight;

//   return (
//     <Box sx={{ mt: 3, display:'flex', gap:'4.5rem' }}>
//       <Typography><strong>Total:</strong> {total.toFixed(2)}g </Typography>
//       <Typography><strong>Total Balance:</strong> {totalBalance.toFixed(2)}g </Typography>
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft:'17rem' }}>
//     <Typography variant="subtitle1"><b>Wastage:</b></Typography>
//     <Button
//       variant={viewEntry?.wastage === 'Yes' ? 'contained' : 'outlined'}
//       color="success"
//       onClick={() => setViewEntry({ ...viewEntry, wastage: 'Yes' })}
//     >
//       Yes
//     </Button>
//     <Button
//       variant={viewEntry?.wastage === 'No' ? 'contained' : 'outlined'}
//       color="error"
//       onClick={() => setViewEntry({ ...viewEntry, wastage: 'No' })}
//     >
//       No
//     </Button>
//   </Box>
//     </Box>
//   );
// })()}

// <Box sx={{ mt: 2 }}>
//   <Button 
//    sx={{
//     paddingLeft:2,
//     paddingRight:2
//   }}
//     variant="outlined"
//     onClick={() =>
//       setViewEntry({
//         ...viewEntry,
//         scrapItems: [
//           ...(viewEntry.scrapItems || []),
//           { itemName: '', weight: '', hasStone: 'No', touch: '', purity: '', remarks: '' },
//         ],
//       })
//     }
//   >
//     Add Scrap Items
//   </Button>

//   <Box
//     sx={{
//       maxHeight: '12rem', 
//       overflowY: (viewEntry.scrapItems?.length || 0) > 3 ? 'auto' : 'visible',
//       mt: 1,
//     }}
//   >
//     <Table size="small" stickyHeader >
//       <TableHead>
//         <TableRow >
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }} >S.No</TableCell>
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }} >Item Name</TableCell>
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }} >Weight</TableCell>
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }} >Touch</TableCell>
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }} >Purity</TableCell>
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }} >Remarks</TableCell>
//           <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }}> Actions </TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {(viewEntry.scrapItems || []).map((item, index) => (
//           <TableRow key={index}>
//             <TableCell>{index + 1}</TableCell>
//             <TableCell>
//               <TextField
//                 size="small"
//                 value={item.itemName}
//                 onChange={(e) => {
//                   const updated = [...viewEntry.scrapItems];
//                   updated[index].itemName = e.target.value;
//                   setViewEntry({ ...viewEntry, scrapItems: updated });
//                 }}
//               />
//             </TableCell>
//             <TableCell>
//               <TextField
//                 size="small"
//                 type="number"
//                 value={item.weight}
//                 onChange={(e) => {
//                   const updated = [...viewEntry.scrapItems];
//                   updated[index].weight = e.target.value;
//                   const weight = parseFloat(e.target.value) || 0;
//                   const touch = parseFloat(updated[index].touch) || 0;
//                   updated[index].purity = ((weight * touch) / 100).toFixed(2);
//                   setViewEntry({ ...viewEntry, scrapItems: updated });
//                 }}
//               />
//             </TableCell>
//             <TableCell>
//               <TextField
//                 size="small"
//                 value={item.touch}
//                 onChange={(e) => {
//                   const updated = [...viewEntry.scrapItems];
//                   updated[index].touch = e.target.value;
//                   const weight = parseFloat(updated[index].weight) || 0;
//                   const touch = parseFloat(e.target.value) || 0;
//                   updated[index].purity = ((weight * touch) / 100).toFixed(2);
//                   setViewEntry({ ...viewEntry, scrapItems: updated });
//                 }}
//               />
//             </TableCell>
//             <TableCell>
//               <TextField
//                 size="small"
//                 value={item.purity}
//                 onChange={(e) => {
//                   const updated = [...viewEntry.scrapItems];
//                   updated[index].purity = e.target.value;
//                   setViewEntry({ ...viewEntry, scrapItems: updated });
//                 }}
//               />
//             </TableCell>
//             <TableCell>
//               <TextField
//                 size="small"
//                 value={item.remarks}
//                 onChange={(e) => {
//                   const updated = [...viewEntry.scrapItems];
//                   updated[index].remarks = e.target.value;
//                   setViewEntry({ ...viewEntry, scrapItems: updated });
//                 }}
//               />
//             </TableCell>
//             <TableCell>
//               <Button
//                 color="error"
//                 size="small"
//                 onClick={() => {
//                   const updated = [...viewEntry.scrapItems];
//                   updated.splice(index, 1);
//                   setViewEntry({ ...viewEntry, scrapItems: updated });
//                 }}
//               >
//                 <Delete />
//               </Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </Box>
// </Box>

// <Box sx={{ mt: 2 }}>

// <Typography variant="subtitle1">
//       <strong>Total Scrap Weight:</strong> {getTotalScrapWeight(viewEntry.scrapItems)} g
//     </Typography>
//   <Typography variant="subtitle1">
//     <strong>Balance:</strong> {
//       viewEntry.afterWeight && viewEntry.stoneWeight
//         ? (
//             viewEntry.items.reduce((sum, item) => sum + parseFloat(item.beforeWeight || 0), 0)
//             - (parseFloat(viewEntry.afterWeight || 0) - parseFloat(viewEntry.stoneWeight || 0))
//             - parseFloat(getTotalScrapWeight(viewEntry.scrapItems))
//           ).toFixed(2)
//         : '—'
//     } g
//   </Typography>
// </Box>
//            </>
//           )}
//         </DialogContent>
//         <DialogActions>
//         <Button
//   variant="contained"
//   color="primary"
//   disabled={viewEntry?.wastage !== 'Yes' && viewEntry?.wastage !== 'No'}
//   onClick={() => {
//     if (!viewEntry.afterWeight) {
//       alert("Please enter After Weight");
//       return;
//     }

//             const updated = entries.map(entry =>
//               entry.id === viewEntry.id ? {
//                 ...entry,
//                 ...viewEntry,
//                 receiptWeight: viewEntry.afterWeight,
//               } : entry
//             );
            
//             setEntries(updated);
//             setViewEntry(null);
//           }}
          
//           >
//             Save
//           </Button>
//           <Button onClick={() => setViewEntry(null)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default SettingLotDetails;







// import React, { useState } from 'react';
// import Navbar from '../../Navbar/Navbar';
// import { useParams } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';

// const SettingLotDetails = () => {
//   const getTodayDateString = () => {
//     const today = new Date();
//     const yyyy = today.getFullYear();
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const dd = String(today.getDate()).padStart(2, '0');
//     return `${yyyy}-${mm}-${dd}`;
//   };

//   const { id: settingPersonId, name, lotNumber } = useParams();
//   const [fromDate, setFromDate] = useState(getTodayDateString());

//   // Modal open state
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <Navbar />

//       <Button variant="contained" onClick={handleOpen} sx={{mt:2}}>
//         Add Setting
//       </Button>

//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle>Add Setting Details</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Date"
//             type="date"
//             size="small"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             sx={{ ml: 0, mt: 3, mb: 2, width: '200px' }}
//           />

//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th>Select</th>
//                 <th>Item</th>
//                 <th>Weight</th>
//                 <th>Touch</th>
//                 <th>Purity</th>
//                 <th>Remarks</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 {/* You can add dynamic rows here */}
//                 <td colSpan={7} style={{ textAlign: 'center' }}>
//                   No items yet
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button variant="contained" onClick={() => {
//             // Add save logic here if needed
//             handleClose();
//           }}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default SettingLotDetails;







import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const SettingLotDetails = () => {
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const { id: settingPersonId, name, lotNumber } = useParams();
  const [fromDate, setFromDate] = useState(getTodayDateString());

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]); // fetched items
  const [selectedItems, setSelectedItems] = useState([]); // checked ids

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Fetch data when popup opens
  useEffect(() => {
    if (open) {
      axios
        .get('http://localhost:5000/api/filingitems/filingitems/available')
        .then((res) => {
          const filtered = res.data.filter(
            (item) => item.type === 'Items' && item.status === 'Unassigned'
          );
          setItems(filtered);
          console.log('Available Setting Items:', filtered)
        })
        .catch((err) => {
          console.error('Error fetching available items:', err);
        });
    }
  }, [open]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };


  const handleSave = async () => {
    try {
      const payload = {
        setting_person_id: Number(settingPersonId),
        lot_number: String(lotNumber),
        date: fromDate,
        items: selectedItems.map(id => ({ filing_item_id: id })),
      };
  
      console.log('Posting payload:', payload);
  
      await axios.post('http://localhost:5000/api/settingentry', payload);
  
      handleClose();
    } catch (err) {
      console.error('Error saving setting entry:', err);
    }
  };
  


  // const handleSave = async () => {
  //   try {
  //     const payload = {
  //       setting_person_id: Number(settingPersonId), // from URL params
  //       lot_number: lotNumber, // or lot_id if that's what backend expects
  //       date: fromDate,
  //       items: selectedItems, // array of IDs
  //     };
  
  //     console.log('Posting payload:', payload);
  
  //     const res = await axios.post('http://localhost:5000/api/settingentry', payload);
  //     console.log('Save response:', res.data);
  
  //     // Optionally close popup and refresh data
  //     handleClose();
  //   } catch (err) {
  //     console.error('Error saving setting entry:', err);
  //   }
  // };
  

  return (
    <>
      <Navbar />

      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        Add Setting
      </Button> 

      <table> 
      <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Item</th>
              <th>Weight</th>
              <th>Touch</th>
              <th>Purity</th>
              <th>Remarks</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
      </table>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add Setting Details</DialogTitle>
        <DialogContent>
          <TextField
            label="Date"
            type="date"
            size="small"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ ml: 0, mt: 3, mb: 2, width: '200px' }}
          />

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1rem',
            }}
          >
            <thead>
              <tr>
                <th>Select</th>
                <th>Item</th>
                <th>Weight</th>
                <th>Touch</th>
                <th>Purity</th>
                <th>Remarks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
  {items.length > 0 ? (
    items.map((item) => (
      <tr key={item.id}>
        <td style={{ textAlign: 'center' }}>
          <Checkbox
            checked={selectedItems.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
          />
        </td>
        <td>{item.filingitem?.name || '-'}</td>
        <td>{item.weight ?? '-'}</td>
        <td>{item.touch?.touch ?? '-'}</td> 
        <td>{item.item_purity ?? '-'}</td>
        <td>{item.remarks || '-'}</td>
        <td>{item.status || '-'}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={7} style={{ textAlign: 'center' }}>
        No items available
      </td>
    </tr>
  )}
</tbody>

          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button
            variant="contained"
            onClick={() => {
              console.log('Selected Items:', selectedItems);
        
              handleClose();
            }}
          >
            Save
          </Button> */}

<Button variant="contained" onClick={handleSave}>
  Save
</Button>

          
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingLotDetails;
