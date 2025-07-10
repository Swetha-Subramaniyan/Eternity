import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Checkbox, Table, TableBody, TableCell,TableFooter,
  TableContainer, TableHead, TableRow, TextField, Typography, Paper
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { Delete } from "@mui/icons-material";
import styles from './BuffingLotDetails.module.css';
import { Tooltip } from '@mui/material'; 

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const BuffingLotDetails = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [viewEntry, setViewEntry] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [entries, setEntries] = useState([]);
  const [date, setDate] = useState(getTodayDate());
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [wastagePercentage, setWastagePercentage] = useState('');
  const [givenGold, setGivenGold] = useState('');
  const [closingSummary, setClosingSummary] = useState(null);
  const [statusFilter, setStatusFilter] = useState(" ")



  const assignedItemNames = entries.flatMap(entry => entry.items.map(it => it.item));
  const items = [
    { item: "cst", beforeWeight: "50", touch: "91.7", purity: "22K", remarks: 'aaaaaaa' },
    { item: "cst1", beforeWeight: "48", touch: "91.7", purity: "22K", remarks: 'bbbbbbb' },
    { item: "Ring", beforeWeight: "150", touch: "92", purity: "22K", remarks: 'cccccccc', stoneWeight: "20", stoneCount: "3" },
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
      wastage: null,
      afterWeight: '',
      extraRemarks: '',
      items: selectedItems.map(it => ({
        item: it.item,
        beforeWeight: it.beforeWeight,
        touch: it.touch,
        purity: it.purity,
        remarks: it.remarks,
        stoneWeight: it.stoneWeight,
        stoneCount: it.stoneCount,
      })),
      scrapItems: []
    };
    
    setEntries(prev => [...prev, newGroup]);
    setSelectedItems([]);
    setDate(getTodayDate());
    setIsAssignOpen(false);
  };


  const filteredEntries = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
  
    if (from && to) return entryDate >= from && entryDate <= to;
    if (from) return entryDate >= from;
    if (to) return entryDate <= to;
    return true;
  });


  const totalReceipt = filteredEntries.reduce(
    (sum, entry) => sum + (parseFloat(entry.receiptWeight) || 0),
    0
  );
  
  const totalBalance = filteredEntries.reduce(
    (sum, entry) => sum + (parseFloat(entry.balance) || 0),
    0
  );
  
  const totalWastage = (totalReceipt * (parseFloat(wastagePercentage) || 0)) / 100;
  const overallWastage = totalBalance - totalWastage;

const additionalGold = parseFloat(givenGold) || 0;
const closingBalance = overallWastage < 0
  ? overallWastage + additionalGold
  : overallWastage;

const settlementMessage =
  closingBalance < 0
    ? 'Owner must give to worker'
    : 'Worker must give to owner';
  

    const handleSaveSummary = () => {
      const data = {
        totalReceipt,
        totalBalance,
        wastagePercentage: parseFloat(wastagePercentage),
        totalWastage,
        overallWastage,
        givenGold: additionalGold,
        closingBalance,
        settlementMessage
      };
      localStorage.setItem('filingSummary', JSON.stringify(data));
      setClosingSummary(data);
      alert("Summary saved successfully.");
    };
  

    const handleCloseJobcard =  () => {
      const savedLots = JSON.parse(localStorage.getItem('buffingLots')) || [];
      const nextId = savedLots.length + 1;
      const updatedLots = [...savedLots, { id: nextId }];
      localStorage.setItem('buffingLots', JSON.stringify(updatedLots));
      alert('Jobcard closed and lot created.');
    }

  return (
    <>
      <Navbar />

       <div className="date-fields">
        <TextField

           sx={{ml:'2rem', mt:'1rem'}}

            id="from-date"
            label="From Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <TextField
          
          sx={{ml:'2rem', mt:'1rem'}}
            id="to-date"
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />

<TextField
  select
  label="Status"
  SelectProps={{ native: true }}
  value={statusFilter}
  // onChange={(e) => setStatusFilter(e.target.value)}
  sx={{ marginLeft: "1.5rem", minWidth: 120 , mt:'1rem' }}
>
  <option value="All">All</option>
  <option value="Completed">Completed</option>
  <option value="Pending">Pending</option>
</TextField>

          <Button
             onClick={() => setIsAssignOpen(true)}
            sx={{
              m: 2,
              ml: 87,
              pl:2,
              pr:2,
              backgroundColor: "#5f4917",
              color: "white",
            }}
          >
            Add Buffing Items
          </Button>
        </div> 


<div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '2rem', width:'100%' }}>

