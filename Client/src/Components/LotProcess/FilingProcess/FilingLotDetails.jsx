
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  MenuItem,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import styles from './FilingLotDetails.module.css';
import { useParams } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { BACKEND_SERVER_URL } from '../../../../Config/config';

const FilingLotDetails = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [assignedEntries, setAssignedEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [viewedItems, setViewedItems] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredEntries, setFilteredEntries] = useState([]);

const [afterWeight, setAfterWeight] = useState('');
const [productItems, setProductItems] = useState([]);
const [scrapItems, setScrapItems] = useState([]);
const [itemsList, setItemsList] = useState([]);
const [touchList, setTouchList] = useState([]);
const [showProductTable, setShowProductTable] = useState(false);
const [showScrapTable, setShowScrapTable] = useState(false);
const [wastageOption, setWastageOption] = useState('No');

  const { id: filingPersonId, name, lotNumber } = useParams();
  const fetchAssignedEntries = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/filingentry/person/${filingPersonId}`);
      setAssignedEntries(res.data);
      setFilteredEntries(res.data); 

    } catch (error) {
      console.error('Error fetching assigned entries:', error);
    }
  };

  const applyDateFilter = () => {
    if (!fromDate || !toDate) {
      setFilteredEntries(assignedEntries); // No filter if dates are empty
      return;
    }
    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999); 
    const filtered = assignedEntries.filter(entry => {
      const createdAt = new Date(entry.createdAt);
      return createdAt >= from && createdAt <= to;
    });
  
    setFilteredEntries(filtered);
  };

  const fetchDropdownOptions = async () => {
      const touchRes = await axios.get(`${BACKEND_SERVER_URL}/api/addtouch`);
      const itemRes = await axios. get (`${BACKEND_SERVER_URL}/api/additem`);

    setItemsList(itemRes.data);
    setTouchList(touchRes.data);
    console.log('Available Touch', touchRes.data)
    console.log('Available Items', itemRes.data)
  };
  
  const fetchAvailableItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/castingitems/castingitems/available');
      const unassignedItems = res.data.filter(item => item.status === 'Unassigned');
      setAvailableItems(unassignedItems);
    } catch (err) {
      console.error("Failed to fetch casting items", err);
    }
  };

  useEffect(() => {
    fetchAssignedEntries();
    fetchAvailableItems();
    fetchDropdownOptions();
  }, []);

  const handleBulkAssign = async () => {
    setIsLoading(true); 
  
    try {
      await axios.post('http://localhost:5000/api/filingentry', {
        filing_person_id: parseInt(filingPersonId),
        lot_number: parseInt(lotNumber),
        itemIds: selectedItemIds,
      });
  
      // Refresh both lists
      await fetchAvailableItems();
      await fetchAssignedEntries();
  
      // Reset
      setSelectedItemIds([]);
      setIsAssignOpen(false);
    } catch (error) {
      console.error('Assignment failed:', error.response?.data || error.message);
    } finally {
      setIsLoading(false); 
    }
  };

const calculatePurity = (weight, touch) => {
  return weight && touch ? ((weight * touch) / 100).toFixed(2) : '';
};

const handleAddProductRow = () => {
  setProductItems([...productItems, { item: '', weight: '', touch: '', purity: '', remarks: '', hasStone: 'No', process: 'Buffing' }]);
  setShowProductTable(true);
};

const handleAddScrapRow = () => {
  setScrapItems([...scrapItems, { item: '', weight: '', touch: '', purity: '', remarks: '' }]);
  setShowScrapTable(true);
};

const totalProductWeight = productItems.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0), 0);
const totalScrapWeight = scrapItems.reduce((acc, curr) => acc + (parseFloat(curr.weight) || 0), 0);
const currentBalanceWeight = parseFloat(afterWeight || 0) - totalProductWeight;
const finalBalance = currentBalanceWeight - totalScrapWeight;

  return (
    <>
      <Navbar />
      <h5 className={styles.heading}>Filing Lot Details</h5>
      <div className={styles.container}>
<div className={styles.header} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
  <TextField
    label="From Date"
    type="date"
    size="small"
    value={fromDate}
    onChange={(e) => setFromDate(e.target.value)}
    InputLabelProps={{ shrink: true }}
    sx={{ml:'2rem'}}
  />
  <TextField
    label="To Date"
    type="date"
    size="small"
    value={toDate}
    onChange={(e) => setToDate(e.target.value)}
    InputLabelProps={{ shrink: true }}
  />
  <Button variant="outlined" onClick={applyDateFilter}> Filter </Button>
  <Button
    variant="text"
    onClick={() => {
      setFromDate('');
      setToDate('');
      fetchAssignedEntries(); 
    }}
  >
    Reset
  </Button> 
  <Button variant="contained" onClick={() => setIsAssignOpen(true)}
  sx={{ml:'50rem'}}
  > Add Filing </Button>
</div>
        <table className={styles.table}>
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
<tbody>
    {filteredEntries.map((entry, index) => (
    <React.Fragment key={entry.id}>
      <tr className={styles.groupHeader}>
        <td rowSpan={entry.castingItems.length}>{index + 1}</td>
        <td rowSpan={entry.castingItems.length}>
  {new Date(entry.createdAt).toLocaleDateString()}
</td>
<td rowSpan={entry.castingItems.length}>
  {new Date(entry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
</td>
        <td>{entry.castingItems[0]?.item_name}</td>
        <td>{entry.castingItems[0]?.weight}</td>
        <td>{entry.castingItems[0]?.touch || '-'}</td>
        <td>{entry.castingItems[0]?.purity || '-'}</td>
        <td>{entry.castingItems[0]?.remarks || '-'}</td>
        <td>Assigned</td>
        <td rowSpan={entry.castingItems.length}>
          <Button
            size="small"
            onClick={() => {
              setViewedItems(entry.castingItems);
              setViewDialogOpen(true);
            }}
          >
            View
          </Button>
        </td>
      </tr>
      {entry.castingItems.slice(1).map((item, idx) => (
        <tr key={item.id || idx}>
          <td>{item.item_name}</td>
          <td>{item.weight}</td>
          <td>{item.touch || '-'}</td>
          <td>{item.purity || '-'}</td>
          <td>{item.remarks || '-'}</td>
          <td>Assigned</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
</tbody>
        </table>
      </div>
      <Dialog
        open={isAssignOpen}
        onClose={() => setIsAssignOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Assign Filing Items</DialogTitle>
        <DialogContent>
          <TextField
            label="Date"
            type="date"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2, mt: 2 }}
          />

          <Typography variant="h6" gutterBottom>
            Available Filing Items
          </Typography>

          <div className={styles.tableContainer}>
            <table className={styles.table}>
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
                {availableItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Checkbox
                        disabled={item.status === 'Assigned'}
                        checked={selectedItemIds.includes(item.id)}
                        onChange={() => {
                          setSelectedItemIds((prev) =>
                            prev.includes(item.id)
                              ? prev.filter((id) => id !== item.id)
                              : [...prev, item.id]
                          );
                        }}
                      />
                    </td>
                    <td>{item.item?.name}</td>
                    <td>{item.weight}</td>
                    <td>{item.touch?.touch}</td>
                    <td>{item.item_purity}</td>
                    <td>{item.remarks || '-'}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAssignOpen(false)}>Cancel</Button>     
          <Button
  variant="contained"
  color="primary"
  disabled={selectedItemIds.length === 0 || isLoading}
  onClick={async () => {
    setIsLoading(true);
    await handleBulkAssign();  
    setIsLoading(false);
  }}
>
  {isLoading ? "Assigning..." : "Assign"}
</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={viewDialogOpen} onClose={() => setViewDialogOpen(false)} maxWidth="md" fullWidth>
  <DialogTitle>Assigned Items</DialogTitle>
  <DialogContent>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Item Name</th>
          <th>Weight</th>
          <th>Touch</th>
          <th>Purity</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(viewedItems) && viewedItems.map((item, index) => (
          <tr key={item?.id || index}>
            <td>{index + 1}</td>
            <td>{item?.item_name || '-'}</td>
            <td>{item?.weight || '-'}</td>
            <td>{item?.touch || '-'}</td>
            <td>{item?.purity || '-'}</td>
            <td>{item?.remarks || '-'}</td>
          </tr>
        ))}
      </tbody>

      <tfoot>
    <tr>
      <td colSpan={2}><strong>Total</strong></td>
      <td>
        <strong>
          {viewedItems
            .reduce((acc, item) => acc + (parseFloat(item?.weight) || 0), 0)
            .toFixed(2)}
        </strong>
      </td>
      <td colSpan={3}></td>
    </tr>
  </tfoot>
    </table>
    <TextField
            label="After Weight"
            value={afterWeight}
            onChange={(e) => setAfterWeight(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleAddProductRow}>Add Product Items</Button>
          {showProductTable && (
            <>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Item</th>
                    <th>Weight</th>
                    <th>Touch</th>
                    <th>Purity</th>
                    <th>Remarks</th>
                    <th>Has Stone</th>
                    <th>Process</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productItems.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <TextField select value={row.item} onChange={(e) => {
                          const updated = [...productItems];
                          updated[index].item = e.target.value;
                          setProductItems(updated);
                        }}>
                          {itemsList.map((i) => <MenuItem key={i.id} value={i.name}>{i.name}</MenuItem>)}
                        </TextField>
                      </td>
                      <td>
                        <TextField type="number" value={row.weight} onChange={(e) => {
                          const updated = [...productItems];
                          updated[index].weight = parseFloat(e.target.value);
                          updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
                          setProductItems(updated);
                        }} />
                      </td>
                      <td>
                        <TextField select value={row.touch} onChange={(e) => {
                          const updated = [...productItems];
                          updated[index].touch = parseFloat(e.target.value);
                          updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
                          setProductItems(updated);
                        }}>
                          {touchList.map((t) => <MenuItem key={t.id} value={t.touch}>{t.touch}</MenuItem>)}
                        </TextField>
                      </td>
                      <td>{row.purity}</td>
                      <td><TextField value={row.remarks} onChange={(e) => {
                        const updated = [...productItems];
                        updated[index].remarks = e.target.value;
                        setProductItems(updated);
                      }} /></td>
                      <td>
                        <TextField select value={row.hasStone} onChange={(e) => {
                          const updated = [...productItems];
                          updated[index].hasStone = e.target.value;
                          updated[index].process = e.target.value === 'Yes' ? 'Setting' : 'Buffing';
                          setProductItems(updated);
                        }}>
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </TextField>
                      </td>
                      <td>{row.process}</td>
                      <td><IconButton onClick={() => {
                        setProductItems(productItems.filter((_, i) => i !== index));
                      }}><DeleteIcon /></IconButton></td>
                    </tr>
                  ))}
                </tbody>
              </table>
           
              <Typography variant="body1">
  Total Product Weight: {totalProductWeight.toFixed(2)}
</Typography>
<Typography variant="body1">
  Current Balance Weight: {currentBalanceWeight.toFixed(2)}
</Typography>

              <TextField
                select
                label="Wastage"
                value={wastageOption}
                onChange={(e) => setWastageOption(e.target.value)}
                sx={{ mt: 2, width:'5rem' }}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField> </>
          )}
          <br/>
          <Button variant="contained" onClick={handleAddScrapRow} sx={{ mt: 0, ml:2 }}>Add Scrap Items</Button>
          {showScrapTable && (
            <>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Item</th>
                    <th>Weight</th>
                    <th>Touch</th>
                    <th>Purity</th>
                    <th>Remarks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {scrapItems.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <TextField select value={row.item} onChange={(e) => {
                          const updated = [...scrapItems];
                          updated[index].item = e.target.value;
                          setScrapItems(updated);
                        }}>
                          {itemsList.map((i) => <MenuItem key={i.id} value={i.name}>{i.name}</MenuItem>)}
                        </TextField>
                      </td>
                      <td><TextField type="number" value={row.weight} onChange={(e) => {
                        const updated = [...scrapItems];
                        updated[index].weight = parseFloat(e.target.value);
                        updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
                        setScrapItems(updated);
                      }} /></td>
                      <td>
                        <TextField select value={row.touch} onChange={(e) => {
                          const updated = [...scrapItems];
                          updated[index].touch = parseFloat(e.target.value);
                          updated[index].purity = calculatePurity(updated[index].weight, updated[index].touch);
                          setScrapItems(updated);
                        }}>
                          {touchList.map((t) => <MenuItem key={t.id} value={t.touch}>{t.touch}</MenuItem>)}
                        </TextField>
                      </td>
                      <td>{row.purity}</td>
                      <td><TextField value={row.remarks} onChange={(e) => {
                        const updated = [...scrapItems];
                        updated[index].remarks = e.target.value;
                        setScrapItems(updated);
                      }} /></td>
                      <td><IconButton onClick={() => {
                        setScrapItems(scrapItems.filter((_, i) => i !== index));
                      }}><DeleteIcon /></IconButton></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
              <Typography variant="body1">
  Total Scrap Weight: {totalScrapWeight.toFixed(2)}
</Typography>
<Typography variant="body1">
  Balance: {finalBalance.toFixed(2)}
</Typography>
            </>
          )}           
     <button> Save </button>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
  </DialogActions>
</Dialog>   
    </>
  );
};

export default FilingLotDetails;