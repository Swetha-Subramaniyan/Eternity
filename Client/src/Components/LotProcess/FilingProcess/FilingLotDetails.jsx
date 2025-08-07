
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import styles from './FilingLotDetails.module.css';
import { useParams } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';



const FilingLotDetails = () => {
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [availableItems, setAvailableItems] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [assignedEntries, setAssignedEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
const [viewedItems, setViewedItems] = useState([]);


  const { id: filingPersonId, name, lotNumber } = useParams();

  const fetchAssignedEntries = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/filingentry/person/${filingPersonId}`);
      setAssignedEntries(res.data);
    } catch (error) {
      console.error('Error fetching assigned entries:', error);
    }
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
  

  return (
    <>
      <Navbar />
      <center>Filing Lot Details</center>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button variant="contained" onClick={() => setIsAssignOpen(true)}>
            Add
          </Button>
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
  {assignedEntries.map((entry, index) => (
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
        maxWidth="lg"
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
    </table>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setViewDialogOpen(false)}>Close</Button>
  </DialogActions>
</Dialog>   
    </>
  );
};

export default FilingLotDetails;

