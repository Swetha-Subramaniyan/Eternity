import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import styles from './AddFilingPopup.module.css';
import { BACKEND_SERVER_URL } from '../../../Config/config';

const AddFilingPopup = ({ itemId, onClose }) => {
  const [formData, setFormData] = useState({
    afterWeight: '',
    remarks: '',
    wastage: '',
    stoneOption: '',
    process: '',
  });

  useEffect(() => {
    if (itemId) {
      // Optional: fetch more data about this item if needed
    }
  }, [itemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValid = formData.wastage && formData.stoneOption;

  const handleSave = async () => {
    try {
      await axios.post(`${BACKEND_SERVER_URL}/api/filing/updateDetails`, {
        itemId,
        ...formData,
      });

      // Optionally move to stock here if required
      await axios.post(`${BACKEND_SERVER_URL}/api/stock/addFromFiling`, {
        itemId,
      });

      onClose();
    } catch (err) {
      console.error('Error saving filing details', err);
    }
  };

  return (
    <div className={styles.popupContent}>
      <h3>Update Filing Item</h3>

      <TextField
        label="After Weight"
        name="afterWeight"
        type="number"
        value={formData.afterWeight}
        onChange={handleChange}
        fullWidth
        margin="dense"
      />

      <FormControl fullWidth margin="dense">
        <InputLabel>Stone Option</InputLabel>
        <Select
          name="stoneOption"
          value={formData.stoneOption}
          onChange={handleChange}
        >
          <MenuItem value="WithStone">Yes</MenuItem>
          <MenuItem value="WithoutStone">No</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="dense">
        <InputLabel>Wastage</InputLabel>
        <Select
          name="wastage"
          value={formData.wastage}
          onChange={handleChange}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>

      {formData.stoneOption === 'WithStone' ? (
        <div className={styles.process}>Process: <b>Setting</b></div>
      ) : (
        <div className={styles.process}>Process: <b>Buffing</b></div>
      )}

      <TextField
        label="Remarks"
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        fullWidth
        margin="dense"
      />

      <div className={styles.buttonWrapper}>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!isValid}
        >
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default AddFilingPopup;
