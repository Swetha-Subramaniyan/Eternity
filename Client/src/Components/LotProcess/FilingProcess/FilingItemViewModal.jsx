// FilingItemViewModal.jsx
import React, {useState, useEffect} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from '@mui/material';
import _ from 'lodash';

import CloseIcon from '@mui/icons-material/Close';
import { DialogActions, Button, Box ,TableFooter} from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { BACKEND_SERVER_URL } from "../../../../Config/config";
import { toast } from 'react-toastify';


const FilingItemViewModal = ({ open, onClose, entry, setEntry, onSaveSuccess}) => {
  if (!entry) return null;

const [itemOptions, setItemOptions] = useState([]);
const [touchOptions, setTouchOptions] = useState([]);
const [filingItems, setFilingItems] = useState([]);

useEffect(() => {
  const fetchDropdownData = async () => {
    try {
      const itemRes = await axios.get(`${BACKEND_SERVER_URL}/api/additem`);
      const touchRes = await axios.get(`${BACKEND_SERVER_URL}/api/addtouch`);
  
      setItemOptions(itemRes.data);
      setTouchOptions(touchRes.data);
      console.log('Items Present', itemRes)
      console.log('Touch present', touchRes)
    } catch (err) {
      console.error("Failed to fetch dropdown data:", err);
    }
  };
  fetchDropdownData();
}, []);

useEffect(() => {
  console.log("Received entry in child:", entry);
  console.log("entry.items:", entry?.items);
}, [entry]);

useEffect(() => {
  const fetchFilingItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/filingitems");
      setFilingItems(response.data); 
      console.log("Fetched filing items:", response.data);
    } catch (error) {
      console.error("Error fetching filing items:", error);
    }
  };

  fetchFilingItems();
}, []);


const handleSaveViewEntry = async () => {
  try {
    // Save Product Items
    for (const item of entry.productItems || []) {
      const payload = {
        filing_entry_id: parseInt(entry.id) ,
        item_id: parseInt(item.itemId),
        type: 'ProductItem',
        item_name: item.itemName,
        weight: item.weight,
        touch_id: item.touch,
        item_purity: item.purity,
        remarks: item.remarks || '',
        stone_option: item.hasStone || 'No',
        wastage: entry.wastage || 'No',
        after_weight: entry.afterWeight || 0,
      };

      await axios.post(`${BACKEND_SERVER_URL}/api/filingitems`, payload);
    }

    // Save Scrap Items
    for (const item of entry.scrapItems || []) {
      const payload = {

        filing_entry_id: parseInt(entry.id) ,
        item_id: parseInt(item.itemId),       
        type: 'ScrapItems',
        item_name: item.itemName,
        weight: item.weight,
        touch_id: item.touch,
        item_purity: item.purity,
        remarks: item.remarks || '',
        wastage: entry.wastage || 'No',
        after_weight: entry.afterWeight || 0,
      };

      // Save to filingitems table
      await axios.post(`${BACKEND_SERVER_URL}/api/filingitems`, payload);

      // Also save to stock
      await axios.post(`${BACKEND_SERVER_URL}/api/stock`, {
        item_id: item.itemId, // assuming you have itemId in scrap item
        weight: item.weight,
        touch_id: item.touch,
        item_purity: item.purity,
        remarks: item.remarks || '',
      });
    }

    toast.success("Filing items saved successfully");

    if (onSaveSuccess) {
      onSaveSuccess(); // refresh parent table
    }

    onClose(); // close the modal
  } catch (error) {
    console.error("Failed to save filing item:", error);
    toast.error("Failed to save filing items");
  }
};

  return ( 
    <> 
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={false} PaperProps={{ sx: { width: '60rem !important' } }}>
      <DialogTitle>Assigned Items</DialogTitle>
      <DialogContent>
        <>
          {/* Assigned Items Table */}
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>S.No</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Item</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Weight</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Touch</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Purity</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Remarks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entry.items?.map((item, i) => (
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
            <TableFooter>
  <TableRow>
    <TableCell colSpan={2} align="center"><strong>Total</strong></TableCell>
    <TableCell align="center">
      <strong>
        {entry.items?.reduce((acc, item) => acc + Number(item.beforeWeight || 0), 0).toFixed(2)}g
      </strong>
    </TableCell>
    <TableCell />
    <TableCell align="center">
      <strong>
        {entry.items?.reduce((acc, item) => acc + Number(item.purity || 0), 0).toFixed(2)}
      </strong>
    </TableCell>
    <TableCell />
  </TableRow>
</TableFooter>
          </Table>

          <div> 
          {/* After Weight */}
          <TextField
            label="After Weight"
            type="number"
            fullWidth
            sx={{ mt: 2 }}
            value={entry.afterWeight || ''}
            onChange={(e) => setEntry({ ...entry, afterWeight: e.target.value })}
          />

          {/* Product Items Section */}
          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              onClick={() => {
                const defaultTouch = entry.items?.[0]?.touch || '';
                setEntry({
                  ...entry,
                  productItems: [...(entry.productItems || []), {
                    itemName: '', weight: '', hasStone: 'No', touch: defaultTouch, purity: '', remarks: ''
                  }]
                });
              }}
            >
              Add Product Items
            </Button>

            {/* Product Items Table */}
            <Box sx={{ mt: 1, maxHeight: '240px', overflowY: 'auto' }}> 
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>S.No</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' , width:'8rem' }}>Item Name</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center', width:'8rem' }}>Weight</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center', width:'7rem' }}>Has Stone</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Process</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center', width:'8rem' }}>Touch</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center', width:'8rem' }}>Purity</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center', width:'8rem' }}>Remarks</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(entry.productItems || []).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>

