// import React, { useState, useEffect } from 'react';
// import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,Checkbox, Table, TableBody, TableCell,TableContainer, TableHead, TableRow, TextField, Typography, Paper} from "@mui/material";
// import { FaEye } from "react-icons/fa";
// import styles from './FilingLotDetails.module.css';
// import Navbar from '../../Navbar/Navbar';
// import FilingItemViewModal from './FilingItemViewModal';
// import axios from 'axios'
// import { useParams } from 'react-router-dom';


// const getTodayDate = () => {
//   const today = new Date();
//   return today.toISOString().split('T')[0];
// }

// const FilingLotDetails = () => {
//   const [isAssignOpen, setIsAssignOpen] = useState(false);
//   const [viewEntry, setViewEntry] = useState(null);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [entries, setEntries] = useState([]);
//   const [date, setDate] = useState(getTodayDate());
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [wastagePercent, setWastagePercent] = useState('');
//   const [givenGold, setGivenGold] = useState('');
//   const [closingSummary, setClosingSummary] = useState(null);
//   const [status, setStatus] = useState("All"); 
//   const [isAddItemOpen, setIsAddItemOpen] = useState(false);
//   const [customItems, setCustomItems] = useState([]);
// const [availableItems, setAvailableItems] = useState([]);
// const [selectedItemIds, setSelectedItemIds] = useState([]);

// const { id: filingPersonId, name, lotNumber } = useParams();


// const [newItem, setNewItem] = useState({
//   item: '',
//   beforeWeight: '',
//   touch: '',
//   purity: '',
//   remarks: ''
// });

// const [filingEntries, setFilingEntries] = useState([]);
// const fetchFilingEntries = async () => {
//   try {
//     const response = await axios.get(`http://localhost:5000/api/filingentry/person/${filingPersonId}`);
//     setFilingEntries(response.data);
//     console.log('Fetched Filing Entries:', response.data);
//   } catch (error) {
//     console.error('Error fetching filing entries:', error);
//   }
// };

// useEffect(() => {
//   fetchFilingEntries();
// }, []);


// useEffect(() => {
//   const fetchItems = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/castingitems/castingitems/available');
//       const unassignedItems = res.data.filter(item => item.status === 'Unassigned');
//       setAvailableItems(unassignedItems);
//       console.log('Unassigned items:', unassignedItems);
//     } catch (err) {
//       console.error("Failed to fetch casting items", err);
//     }
//   };

//   fetchItems();
// }, []);


// const handleBulkAssign = async () => {
//   try {
//     if (!filingPersonId || selectedItemIds.length === 0) {
//       alert("Select a filing person and at least one item.");
//       return;
//     }

//     if (!lotNumber) {
//       alert("Lot number is required.");
//       return;
//     }

//     // Filter selected items
//     const selectedItemsData = availableItems.filter(item =>
//       selectedItemIds.includes(item.id)
//     );

//     // Assign each selected item
//     const responses = await Promise.all(
//       selectedItemIds.map((castingItemId) =>
//         axios.post('http://localhost:5000/api/filingentry', {
//           filing_person_id: parseInt(filingPersonId),
//           casting_item_id: castingItemId,
//           lot_number: lotNumber
//         })
//       )
//     );

//     // Refetch all entries after assigning
//     await fetchFilingEntries();

//     // Create one grouped entry for selected items
//     const newEntry = {
//       id: Date.now(), // Local unique id
//       date,
//       items: selectedItemsData.map(item => ({
//         id: item.id,
//         item: item.item?.name || '',
//         beforeWeight: item.weight,
//         touch: item.touch?.touch || '',
//         purity: item.item_purity || '',
//         remarks: item.remarks || '',
//         fullItem: item
//       })),
//       productItems: [],
//       scrapItems: [],
//       wastage: '',
//     };

//     // Add this grouped entry to local state
//     setEntries(prev => [...prev, newEntry]);

//     // Clear selection and close
//     setSelectedItemIds([]);
//     setIsAssignOpen(false);
//   } catch (error) {
//     console.error("Error assigning items:", error?.response?.data || error);
//     alert("Failed to assign items. Please check console.");
//   }
// };



