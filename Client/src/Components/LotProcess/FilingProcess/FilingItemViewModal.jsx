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
import CloseIcon from '@mui/icons-material/Close';
import { DialogActions, Button, Box ,TableFooter} from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
import { BACKEND_SERVER_URL } from "../../../../Config/config";

const FilingItemViewModal = ({ open, onClose, entry, setEntry}) => {
  if (!entry) return null;

const [itemOptions, setItemOptions] = useState([]);
const [touchOptions, setTouchOptions] = useState([]);

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


const handleSaveViewEntry = async () => {
  try {
    if (!entry?.id) {
      alert("Missing filing entry ID.");
      return;
    }

    const payload = {
      filing_entry_id: entry.id,
      after_weight: parseFloat(entry.afterWeight) || 0,
      product_items: (entry.productItems || []).map(item => ({
        item_name: item.itemName,
        weight: parseFloat(item.weight) || 0,
        has_stone: item.hasStone === "Yes",
        touch: parseFloat(item.touch) || 0,
        purity: parseFloat(item.purity) || 0,
        remarks: item.remarks || ""
      })),
      scrap_items: (entry.scrapItems || []).map(item => ({
        item_name: item.itemName,
        weight: parseFloat(item.weight) || 0,
        touch: parseFloat(item.touch) || 0,
        purity: parseFloat(item.purity) || 0,
        remarks: item.remarks || ""
      })),
      wastage: entry.wastage === "Yes"
    };
    console.log("Saving with filing_entry_id:", entry.id);

    const res = await axios.post(`${BACKEND_SERVER_URL}/api/filingitems/bulk`, payload);

    if (res.data.success) {
      alert("Filing items saved successfully.");
      onClose(); 
    } else {
      console.error("Save failed:", res.data);
      alert("Error saving filing items.");
    }
  } catch (error) {
    console.error("Error during save:", error);
    alert("Failed to save filing items.");
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
        <Button variant="contained" onClick={handleSaveViewEntry}
          disabled={entry?.wastage !== 'Yes' && entry?.wastage !== 'No'} >Save</Button>
         

      </DialogActions>
    </Dialog>
    </>
  );
};

export default FilingItemViewModal;