<TextField
  select
  size="small"
  value={item.itemName}
  onChange={(e) => {
    const updated = [...entry.productItems];
    updated[index].itemName = e.target.value;
    setEntry({ ...entry, productItems: updated });
  }}
  SelectProps={{ native: true }}
>
  <option value="">Select Item</option>
  {itemOptions.map((option, i) => (
    <option key={i} value={option.name}>{option.name}</option>
  ))}
</TextField>

                    
                    </TableCell>
                    <TableCell><TextField size="small" type="number" value={item.weight} onChange={(e) => {
                      const updated = [...entry.productItems];
                      updated[index].weight = e.target.value;
                      const weight = parseFloat(e.target.value) || 0;
                      const touch = parseFloat(updated[index].touch) || 0;
                      updated[index].purity = ((weight * touch) / 100).toFixed(2);
                      setEntry({ ...entry, productItems: updated });
                    }} /></TableCell>
                    <TableCell>
                      <TextField size="small" select SelectProps={{ native: true }} value={item.hasStone} onChange={(e) => {
                      const updated = [...entry.productItems];
                      updated[index].hasStone = e.target.value;
                      setEntry({ ...entry, productItems: updated });
                    }}>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </TextField></TableCell>
                    <TableCell>{item.hasStone === 'Yes' ? 'Setting' : 'Buffing'}</TableCell>
                    <TableCell>
                                       <TextField
  select
  size="small"
  value={item.touch}
  onChange={(e) => {
    const updated = [...entry.productItems];
    updated[index].touch = e.target.value;
    const weight = parseFloat(updated[index].weight) || 0;
    const touch = parseFloat(e.target.value) || 0;
    updated[index].purity = ((weight * touch) / 100).toFixed(2);
    setEntry({ ...entry, productItems: updated });
  }}
  SelectProps={{ native: true }}
>
  <option value="">Select Touch</option>
  {touchOptions.map((option, i) => (
    <option key={i} value={option.touch}>{option.touch}</option>
  ))}