// useEffect(() => {
//   const savedData = localStorage.getItem('filingSummary');
//   if (savedData) {
//     const parsed = JSON.parse(savedData);
//     setClosingSummary(parsed);
//     setGivenGold(parsed.givenGold || '');
//   }
// }, []);

//   const handleSaveViewEntry = () => {
//     const index = entries.findIndex(entry => entry.id === viewEntry.id);
//     if (index === -1) return;
//     const totalProduct = (viewEntry.productItems || []).reduce( (acc, item) => acc + Number(item.weight || 0), 0 );
//     const totalScrap = (viewEntry.scrapItems || []).reduce( (acc, item) => acc + Number(item.weight || 0), 0 );
//     const receiptWeight = (totalProduct - totalScrap).toFixed(2);
//     const updatedEntries = [...entries];
//     updatedEntries[index] = {
//       ...viewEntry,
//       receiptWeight,
//       givenGold,
//       closingBalance
//     };
//     setEntries(updatedEntries);
//     setViewEntry(null);
//     console.log('Updated Dats',updatedEntries)
//   };

//   const totalReceipt = entries.reduce((acc, group) => {
//     const totalProductWeight = (group.productItems || []).reduce(
//       (sum, item) => sum + Number(item.weight || 0),  0 );
//     return acc + totalProductWeight;
//   }, 0);
  
//   const totalWastage = ((totalReceipt * (parseFloat(wastagePercent) || 0)) / 100).toFixed(2);
//   const totalAssigned = entries.reduce((acc, group) => acc + (group.items || []).reduce((sum, item) => sum + Number(item.beforeWeight || 0), 0), 0);
//   const totalScrap = entries.reduce((acc, group) => acc + (group.scrapItems || []).reduce((sum, item) => sum + Number(item.weight || 0), 0), 0 );
//   const balance = (totalAssigned - (totalReceipt + totalScrap)).toFixed(2);
//   const overallWastage = (parseFloat(balance) - parseFloat(totalWastage)).toFixed(2);
//   const closingBalance = ( parseFloat(overallWastage || 0) - parseFloat(givenGold || 0)).toFixed(2);
  
  
//   return (
//     <>
//       <Navbar /> 

//       <div className={styles.datefields}>
//         <TextField
//             id="from-date"
//             label="From Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             sx={{ ml: "3.5rem", mt:'0rem' }}
//           />
//           <TextField
//             id="to-date"
//             label="To Date"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             sx={{ ml: "1.5rem", mt:'0rem' }}
//           />

// <TextField
//            select
//            label="Status"
//            value={status}
//            onChange={(e) => setStatus(e.target.value)}        
//             InputLabelProps={{ shrink: true }}
//             SelectProps={{ native: true }}         
//             sx={{ ml: "1.5rem", mt:'0rem' }}>

//             <option value="All">All</option>
//   <option value="Completed">Completed</option>
//   <option value="Pending">Pending</option>
//   </TextField>

// <Button
// sx={{ ml:'37rem'}}
//     variant="outlined"
//     color="primary"
//     onClick={() => setIsAddItemOpen(true)}
//   >
//     + Add
//   </Button>
//   <Button
//     onClick={() => setIsAssignOpen(true)}
//     sx={{
//       backgroundColor: "#5f4917",
//       color: "white",
//       paddingX: 2,
//       ml:'2rem'
//     }}
//   >
//     Add Filing Items
//   </Button>