<div style={{ display: 'flex', flexDirection: 'column',}}>
  <div className={styles.tablecontainer} >

        <TableContainer component={Paper} sx={{ width: '65rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>S.No</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Date</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Process</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Issue</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Receipt</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Balance </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Stone Count</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Stone Weight</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Scrap Weight </TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Wastage</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Actions</TableCell>
              </TableRow>
            </TableHead>
<TableBody>
  {filteredEntries.length > 0 ? (
    filteredEntries.map((group, index) => (
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
          {group.receiptWeight ? `${group.receiptWeight} g` : '—'}
        </TableCell>


        <TableCell align="center">
  {group.balance ? `${group.balance} g` : '—'}
</TableCell>
     
        <TableCell align="center">
  {group.totalStoneCount || '-'}
</TableCell>

<TableCell align="center">
  {group.totalStoneWeight || '-'}
</TableCell>
<TableCell align="center">
  {group.totalScrapWeight ? `${group.totalScrapWeight} g` : '—'}
</TableCell>

<TableCell align="center">
          <span style={{ color: group.wastage === 'Yes' ? 'green' : 'red' }}>
            {group.wastage || '—'}
          </span>
        </TableCell>

<TableCell align="center">
        <FaEye style={{ cursor: 'pointer' }} onClick={() => setViewEntry({ ...group, index })} />

        </TableCell>

      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={9} align="center">
        <Typography color="text.secondary">
          No Product found...
        </Typography>
      </TableCell>
    </TableRow>
  )}
</TableBody>
          </Table>       
        </TableContainer>     
      </div>
      </div> 

<Box
  sx={{
    ml: 4,
    p: 2,
    border: '1px solid #ccc',
    borderRadius: '8px',
    minWidth: '70px',
    height: 'fit-content',
    mt: 1,
    mr: 10
  }}
>
  <Typography sx={{ marginLeft: '3rem', color: 'darkblue' }}>
    <b>Opening Balance:</b> 0
  </Typography>
  <hr />

  <Typography sx={{ color: 'red', fontWeight: 'bold', fontSize: '1.1rem' }}>
    Monthly Wastage
  </Typography>
  <br />

  <Typography><strong>Total Receipt:</strong> {totalReceipt.toFixed(2)} g</Typography>

  <TextField
    label="Wastage (%)"
    type="number"
    value={wastagePercentage}
    onChange={(e) => setWastagePercentage(e.target.value)}
    fullWidth
    size="small"
    sx={{ mt: 2 }}
  />

  <Typography sx={{ mt: 2 }}>
    <strong>Total Wastage:</strong> {totalWastage.toFixed(2)} g
  </Typography>

  <Typography sx={{ mt: 2 }}>
    <strong>Balance:</strong> {totalBalance.toFixed(2)} g
  </Typography>

  <Typography sx={{ mt: 2 }}>
    <strong>Overall Wastage:</strong> {overallWastage.toFixed(2)} g
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


<Typography sx={{ mt: 2, color: 'red' }}>
    <strong>Closing Balance:</strong> {closingBalance.toFixed(2)} g
  </Typography>

  {/* Show settlement message */}
  <Typography sx={{ mt: 2, fontWeight: 'bold', color: closingBalance < 0 ? 'red' : 'green' }}>
    {settlementMessage}
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
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Select</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Item</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Weight</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Touch</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Purity</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Remarks</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Stone Count</TableCell>
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Stone Weight</TableCell>
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
        backgroundColor: isAssigned ? '#d0f0c0' : 'inherit', 
        pointerEvents: isAssigned ? 'none' : 'auto',         
        opacity: isAssigned ? 0.6 : 1,                      
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
        <TableRow >
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>S.No</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Item</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Receipt</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Touch</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Purity</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Remarks</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Stone Count</TableCell>
          <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}>Stone Weight</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {viewEntry?.items?.map((item, i) => (
          <TableRow key={i} >
            <TableCell>{i + 1}</TableCell>
            <TableCell>{item.item}</TableCell>
            <TableCell>{item.beforeWeight}g</TableCell>
            <TableCell>{item.touch}</TableCell>
            <TableCell>{item.purity}</TableCell>
            <TableCell>{item.remarks}</TableCell>
            <TableCell>{item.stoneCount || '-'}</TableCell>
            <TableCell>{item.stoneWeight || '-'}</TableCell>
          </TableRow>       
        ))}
      </TableBody> 
      <TableFooter>
  <TableRow >
    <TableCell colSpan={2}><b>Totals</b></TableCell>
    <TableCell>
      {viewEntry?.items?.reduce((sum, item) => sum + parseFloat(item.beforeWeight || 0), 0).toFixed(2)} g
    </TableCell>
    <TableCell />
    <TableCell />
    <TableCell />
    <TableCell>
      {viewEntry?.items?.reduce((sum, item) => sum + parseFloat(item.stoneCount || 0), 0).toFixed(2)}
    </TableCell>
    <TableCell>
      {viewEntry?.items?.reduce((sum, item) => sum + parseFloat(item.stoneWeight || 0), 0).toFixed(2)} g
    </TableCell>
  </TableRow>
</TableFooter>

    </Table>

    <Box sx={{ mt: 3, display: 'flex', gap: 2, padding:2 }}>
                <TextField label="After Weight" type="number" fullWidth required 
                 value={viewEntry?.afterWeight || ''}
                 onChange={(e) => setViewEntry({ ...viewEntry, afterWeight: e.target.value })} 
                 />
                
                <TextField label="Remarks" fullWidth 
                  value={viewEntry?.extraRemarks || ''}
                  onChange={(e) => setViewEntry({ ...viewEntry, extraRemarks: e.target.value })}
                 />
              </Box>


    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2, mt:2,ml:1 }}>

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
  >   No 
  </Button>
</Box>
<hr/> 

<Button
  sx={{ paddingLeft: 2, paddingRight: 2, mb: 1 }}
  variant="outlined"
  onClick={() => {
    const updated = { ...viewEntry };
    updated.scrapItems = [...(viewEntry.scrapItems || []), {
      itemName: '',
      weight: '',
      touch: '',
      purity: '',
      remarks: ''
    }];
    setViewEntry(updated);
  }}
>
  Add Scrap Items
</Button>

{viewEntry?.scrapItems?.length > 0 && (
  <Table size="small">
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
      {viewEntry.scrapItems.map((scrap, index) => (
        <TableRow key={index}>
          <TableCell align="center">{index + 1}</TableCell>
          <TableCell>
            <TextField
              size="small"
              value={scrap.itemName}
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
              value={scrap.weight}
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
              value={scrap.touch}
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
              value={scrap.purity}
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
              value={scrap.remarks}
              onChange={(e) => {
                const updated = [...viewEntry.scrapItems];
                updated[index].remarks = e.target.value;
                setViewEntry({ ...viewEntry, scrapItems: updated });
              }}
            />
          </TableCell>
          <TableCell align="center">
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
)}

  </TableContainer>

  <Box sx={{ ml: 1, mt: 2 }}>
  <Typography variant="subtitle1">
    <strong>Total Scrap Weight: </strong>
    {viewEntry?.scrapItems?.reduce(
      (sum, scrap) => sum + (parseFloat(scrap.weight) || 0),
      0
    ).toFixed(2)} g
  </Typography>

  <Typography variant="subtitle1" sx={{ mt: 1 }}>
    <strong>Balance : </strong>
{(
        (viewEntry?.items?.reduce((sum, item) => sum + (parseFloat(item.beforeWeight) || 0), 0) || 0)
        - (parseFloat(viewEntry?.afterWeight) || 0)
        - (viewEntry?.scrapItems?.reduce((sum, scrap) => sum + (parseFloat(scrap.weight) || 0), 0) || 0)
      ).toFixed(2)} g
  </Typography>
</Box>

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
   
        const totalAfterWeight = parseFloat(viewEntry?.afterWeight || 0);

      
        const totalScrap = (viewEntry?.scrapItems?.length
          ? viewEntry.scrapItems.reduce((sum, scrap) => sum + (parseFloat(scrap.weight) || 0), 0)
          : 0);
      
        const stoneCount = viewEntry?.items?.reduce(
          (sum, item) => sum + (parseFloat(item.stoneCount || 0)), 0
        );
      
        const stoneWeight = viewEntry?.items?.reduce(
          (sum, item) => sum + (parseFloat(item.stoneWeight || 0)), 0
        );
      
        // const balance =  totalAfterWeight - totalScrap;

        const totalBeforeWeight = viewEntry?.items?.reduce(
          (sum, item) => sum + (parseFloat(item.beforeWeight) || 0), 0
        );
        const balance =
          totalBeforeWeight - totalAfterWeight - totalScrap;
        
      
        const updatedEntries = [...entries];
        updatedEntries[viewEntry.index] = {
          ...viewEntry,
          totalStoneCount: stoneCount.toFixed(2),
          totalStoneWeight: stoneWeight.toFixed(2),
          totalScrapWeight: totalScrap.toFixed(2),
          balance: balance.toFixed(2),
          wastage: viewEntry.wastage,
          receiptWeight: parseFloat(viewEntry?.afterWeight || 0).toFixed(2),
          extraRemarks: viewEntry?.extraRemarks || '',

        };
      
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

export default BuffingLotDetails;
