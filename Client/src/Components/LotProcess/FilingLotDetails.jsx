import React, { useState, useEffect } from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,Checkbox, Table, TableBody, TableCell,TableContainer, TableHead, TableRow, TextField, Typography, Paper, MenuItem} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { Delete } from "@mui/icons-material";
import styles from './FilingLotDetails.module.css';
import Navbar from '../Navbar/Navbar';
import { BACKEND_SERVER_URL } from '../../../Config/config';
import axios from 'axios';
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
  const [availableItems, setAvailableItems] = useState([]);

  const [date, setDate] = useState(getTodayDate());
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [wastagePercent, setWastagePercent] = useState('');
  const [givenGold, setGivenGold] = useState('');
  const [closingSummary, setClosingSummary] = useState(null);
  const [status, setStatus] = useState("All"); 

const [customItems, setCustomItems] = useState([]);
const [itemOptions, setItemOptions] = useState([]);
const [touchOptions, setTouchOptions] = useState([]);


useEffect(() => {
  const fetchEntries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/filingentry");
      setEntries(res.data);
    } catch (err) {
      console.error("Failed to load filing entries:", err);
    }
  };

  fetchEntries();
}, []);


useEffect(() => {
  const fetchDropdownData = async () => {
    try {
      const itemRes = await axios.get(`${BACKEND_SERVER_URL}/api/additem`);
      const touchRes = await axios.get(`${BACKEND_SERVER_URL}/api/addtouch`);
      setItemOptions(itemRes.data);
      setTouchOptions(touchRes.data);
      console.log('Available Touch:',touchRes.data)
      console.log('Available Items',itemRes.data)
    } catch (err) {
      console.error("Failed to fetch dropdown data:", err);
    }
  };

  fetchDropdownData();
}, []);


const { id, name } = useParams();

useEffect(() => {
  const fetchCastingItems = async () => {
    try {
      const response = await axios.get(`${BACKEND_SERVER_URL}/api/castingitems`);     
      // Filter only type === "Items" and map it to your frontend format
      const filteredItems = response.data
        .filter(item => item.type === 'Items')
        .map(item => ({
          id: item.id,
          item: item.item?.name,
          beforeWeight: item.weight,
          touch: item.touch,       
          purity: item.item_purity,
          remarks: item.remarks
        }));
      
      setAvailableItems(filteredItems);
      console.log('Casting Items: ',filteredItems)
    } catch (error) {
      console.error("Failed to fetch casting items:", error);
    }
  };
  fetchCastingItems();
}, []);

const items = [...availableItems, ...customItems];