//         </div> 
//         <Dialog open={isAddItemOpen} onClose={() => setIsAddItemOpen(false)} fullWidth maxWidth="sm">
//   <DialogTitle>Add New Filing Item</DialogTitle>
//   <DialogContent>
//     <TextField
//       fullWidth
//       label="Item Name"
//       value={newItem.item}
//       onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
//       sx={{ mt: 2 }}
//     />
//     <TextField
//       fullWidth
//       label="Weight"
//       type="number"
//       value={newItem.beforeWeight}
//       onChange={(e) => setNewItem({ ...newItem, beforeWeight: e.target.value })}
//       sx={{ mt: 2 }}
//     />
//     <TextField
//       fullWidth
//       label="Touch"
//       value={newItem.touch}
//       onChange={(e) => setNewItem({ ...newItem, touch: e.target.value })}
//       sx={{ mt: 2 }}
//     />
//     <TextField
//       fullWidth
//       label="Purity"
//       value={newItem.purity}
//       onChange={(e) => setNewItem({ ...newItem, purity: e.target.value })}
//       sx={{ mt: 2 }}
//     />
//     <TextField
//       fullWidth
//       label="Remarks"
//       value={newItem.remarks}
//       onChange={(e) => setNewItem({ ...newItem, remarks: e.target.value })}
//       sx={{ mt: 2 }}
//     />
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={() => setIsAddItemOpen(false)}>Cancel</Button>
//     <Button
//       variant="contained"
//       onClick={() => {
//         if (!newItem.item || !newItem.beforeWeight) {
//           alert("Item name and weight are required");
//           return;
//         }
//         setCustomItems(prev => [...prev, newItem]);
//         setNewItem({ item: '', beforeWeight: '', touch: '', purity: '', remarks: '' });
//         setIsAddItemOpen(false);
//       }}
//     >
//       Save
//     </Button>
//   </DialogActions>
// </Dialog>

// <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '2rem' }}>
//   <div style={{ display: 'flex', flexDirection: 'column',}}>
//     <div className={styles.tablecontainer} >
//       <TableContainer component={Paper} sx={{ width: '60rem' }}>
//         <Table>          
//           <TableHead>
//               <TableRow>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>S.No</b></TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Date</b></TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Time</b></TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Process</b></TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Issue </b></TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Receipt </b></TableCell>                          
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b> Balance </b>  </TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b> Scrap </b> </TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b> Wastage </b> </TableCell>
//                 <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Actions</b></TableCell>  
//               </TableRow>
//             </TableHead>
//             <TableBody>
//   {filingEntries.map((entry, index) => {
    
//     const {
//       date,
//       casting_item,
//       product_items = [],
//       scrap_items = [],
//       wastage,
//       id
//     } = entry;

//     const totalProduct = product_items.reduce((acc, item) => acc + Number(item.weight || 0), 0);
//     const totalScrap = scrap_items.reduce((acc, item) => acc + Number(item.weight || 0), 0);
//     const receipt = (totalProduct - totalScrap).toFixed(2);

//     const balance = (
//       (Number(casting_item?.weight || 0)) -
//       (totalProduct + totalScrap)
//     ).toFixed(2);
//     const casting = entry.castingItem;
//     const itemName = casting?.item?.name || "N/A";
//     const weight = casting?.weight || "—";
//     const createdAt = casting?.createdAt || "";
//     const createdDate = new Date(createdAt).toLocaleDateString('en-GB');
//     const createdTime = createdAt.split("T")[1]?.substring(0, 8) || "—"; 

//     return (
//       <TableRow key={id}>
//             <TableCell>{index + 1}</TableCell>
//             <TableCell>{createdDate}</TableCell> 
//         <TableCell>{createdTime}</TableCell>  
//         <TableCell>{itemName}</TableCell>   
//         <TableCell>{weight}</TableCell>    
//         <TableCell>{totalProduct.toFixed(2)}</TableCell>
//         <TableCell>{balance}</TableCell>
//         <TableCell>{totalScrap.toFixed(2)}</TableCell>
//         <TableCell>
//           <span style={{ color: wastage === 'Yes' ? 'green' : 'red' }}>
//             {wastage || '—'}
//           </span>
//         </TableCell>
//         <TableCell>
//           <FaEye style={{ cursor: 'pointer' }} 
//           // onClick={() => setViewEntry(entry)} 
//           onClick={() => {
//             const itemsArray = Array.isArray(entry.items) ? entry.items : [{
//               item: entry.castingItem?.item?.name || "N/A",
//               beforeWeight: entry.castingItem?.weight || '',
//               touch: entry.castingItem?.touch?.touch || '',
//               purity: entry.castingItem?.item_purity || '',
//               remarks: entry.castingItem?.remarks || ''
//             }];
          