</TextField>

                    </TableCell>
                    <TableCell><TextField size="small" value={item.purity} onChange={(e) => {
                      const updated = [...entry.productItems];
                      updated[index].purity = e.target.value;
                      setEntry({ ...entry, productItems: updated });
                    }} /></TableCell>
                    <TableCell><TextField size="small" value={item.remarks} onChange={(e) => {
                      const updated = [...entry.productItems];
                      updated[index].remarks = e.target.value;
                      setEntry({ ...entry, productItems: updated });
                    }} /></TableCell>
                    <TableCell><Button color="error" size="small" onClick={() => {
                      const updated = [...entry.productItems];
                      updated.splice(index, 1);
                      setEntry({ ...entry, productItems: updated });
                    }}><Delete /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Box>
            {/* Product Total */}
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1">
                <strong>Total Product Weight:</strong>{" "}
                {(entry.productItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0).toFixed(2)}g
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle1"><b>Wastage:</b></Typography>
                <Button variant={entry?.wastage === 'Yes' ? 'contained' : 'outlined'} color="success"
                  onClick={() => setEntry({ ...entry, wastage: 'Yes' })}>Yes</Button>
                <Button variant={entry?.wastage === 'No' ? 'contained' : 'outlined'} color="error"
                  onClick={() => setEntry({ ...entry, wastage: 'No' })}>No</Button>
              </Box>
            </Box>
          </Box>

          {/* Scrap Items */}
          <Box sx={{ mt: 4 }}>
            <Button variant="outlined" onClick={() => setEntry({
              ...entry,
              scrapItems: [...(entry.scrapItems || []), {
                itemName: '', weight: '', touch: '', purity: '', remarks: ''
              }]
            })}>
              Add Scrap Items
            </Button>

            <Box sx={{ mt: 1, maxHeight: '240px', overflowY: 'auto' }}> 
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>S.No</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center', width:'8rem'}}>Item Name</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Weight</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Touch</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Purity</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Remarks</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(entry.scrapItems || []).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>            
                    <TextField
  select
  size="small"
  value={item.itemName}
  onChange={(e) => {
    const updated = [...entry.scrapItems];
    updated[index].itemName = e.target.value;
    setEntry({ ...entry, scrapItems: updated });
  }}
  SelectProps={{ native: true }}
>
  <option value="">Select Item</option>
  {itemOptions.map((option, i) => (
    <option key={i} value={option.name}>{option.name}</option>
  ))}
</TextField>
                    </TableCell>
                    <TableCell><TextField size="small" type="number" value={item.weight} onChange={(e) => {
                      const updated = [...entry.scrapItems];
                      updated[index].weight = e.target.value;
                      const weight = parseFloat(e.target.value) || 0;
                      const touch = parseFloat(updated[index].touch) || 0;
                      updated[index].purity = ((weight * touch) / 100).toFixed(2);
                      setEntry({ ...entry, scrapItems: updated });
                    }} /></TableCell>
                    <TableCell>
<TextField
  select
  size="small"
  value={item.touch}
  onChange={(e) => {
    const updated = [...entry.scrapItems];
    updated[index].touch = e.target.value;
    const weight = parseFloat(updated[index].weight) || 0;
    const touch = parseFloat(e.target.value) || 0;
    updated[index].purity = ((weight * touch) / 100).toFixed(2);
    setEntry({ ...entry, scrapItems: updated });
  }}
  SelectProps={{ native: true }}
>
  <option value="">Select Touch</option>
  {touchOptions.map((option, i) => (
    <option key={i} value={option.touch}>{option.touch}</option>
  ))}