useEffect(() => {
  const savedData = localStorage.getItem('filingSummary');
  if (savedData) {
    const parsed = JSON.parse(savedData);
    setClosingSummary(parsed);
    setGivenGold(parsed.givenGold || '');
  }
}, []);

  // const assignedItemNames = entries.flatMap(entry => entry.items.map(it => it.item));
  const assignedItemIds = entries.flatMap(entry => entry.items.map(it => it.id));

  const handleToggle = (item) => {
    setSelectedItems(prev =>
      prev.find(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    );
  };

  const handleAssign = async () => {
    if (!date || !selectedItems.length) {
      return alert("Select date and at least one item");
    }
  
    const newEntries = [];
  
    for (const itm of selectedItems) {
      try {
        const res = await axios.post(`${BACKEND_SERVER_URL}/api/filingentry`, {
          filing_person_id: parseInt(id),  // <- comes from useParams()
          casting_item_id: itm.id          // <- the CastingItems.id
        });
  
        // response contains the created filingentry row
        const dbEntry = res.data;          // { id, filing_person_id, casting_item_id, … }
  
        newEntries.push({
          /* local state used by the table */
          id: dbEntry.id,      // <-- keep DB id for later
          date,
          items: [{ ...itm, receiptWeight: "—" }],
          afterWeight: "",
          productItems: [],
          scrapItems: [],
        });
      } catch (err) {
        console.error("Failed to create filing entry:", err);
        alert("Could not assign item “" + itm.item + "”.");
      }
    }
  
    setEntries(prev => [...prev, ...newEntries]);
    setSelectedItems([]);
    setDate(getTodayDate());
    setIsAssignOpen(false);
  };
  

  const handleSaveViewEntry = async () => {
    const idx = entries.findIndex(e => e.id === viewEntry.id);
    if (idx === -1) return;
  
    // Step 1: Calculate receipt weight
    const totalProduct = (viewEntry.productItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0);
    const totalScrap = (viewEntry.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0);
    const receiptWeight = (totalProduct - totalScrap).toFixed(2);
  
    // Step 2: Update local state
    const updatedEntry = {
      ...viewEntry,
      receiptWeight,
      givenGold,
      closingBalance
    };
  
    setEntries(prev => {
      const copy = [...prev];
      copy[idx] = updatedEntry;
      return copy;
    });
  
    setViewEntry(null); // Close the dialog
  
    // Step 3: Post items to backend
    const postItems = async (arr, type) => {
      for (const row of arr) {
        if (!row.item_id || !row.touch_id) {
          console.warn("Missing item_id or touch_id:", row);
          continue; // skip this item if IDs are missing
        }
  
        const payload = {
          filing_entry_id: viewEntry.id,
          type,
          item_id: parseInt(row.item_id),
          weight: parseFloat(row.weight),
          touch_id: parseInt(row.touch_id),
          item_purity: parseFloat(row.purity),
          remarks: row.remarks || '',
          stone_option:
            type === 'Items'
              ? (row.hasStone === 'Yes' ? 'WithStone' : 'WithoutStone')
              : 'WithoutStone',
          after_weight: type === 'Items'
            ? parseFloat(viewEntry.afterWeight || 0)
            : 0,
            wastage: viewEntry.wastage,
            casting_customer_id: viewEntry.casting_customer_id  
         
        };
        try {
          console.log("Sending Wastage:", viewEntry?.wastage);
          await axios.post(`${BACKEND_SERVER_URL}/api/filingitems`, payload);
          console.log(`Saved ${type} item:`, payload);
        } catch (err) {
          console.error(`Failed to save ${type} item:`, err);
        }
      }
    };
    await postItems(viewEntry.productItems || [], 'Items');
    await postItems(viewEntry.scrapItems || [], 'ScrapItems'); 
    alert("Filing items saved.");
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
  
  const handleSaveSummary = () => {
    const data = {
      totalReceipt: totalReceipt.toFixed(2),
      totalWastage,
      balance,
      overallWastage,
      givenGold
    };
    localStorage.setItem('filingSummary', JSON.stringify(data));
    setClosingSummary(data);
    alert("Summary saved successfully.");
  };

  useEffect(() => {
    localStorage.setItem('filingEntries', JSON.stringify(entries));
  }, [entries]);
  
  const handleCloseJobcard = () => {
    const lots = JSON.parse(localStorage.getItem("filingLots") || "[]");
    const nextId = lots.length + 1;
    lots.push({ id: nextId, date: new Date().toISOString() });
    localStorage.setItem("filingLots", JSON.stringify(lots));
    alert("Jobcard closed successfully.");
  };
  
  return (
    <>
      <Navbar />
      <div className={styles.details}><strong>Filing Member:</strong> {name}</div>


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
    onClick={() => setIsAssignOpen(true)}
    sx={{
      backgroundColor: "#5f4917",
      color: "white",
      paddingX: 2,
      ml:'44rem'
    }}
  >
    Add Filing Items
  </Button>
        </div> 
<div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '2rem' }}>
  <div style={{ display: 'flex', flexDirection: 'column',}}>
    <div className={styles.tablecontainer} >
      <TableContainer component={Paper} sx={{ width: '60rem' }}>
        <Table>          
          <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>S.No</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Date</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Process</b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Issue </b></TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><b>Receipt </b></TableCell>                          
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b>Balance </b>  </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b>Scrap </b> </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b>Wastage </b> </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> <b>Actions</b></TableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
            {entries .filter(group => {
    const entryDate = new Date(group.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
  
    const matchesDateRange =
      (!from || entryDate >= from) && (!to || entryDate <= to);
  
    const isCompleted = (group.productItems || []).some(item => parseFloat(item.weight) > 0);
    if (status === "Completed" && !isCompleted) return false;
    if (status === "Pending" && isCompleted) return false;
  
    return matchesDateRange;
  }) .map((group, i) => {
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

  {/* Receipt = Total Product Weight */}
  <TableCell rowSpan={group.items.length}>
    {(group.productItems || [])
      .reduce((acc, item) => acc + Number(item.weight || 0), 0)
      .toFixed(2)}g
  </TableCell>

<TableCell rowSpan={group.items.length}>
  {(
    (group.items || []).reduce((acc, item) => acc + Number(item.beforeWeight || 0), 0) -
    (
      (group.productItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0) +
      (group.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0)
    )
  ).toFixed(2)}g
</TableCell>


  {/* Scrap */}
  <TableCell rowSpan={group.items.length}>
    {(group.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0).toFixed(2)}g
  </TableCell>

  {/* Wastage */}
  <TableCell rowSpan={group.items.length}>
    <span style={{ color: group.wastage === 'Yes' ? 'green' : 'red' }}>
      {group.wastage || '—'}
    </span>
  </TableCell>


    {/* Actions */}
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
      mt: 1,
      mr: 10
    }}
  >
    <Typography sx={{marginLeft:'5rem', color:'darkblue'}}><b> Opening Balance: 0 </b>  </Typography> <hr/>

    <Typography sx={{ color:'red', marginLeft:'0rem', fontWeight:'bold', fontSize:'1.1rem'}}> Montly Wastage </Typography>

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

  <Typography sx={{ mt: 2 }}>
    <strong>Balance:</strong> {balance}g
  </Typography>

   <Typography sx={{ mt: 2 }}>
    <strong>Overall Wastage: </strong> 
    <span style={{ color: parseFloat(overallWastage) >= 0 ? 'green' : 'red' }}>
      {isNaN(overallWastage) ? '0.00' : overallWastage}g
    </span>
  </Typography> 

{/* Show Given Gold only if Overall Wastage is negative */}
{parseFloat(overallWastage) < 0 && (
  <TextField
    label="Given Gold"
    type="number"
    fullWidth
    size="small"
    value={givenGold}
    onChange={(e) => setGivenGold(e.target.value)}
    sx={{ mt: 2 }}
  />
)}

{/* Closing Balance – Always show if overallWastage is non-zero */}
<Typography sx={{ mt: 2, color:'darkblue' }}>
  <strong>Closing Balance:</strong>{" "}
  {(
    parseFloat(overallWastage || 0) +
    parseFloat(parseFloat(overallWastage) < 0 ? givenGold || 0 : 0)
  ).toFixed(2)}g
</Typography>

<Typography
  sx={{
    mt: 1,
    color:
      parseFloat(overallWastage || 0) -
        parseFloat(parseFloat(overallWastage) < 0 ? givenGold || 0 : 0) >
      0
        ? 'green'
        : 'red'
  }}
>
  <strong>
    {(
      parseFloat(overallWastage || 0) -
      parseFloat(parseFloat(overallWastage) < 0 ? givenGold || 0 : 0)
    ) > 0
      ? 'Worker should give to Owner'
      : (
          parseFloat(overallWastage || 0) -
          parseFloat(parseFloat(overallWastage) < 0 ? givenGold || 0 : 0)
        ) < 0
      ? 'Owner should give to Worker'
      : 'No balance due'}
  </strong>
</Typography>

<Button
  variant="contained"
  color="primary"
  sx={{ mt: 3, width: '100%' , backgroundColor: '#1a1a1f', color:'white', textAlign:'center'  }}
  onClick={handleSaveSummary}
>
  Save Summary
</Button>


<Button
  variant="outlined"
  color="error"
  sx={{ mt: 2, width: '100%' }}
  onClick={handleCloseJobcard}
>
  Close Jobcard
</Button>


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
            sx={{ mb: 2, mt:4 }}
          />
          <Typography variant="h6" gutterBottom>Available Filing Items</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Select</TableCell>
                <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Item</TableCell>
                <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Weight</TableCell>
                <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Touch</TableCell>
                <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Purity</TableCell>
                <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Remarks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, idx) => {
                // const isAssigned = assignedItemNames.includes(item.item);
                const isAssigned = assignedItemIds.includes(item.id);

                return (
                  <TableRow key={idx} sx={{
                    backgroundColor: isAssigned ? '#d0f0c0' : 'inherit',
                    pointerEvents: isAssigned ? 'none' : 'auto',
                    opacity: isAssigned ? 0.6 : 1
                  }}>
                    <TableCell>
                      <Checkbox
                        checked={!!selectedItems.find(i => i.id === item.id)}
                        onChange={() => handleToggle(item)}
                        disabled={isAssigned}
                      />
                    </TableCell>
                    <TableCell>{item.item}</TableCell>
                    <TableCell>{item.beforeWeight}</TableCell>
                    <TableCell>{item.touch?.touch}</TableCell>
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
                    <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}> S.No</TableCell>
                    <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Item</TableCell>
                    <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Weight</TableCell>
                    <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Touch</TableCell>
                    <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Purity</TableCell>
                    <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Remarks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {viewEntry.items.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.beforeWeight}</TableCell>
            
                      <TableCell>{item.touch?.touch}</TableCell>

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
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>S.No</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Item Name</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Weight</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center', width:'7rem'  }}>Has Stone</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Process</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Touch</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Purity</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Remarks</TableCell>
        <TableCell  sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {(viewEntry.productItems || []).map((item, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>
            {/* <TextField
              size="small"
              value={item.itemName}
              onChange={(e) => {
                const updated = [...viewEntry.productItems];
                updated[index].itemName = e.target.value;
                setViewEntry({ ...viewEntry, productItems: updated });
              }}
            /> */}
<TextField
  select
  size="small"
  value={item.item_id || ''}
  onChange={(e) => {
    const updated = [...viewEntry.productItems];
    updated[index].item_id = e.target.value;
    setViewEntry({ ...viewEntry, productItems: updated });
  }}
>
  <MenuItem value="">Select</MenuItem>
  {itemOptions.map((opt) => (
    <MenuItem key={opt.id} value={opt.id}>{opt.name}</MenuItem>
  ))}
</TextField>


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
            {/* <TextField
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
            /> */}

<TextField
  select
  size="small"
  value={item.touch_id || ''}
  onChange={(e) => {
    const updated = [...viewEntry.productItems];
    updated[index].touch_id = e.target.value;
    const selectedTouch = touchOptions.find(t => t.id == e.target.value);
    const weight = parseFloat(updated[index].weight) || 0;
    const touch = selectedTouch?.touch || 0;
    updated[index].touch = touch;
    updated[index].purity = ((weight * touch) / 100).toFixed(2);
    setViewEntry({ ...viewEntry, productItems: updated });
  }}
>
  <MenuItem value="">Select</MenuItem>
  {touchOptions.map((opt) => (
    <MenuItem key={opt.id} value={opt.id}>{opt.touch}</MenuItem>
  ))}
</TextField>


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

<Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
  
  {/* Total Product Weight */}
  <Typography variant="subtitle1">
    <strong>Total Product Weight:</strong>{" "}
    {
      (viewEntry.productItems || []).reduce(
        (acc, item) => acc + Number(item.weight || 0),
        0
      ).toFixed(2)
    }g
  </Typography>
{/* Wastage Toggle */}
  {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft:'25rem' }}>
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
  </Box> */}
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: '25rem' }}>
  <Typography variant="subtitle1"><b>Wastage:</b></Typography>

  <Button
    variant={viewEntry?.wastage === true ? 'contained' : 'outlined'}
    color="success"
    onClick={() => setViewEntry({ ...viewEntry, wastage: true })} // ✅ Boolean true
  >
    Yes
  </Button>

  <Button
    variant={viewEntry?.wastage === false ? 'contained' : 'outlined'}
    color="error"
    onClick={() => setViewEntry({ ...viewEntry, wastage: false })} // ✅ Boolean false
  >
    No
  </Button>
</Box>


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
    <TableRow>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>S.No</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Item Name</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Weight</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Touch</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Purity</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Remarks</TableCell>
      <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>Actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {(viewEntry.scrapItems || []).map((item, index) => (
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>

        {/* Item Name Dropdown */}
        <TableCell>
          <TextField
            select
            size="small"
            value={item.item_id || ''}
            onChange={(e) => {
              const updated = [...viewEntry.scrapItems];
              updated[index].item_id = e.target.value;
              setViewEntry({ ...viewEntry, scrapItems: updated });
            }}
          >
            <MenuItem value="">Select</MenuItem>
            {itemOptions.map((opt) => (
              <MenuItem key={opt.id} value={opt.id}>{opt.name}</MenuItem>
            ))}
          </TextField>
        </TableCell>

        {/* Weight Input */}
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

        {/* Touch Dropdown */}
        <TableCell>
          <TextField
            select
            size="small"
            value={item.touch_id || ''}
            onChange={(e) => {
              const updated = [...viewEntry.scrapItems];
              updated[index].touch_id = e.target.value;
              const selectedTouch = touchOptions.find(t => t.id == e.target.value);
              const weight = parseFloat(updated[index].weight) || 0;
              const touch = selectedTouch?.touch || 0;
              updated[index].touch = touch;
              updated[index].purity = ((weight * touch) / 100).toFixed(2);
              setViewEntry({ ...viewEntry, scrapItems: updated });
            }}
          >
            <MenuItem value="">Select</MenuItem>
            {touchOptions.map((opt) => (
              <MenuItem key={opt.id} value={opt.id}>{opt.touch}</MenuItem>
            ))}
          </TextField>
        </TableCell>

        {/* Purity */}
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

        {/* Remarks */}
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

        {/* Delete Button */}
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
    Balance = Assigned Weight − (Product + Scrap) ={" "}
    {(
        (viewEntry.items || []).reduce((acc, item) => acc + Number(item.beforeWeight || 0), 0) -
        (
          (viewEntry.productItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0) +
          (viewEntry.scrapItems || []).reduce((acc, item) => acc + Number(item.weight || 0), 0)
        )).toFixed(2) }g
  </Typography>
</Box>
</>         
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

export default FilingLotDetails;