//             const newEntry = {
//               ...entry,
//               items: itemsArray,
//               productItems: entry.product_items || [],
//               scrapItems: entry.scrap_items || [],
//               wastage: entry.wastage || '',
//             };
//             setViewEntry(newEntry);
//           }}
          
          


//           />
//         </TableCell>
//       </TableRow>
//     );
//   })}
// </TableBody>

//         </Table>
//       </TableContainer>
//     </div>
//   </div>


// </div>
//       {/* Assign Dialog */}
//       <Dialog open={isAssignOpen} onClose={() => setIsAssignOpen(false)} fullWidth maxWidth={false}
//         PaperProps={{ sx: { width: '50rem !important' } }}>
//         <DialogTitle>Assign Filing Items</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Date"
//             type="date"
//             fullWidth
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             sx={{ mb: 2, mt:4 }}
//           />
//           <Typography variant="h6" gutterBottom>Available Filing Items</Typography>
//           <Table size="small">
//   <TableHead>
//     <TableRow>
//       <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Select</TableCell>
//       <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Item</TableCell>
//       <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Weight</TableCell>
//       <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Touch</TableCell>
//       <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Purity</TableCell>
//       <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Remarks</TableCell>
//       <TableCell sx={{backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Status</TableCell>
//     </TableRow>
//   </TableHead>

//   <TableBody>
//     {availableItems.map((item) => (
//       <TableRow key={item.id}>
//         <TableCell align="center">
    
// <TableCell align="center">
//   <Checkbox
//     disabled={item.status === "Assigned"}
//     checked={item.status === "Assigned" ? true : selectedItemIds.includes(item.id)}
//     onChange={() => {
//       if (item.status !== "Assigned") {
//         setSelectedItemIds((prev) =>
//           prev.includes(item.id)
//             ? prev.filter((id) => id !== item.id)
//             : [...prev, item.id]
//         );
//       }
//     }}
//     sx={{
//       color: item.status === "Assigned" ? 'green' : undefined,
//       '&.Mui-checked': {
//         color: item.status === "Assigned" ? 'green' : undefined
//       }
//     }}
//   />
// </TableCell>
//         </TableCell>
//         <TableCell align="center">{item.item?.name}</TableCell>
//         <TableCell align="center">{item.weight}</TableCell>
//         <TableCell align="center">{item.touch?.touch}</TableCell>
//         <TableCell align="center">{item.item_purity}</TableCell>
//         <TableCell align="center">{item.remarks || '-'}</TableCell>
//         <TableCell sx={{ textAlign: 'center' }}> {item.status} </TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
// </Table>

//         </DialogContent>
//         <DialogActions>
// <Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>
// <Button variant="contained" color="primary"  disabled={selectedItemIds.length === 0} 
// onClick={handleBulkAssign}> Assign  </Button>

//         </DialogActions>
//       </Dialog>

// <FilingItemViewModal
//   open={!!viewEntry}
//   onClose={() => setViewEntry(null)}
//   entry={viewEntry}
//   setEntry={setViewEntry}
//   handleSaveViewEntry={handleSaveViewEntry}
// />
//     </>
//   );
// };

// export default FilingLotDetails;




import React, { useState, useEffect } from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,Checkbox, Table, TableBody, TableCell,TableContainer, TableHead, TableRow, TextField, Typography, Paper} from "@mui/material";
import { FaEye } from "react-icons/fa";
import styles from './FilingLotDetails.module.css';
import Navbar from '../../Navbar/Navbar';
import FilingItemViewModal from './FilingItemViewModal';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

const FilingLotDetails = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState(getTodayDate());
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [wastagePercent, setWastagePercent] = useState('');
  const [givenGold, setGivenGold] = useState('');
  const [closingSummary, setClosingSummary] = useState(null);
  const [status, setStatus] = useState("All"); 
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [customItems, setCustomItems] = useState([]);
const [availableItems, setAvailableItems] = useState([]);
const [selectedItemIds, setSelectedItemIds] = useState([]);

const { id: filingPersonId, name, lotNumber } = useParams();