</TextField>
                    </TableCell>
                    <TableCell><TextField size="small" value={item.purity} onChange={(e) => {
                      const updated = [...entry.scrapItems];
                      updated[index].purity = e.target.value;
                      setEntry({ ...entry, scrapItems: updated });
                    }} /></TableCell>
                    <TableCell><TextField size="small" value={item.remarks} onChange={(e) => {
                      const updated = [...entry.scrapItems];
                      updated[index].remarks = e.target.value;
                      setEntry({ ...entry, scrapItems: updated });
                    }} /></TableCell>
                    <TableCell><Button color="error" size="small" onClick={() => {
                      const updated = [...entry.scrapItems];
                      updated.splice(index, 1);
                      setEntry({ ...entry, scrapItems: updated });
                    }}><Delete /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Box>

            {/* Total Scrap Weight */}
            <Box sx={{ mt: 1 }}>
              <Typography>
                <strong>Total Scrap Weight:</strong>{" "}
                {(entry.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0).toFixed(2)}g
              </Typography>
            </Box>
          </Box>

          {/* Balance */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">
              Balance = Assigned Weight − (Product + Scrap) ={" "}
              {
                (
                  (entry.items || []).reduce((acc, item) => acc + Number(item.beforeWeight || 0), 0) -
                  (
                    (entry.productItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0) +
                    (entry.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0)
                  )
                ).toFixed(2)
              }g
            </Typography>
          </Box>
         </div>
        </>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSaveViewEntry }
          disabled={entry?.wastage !== 'Yes' && entry?.wastage !== 'No'} >Save</Button>        
      </DialogActions>
    </Dialog>
    </>
  );
};

export default FilingItemViewModal;



// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Typography,
//   MenuItem,
//   IconButton,
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';
// import Navbar from '../../Navbar/Navbar';
// import styles from './FilingLotDetails.module.css';
// import { useParams } from 'react-router-dom';
// import Checkbox from '@mui/material/Checkbox';

// const BACKEND_SERVER_URL = 'http://localhost:5000';

// const FilingLotDetails = () => {
//   const [isAssignOpen, setIsAssignOpen] = useState(false);
//   const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
//   const [availableItems, setAvailableItems] = useState([]);
//   const [selectedItemIds, setSelectedItemIds] = useState([]);
//   const [assignedEntries, setAssignedEntries] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [viewDialogOpen, setViewDialogOpen] = useState(false);
//   const [viewedItems, setViewedItems] = useState([]);
//   const [afterWeight, setAfterWeight] = useState('');
//   const [productItems, setProductItems] = useState([]);
//   const [scrapItems, setScrapItems] = useState([]);
//   const [itemsList, setItemsList] = useState([]);
//   const [touchList, setTouchList] = useState([]);
//   const [showProductTable, setShowProductTable] = useState(false);
//   const [showScrapTable, setShowScrapTable] = useState(false);
//   const [wastageOption, setWastageOption] = useState('No');

//   const { id: filingPersonId, name, lotNumber } = useParams();

//   useEffect(() => {
//     fetchAssignedEntries();
//     fetchAvailableItems();
//     fetchDropdownOptions();
//   }, []);

//   const fetchDropdownOptions = async () => {
//     const itemRes = await axios.get(`${BACKEND_SERVER_URL}/api/additem`);
//     const touchRes = await axios.get(`${BACKEND_SERVER_URL}/api/addtouch`);
//     setItemsList(itemRes.data);
//     setTouchList(touchRes.data);
//   };

//   const fetchAssignedEntries = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_SERVER_URL}/api/filingentry/person/${filingPersonId}`);
//       setAssignedEntries(res.data);
//     } catch (error) {
//       console.error('Error fetching assigned entries:', error);
//     }
//   };

//   const fetchAvailableItems = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_SERVER_URL}/api/castingitems/castingitems/available`);
//       const unassignedItems = res.data.filter(item => item.status === 'Unassigned');
//       setAvailableItems(unassignedItems);
//     } catch (err) {
//       console.error("Failed to fetch casting items", err);
//     }
//   };

//   const handleBulkAssign = async () => {
//     setIsLoading(true);
//     try {
//       await axios.post(`${BACKEND_SERVER_URL}/api/filingentry`, {
//         filing_person_id: parseInt(filingPersonId),
//         lot_number: parseInt(lotNumber),
//         itemIds: selectedItemIds,
//       });
//       await fetchAvailableItems();
//       await fetchAssignedEntries();
//       setSelectedItemIds([]);
//       setIsAssignOpen(false);
//     } catch (error) {
//       console.error('Assignment failed:', error.response?.data || error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const calculatePurity = (weight, touch) => {
//     return weight && touch ? ((weight * touch) / 100).toFixed(2) : '';
//   };

//   const handleAddProductRow = () => {
//     setProductItems([...productItems, { item: '', weight: '', touch: '', purity: '', remarks: '', hasStone: 'No', process: 'Buffing' }]);
//     setShowProductTable(true);
//   };

//   const handleAddScrapRow = () => {
//     setScrapItems([...scrapItems, { item: '', weight: '', touch: '', purity: '', remarks: '' }]);
//     setShowScrapTable(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <center>Filing Lot Details</center>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <Button variant="contained" onClick={() => setIsAssignOpen(true)}>Add</Button>
//         </div>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Item</th>
//               <th>Weight</th>
//               <th>Touch</th>
//               <th>Purity</th>
//               <th>Remarks</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignedEntries.map((entry, index) => (
//               <React.Fragment key={entry.id}>
//                 <tr className={styles.groupHeader}>
//                   <td rowSpan={entry.castingItems.length}>{index + 1}</td>
//                   <td rowSpan={entry.castingItems.length}>{new Date(entry.createdAt).toLocaleDateString()}</td>
//                   <td rowSpan={entry.castingItems.length}>{new Date(entry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
//                   <td>{entry.castingItems[0]?.item_name}</td>
//                   <td>{entry.castingItems[0]?.weight}</td>
//                   <td>{entry.castingItems[0]?.touch || '-'}</td>
//                   <td>{entry.castingItems[0]?.purity || '-'}</td>
//                   <td>{entry.castingItems[0]?.remarks || '-'}</td>
//                   <td>Assigned</td>
//                   <td rowSpan={entry.castingItems.length}>
//                     <Button
//                       size="small"
//                       onClick={() => {
//                         setViewedItems(entry.castingItems);
//                         setViewDialogOpen(true);
//                       }}
//                     >
//                       View
//                     </Button>
//                   </td>
//                 </tr>
//                 {entry.castingItems.slice(1).map((item, idx) => (
//                   <tr key={item.id || idx}>
//                     <td>{item.item_name}</td>
//                     <td>{item.weight}</td>
//                     <td>{item.touch || '-'}</td>
//                     <td>{item.purity || '-'}</td>
//                     <td>{item.remarks || '-'}</td>
//                     <td>Assigned</td>
//                   </tr>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Dialog open={viewDialogOpen} onClose={() => setViewDialogOpen(false)} maxWidth="lg" fullWidth>
//         <DialogTitle>Assigned Items</DialogTitle>
//         <DialogContent>
//           <table className={styles.table}>
//             <thead>
//               <tr>
//                 <th>S.No</th>
//                 <th>Item Name</th>
//                 <th>Weight</th>
//                 <th>Touch</th>
//                 <th>Purity</th>
//                 <th>Remarks</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(viewedItems) && viewedItems.map((item, index) => (
//                 <tr key={item?.id || index}>
//                   <td>{index + 1}</td>
//                   <td>{item?.item_name || '-'}</td>
//                   <td>{item?.weight || '-'}</td>
//                   <td>{item?.touch || '-'}</td>
//                   <td>{item?.purity || '-'}</td>
//                   <td>{item?.remarks || '-'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <TextField
//             label="After Weight"
//             value={afterWeight}
//             onChange={(e) => setAfterWeight(e.target.value)}
//             fullWidth
//             margin="normal"
//           />