const [newItem, setNewItem] = useState({
  item: '',
  beforeWeight: '',
  touch: '',
  purity: '',
  remarks: ''
});

const [filingEntries, setFilingEntries] = useState([]);
const fetchFilingEntries = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/filingentry/person/${filingPersonId}`);
    setFilingEntries(response.data);
    console.log('Fetched Filing Entries:', response.data);
  } catch (error) {
    console.error('Error fetching filing entries:', error);
  }
};

useEffect(() => {
  fetchFilingEntries();
}, []);


useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/castingitems/castingitems/available');
      const unassignedItems = res.data.filter(item => item.status === 'Unassigned');
      setAvailableItems(unassignedItems);
      console.log('Unassigned items:', unassignedItems);
    } catch (err) {
      console.error("Failed to fetch casting items", err);
    }
  };

  fetchItems();
}, []);


const handleBulkAssign = async () => {
  try {
    if (!filingPersonId || selectedItemIds.length === 0) {
      alert("Select a filing person and at least one item.");
      return;
    }

    if (!lotNumber) {
      alert("Lot number is required.");
      return;
    }

    // Filter selected items
    const selectedItemsData = availableItems.filter(item =>
      selectedItemIds.includes(item.id)
    );

    // Assign each selected item
    // const responses = await Promise.all(
    //   selectedItemIds.map((castingItemId) =>
    //     axios.post('http://localhost:5000/api/filingentry', {
    //       filing_person_id: parseInt(filingPersonId),
    //       casting_item_id: castingItemId,
    //       lot_number: lotNumber
    //     })
    //   )
    // );

    const response = await axios.post('http://localhost:5000/api/filingentry', {
  filing_person_id: parseInt(filingPersonId),
  lot_number: lotNumber,
  itemIds: selectedItemIds
});

    // Refetch all entries after assigning
    await fetchFilingEntries();

    // Create one grouped entry for selected items
    const newEntry = {
      id: Date.now(), // Local unique id
      date,
      items: selectedItemsData.map(item => ({
        id: item.id,
        item: item.item?.name || '',
        beforeWeight: item.weight,
        touch: item.touch?.touch || '',
        purity: item.item_purity || '',
        remarks: item.remarks || '',
        fullItem: item
      })),
      productItems: [],
      scrapItems: [],
      wastage: '',
    };

    // Add this grouped entry to local state
    setEntries(prev => [...prev, newEntry]);

    // Clear selection and close
    setSelectedItemIds([]);
    setIsAssignOpen(false);
  } catch (error) {
    console.error("Error assigning items:", error?.response?.data || error);
    alert("Failed to assign items. Please check console.");
  }
};



useEffect(() => {
  const savedData = localStorage.getItem('filingSummary');
  if (savedData) {
    const parsed = JSON.parse(savedData);
    setClosingSummary(parsed);
    setGivenGold(parsed.givenGold || '');
  }
}, []);

  const handleSaveViewEntry = () => {
    const index = entries.findIndex(entry => entry.id === viewEntry.id);
    if (index === -1) return;
    const totalProduct = (viewEntry.productItems || []).reduce( (acc, item) => acc + Number(item.weight || 0), 0 );
    const totalScrap = (viewEntry.scrapItems || []).reduce( (acc, item) => acc + Number(item.weight || 0), 0 );
    const receiptWeight = (totalProduct - totalScrap).toFixed(2);
    const updatedEntries = [...entries];
    updatedEntries[index] = {
      ...viewEntry,
      receiptWeight,
      givenGold,
      closingBalance
    };
    setEntries(updatedEntries);
    setViewEntry(null);
    console.log('Updated Dats',updatedEntries)
  };

  const totalReceipt = entries.reduce((acc, group) => {
    const totalProductWeight = (group.productItems || []).reduce(
      (sum, item) => sum + Number(item.weight || 0),  0 );
    return acc + totalProductWeight;
  }, 0);
  
  const totalWastage = ((totalReceipt * (parseFloat(wastagePercent) || 0)) / 100).toFixed(2);
  const totalAssigned = entries.reduce((acc, group) => acc + (group.items || []).reduce((sum, item) => sum + Number(item.beforeWeight || 0), 0), 0);
  const totalScrap = entries.reduce((acc, group) => acc + (group.scrapItems || []).reduce((sum, item) => sum + Number(item.weight || 0), 0), 0 );
  const balance = (totalAssigned - (totalReceipt + totalScrap)).toFixed(2);
  const overallWastage = (parseFloat(balance) - parseFloat(totalWastage)).toFixed(2);
  const closingBalance = ( parseFloat(overallWastage || 0) - parseFloat(givenGold || 0)).toFixed(2);
  
  
  return (
    <>
      <Navbar /> 

      <div className={styles.datefields}>
        <TextField
            id="from-date"
            label="From Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            sx={{ ml: "3.5rem", mt:'0rem' }}
          />
          <TextField
            id="to-date"
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            sx={{ ml: "1.5rem", mt:'0rem' }}
          />

<TextField
           select
           label="Status"
           value={status}
           onChange={(e) => setStatus(e.target.value)}        
            InputLabelProps={{ shrink: true }}
            SelectProps={{ native: true }}         
            sx={{ ml: "1.5rem", mt:'0rem' }}>

            <option value="All">All</option>
  <option value="Completed">Completed</option>
  <option value="Pending">Pending</option>
  </TextField>

<Button
sx={{ ml:'37rem'}}
    variant="outlined"
    color="primary"
    onClick={() => setIsAddItemOpen(true)}
  >
    + Add
  </Button>
  <Button
    onClick={() => setIsAssignOpen(true)}
    sx={{
      backgroundColor: "#5f4917",
      color: "white",
      paddingX: 2,
      ml:'2rem'
    }}
  >
    Add Filing Items
  </Button>

        </div> 
        <Dialog open={isAddItemOpen} onClose={() => setIsAddItemOpen(false)} fullWidth maxWidth="sm">
  <DialogTitle>Add New Filing Item</DialogTitle>
  <DialogContent>
    <TextField
      fullWidth
      label="Item Name"
      value={newItem.item}
      onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
      sx={{ mt: 2 }}
    />
    <TextField
      fullWidth
      label="Weight"
      type="number"
      value={newItem.beforeWeight}
      onChange={(e) => setNewItem({ ...newItem, beforeWeight: e.target.value })}
      sx={{ mt: 2 }}
    />
    <TextField
      fullWidth
      label="Touch"
      value={newItem.touch}
      onChange={(e) => setNewItem({ ...newItem, touch: e.target.value })}
      sx={{ mt: 2 }}
    />
    <TextField
      fullWidth
      label="Purity"
      value={newItem.purity}
      onChange={(e) => setNewItem({ ...newItem, purity: e.target.value })}
      sx={{ mt: 2 }}
    />
    <TextField
      fullWidth
      label="Remarks"
      value={newItem.remarks}
      onChange={(e) => setNewItem({ ...newItem, remarks: e.target.value })}
      sx={{ mt: 2 }}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setIsAddItemOpen(false)}>Cancel</Button>
    <Button
      variant="contained"
      onClick={() => {
        if (!newItem.item || !newItem.beforeWeight) {
          alert("Item name and weight are required");
          return;
        }
        setCustomItems(prev => [...prev, newItem]);
        setNewItem({ item: '', beforeWeight: '', touch: '', purity: '', remarks: '' });
        setIsAddItemOpen(false);
      }}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>

<div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '2rem' }}>
  <div style={{ display: 'flex', flexDirection: 'column',}}>
    <div className={styles.tablecontainer} >
      <TableContainer component={Paper} sx={{ width: '60rem' }}>
        <Table>          
          <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>S.No</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Date</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Time</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Process</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Issue </b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Receipt </b></TableCell>                          
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b> Balance </b>  </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b> Scrap </b> </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b> Wastage </b> </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Actions</b></TableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
  {filingEntries.map((entry, index) => {
    
    const {
      date,
      casting_item,
      product_items = [],
      scrap_items = [],
      wastage,
      id
    } = entry;

    const totalProduct = product_items.reduce((acc, item) => acc + Number(item.weight || 0), 0);
    const totalScrap = scrap_items.reduce((acc, item) => acc + Number(item.weight || 0), 0);
    const receipt = (totalProduct - totalScrap).toFixed(2);

    const balance = (
      (Number(casting_item?.weight || 0)) -
      (totalProduct + totalScrap)
    ).toFixed(2);
    const casting = entry.castingItem;
    const itemName = casting?.item?.name || "N/A";
    const weight = casting?.weight || "—";
    const createdAt = casting?.createdAt || "";
    const createdDate = new Date(createdAt).toLocaleDateString('en-GB');
    const createdTime = createdAt.split("T")[1]?.substring(0, 8) || "—"; 

    return (
      <TableRow key={id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{createdDate}</TableCell> 
        <TableCell>{createdTime}</TableCell>  
        <TableCell>{itemName}</TableCell>   
        <TableCell>{weight}</TableCell>    
        <TableCell>{totalProduct.toFixed(2)}</TableCell>
        <TableCell>{balance}</TableCell>
        <TableCell>{totalScrap.toFixed(2)}</TableCell>
        <TableCell>
          <span style={{ color: wastage === 'Yes' ? 'green' : 'red' }}>
            {wastage || '—'}
          </span>
        </TableCell>
        <TableCell>
          <FaEye style={{ cursor: 'pointer' }} 
          // onClick={() => setViewEntry(entry)} 
          onClick={() => {
            const itemsArray = Array.isArray(entry.items) ? entry.items : [{
              item: entry.castingItem?.item?.name || " ",
              beforeWeight: entry.castingItem?.weight || '',
              touch: entry.castingItem?.touch?.touch || '',
              purity: entry.castingItem?.item_purity || '',
              remarks: entry.castingItem?.remarks || ''
            }];
          
            const newEntry = {
              ...entry,
              items: itemsArray,
              productItems: entry.product_items || [],
              scrapItems: entry.scrap_items || [],
              wastage: entry.wastage || '',
            };
            setViewEntry(newEntry);
          }}
          
          
          


          />
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

        </Table>
      </TableContainer>
    </div>
  </div>


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
            sx={{ mb: 2, mt:4 }}
          />
          <Typography variant="h6" gutterBottom>Available Filing Items</Typography>
          <Table size="small">
  <TableHead>
    <TableRow>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Select</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Item</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Weight</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Touch</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Purity</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Remarks</TableCell>
      <TableCell sx={{backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Status</TableCell>
    </TableRow>
  </TableHead>

  <TableBody>
    {availableItems.map((item) => (
      <TableRow key={item.id}>
        <TableCell align="center">
    
<TableCell align="center">
  <Checkbox
    disabled={item.status === "Assigned"}
    checked={item.status === "Assigned" ? true : selectedItemIds.includes(item.id)}
    onChange={() => {
      if (item.status !== "Assigned") {
        setSelectedItemIds((prev) =>
          prev.includes(item.id)
            ? prev.filter((id) => id !== item.id)
            : [...prev, item.id]
        );
      }
    }}
    sx={{
      color: item.status === "Assigned" ? 'green' : undefined,
      '&.Mui-checked': {
        color: item.status === "Assigned" ? 'green' : undefined
      }
    }}
  />
</TableCell>
        </TableCell>
        <TableCell align="center">{item.item?.name}</TableCell>
        <TableCell align="center">{item.weight}</TableCell>
        <TableCell align="center">{item.touch?.touch}</TableCell>
        <TableCell align="center">{item.item_purity}</TableCell>
        <TableCell align="center">{item.remarks || '-'}</TableCell>
        <TableCell sx={{ textAlign: 'center' }}> {item.status} </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

        </DialogContent>
        <DialogActions>
<Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>
<Button variant="contained" color="primary"  disabled={selectedItemIds.length === 0} 
onClick={handleBulkAssign}> Assign  </Button>

        </DialogActions>
      </Dialog>

<FilingItemViewModal
  open={!!viewEntry}
  onClose={() => setViewEntry(null)}
  entry={viewEntry}
  setEntry={setViewEntry}
  handleSaveViewEntry={handleSaveViewEntry}
/>
    </>
  );
};

export default FilingLotDetails;