//           <Button variant="contained" onClick={handleAddProductRow}>Add Product Items</Button>
//           {showProductTable && (
//             <>
//               <table className={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>S.No</th>
//                     <th>Item</th>
//                     <th>Weight</th>
//                     <th>Touch</th>
//                     <th>Purity</th>
//                     <th>Remarks</th>
//                     <th>Has Stone</th>
//                     <th>Process</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {productItems.map((row, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <TextField select value={row.item} onChange={(e) => {
//                           const updated = [...productItems];
//                           updated[index].item = e.target.value;
//                           setProductItems(updated);
//                         }}>
//                           {itemsList.map((i) => <MenuItem key={i.id} value={i.name}>{i.name}</MenuItem>)}
//                         </TextField>
//                       </td>
//                       <td>
//                         <TextField type="number" value={row.weight} onChange={(e) => {
//                           const updated = [...productItems];
//                           updated[index].weight = parseFloat(e.target.value);
//                           updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
//                           setProductItems(updated);
//                         }} />
//                       </td>
//                       <td>
//                         <TextField select value={row.touch} onChange={(e) => {
//                           const updated = [...productItems];
//                           updated[index].touch = parseFloat(e.target.value);
//                           updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
//                           setProductItems(updated);
//                         }}>
//                           {touchList.map((t) => <MenuItem key={t.id} value={t.touch}>{t.touch}</MenuItem>)}
//                         </TextField>
//                       </td>
//                       <td>{row.purity}</td>
//                       <td><TextField value={row.remarks} onChange={(e) => {
//                         const updated = [...productItems];
//                         updated[index].remarks = e.target.value;
//                         setProductItems(updated);
//                       }} /></td>
//                       <td>
//                         <TextField select value={row.hasStone} onChange={(e) => {
//                           const updated = [...productItems];
//                           updated[index].hasStone = e.target.value;
//                           updated[index].process = e.target.value === 'Yes' ? 'Setting' : 'Buffing';
//                           setProductItems(updated);
//                         }}>
//                           <MenuItem value="Yes">Yes</MenuItem>
//                           <MenuItem value="No">No</MenuItem>
//                         </TextField>
//                       </td>
//                       <td>{row.process}</td>
//                       <td><IconButton onClick={() => {
//                         setProductItems(productItems.filter((_, i) => i !== index));
//                       }}><DeleteIcon /></IconButton></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <Typography variant="body1">
//                 Total Product Weight: {productItems.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0), 0).toFixed(2)}
//               </Typography>
//               <TextField
//                 select
//                 label="Wastage"
//                 value={wastageOption}
//                 onChange={(e) => setWastageOption(e.target.value)}
//                 sx={{ mt: 2 }}
//               >
//                 <MenuItem value="Yes">Yes</MenuItem>
//                 <MenuItem value="No">No</MenuItem>
//               </TextField>
//             </>
//           )}

//           <Button variant="contained" onClick={handleAddScrapRow} sx={{ mt: 2 }}>Add Scrap Items</Button>
//           {showScrapTable && (
//             <>
//               <table className={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>S.No</th>
//                     <th>Item</th>
//                     <th>Weight</th>
//                     <th>Touch</th>
//                     <th>Purity</th>
//                     <th>Remarks</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {scrapItems.map((row, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <TextField select value={row.item} onChange={(e) => {
//                           const updated = [...scrapItems];
//                           updated[index].item = e.target.value;
//                           setScrapItems(updated);
//                         }}>
//                           {itemsList.map((i) => <MenuItem key={i.id} value={i.name}>{i.name}</MenuItem>)}
//                         </TextField>
//                       </td>
//                       <td><TextField type="number" value={row.weight} onChange={(e) => {
//                         const updated = [...scrapItems];
//                         updated[index].weight = parseFloat(e.target.value);
//                         updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
//                         setScrapItems(updated);
//                       }} /></td>
//                       <td>
//                         <TextField select value={row.touch} onChange={(e) => {
//                           const updated = [...scrapItems];
//                           updated[index].touch = parseFloat(e.target.value);
//                           updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
//                           setScrapItems(updated);
//                         }}>
//                           {touchList.map((t) => <MenuItem key={t.id} value={t.touch}>{t.touch}</MenuItem>)}
//                         </TextField>
//                       </td>
//                       <td>{row.purity}</td>
//                       <td><TextField value={row.remarks} onChange={(e) => {
//                         const updated = [...scrapItems];
//                         updated[index].remarks = e.target.value;
//                         setScrapItems(updated);
//                       }} /></td>
//                       <td><IconButton onClick={() => {
//                         setScrapItems(scrapItems.filter((_, i) => i !== index));
//                       }}><DeleteIcon /></IconButton></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <Typography variant="body1">
//                 Total Scrap Weight: {scrapItems.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0), 0).toFixed(2)}
//               </Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default FilingLotDetails;