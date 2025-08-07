import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  TextField,
  Stack
} from '@mui/material';
import axios from 'axios';
import { BACKEND_SERVER_URL } from "../../../../Config/config";
import CastingEntryViewModal from './CastingEntryViewModel';
import Navbar from '../../Navbar/Navbar';
import { FaEye } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const CastingEntry = () => {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [nameOptions, setNameOptions] = useState([]);
  const [touchOptions, setTouchOptions] = useState([]);
  const [mode, setMode] = useState('add');

  const [form, setForm] = useState({
    date: new Date().toISOString().split('T')[0],
    name: '',
    nameId: '',
    givenGold: '',
    touch: '',
    touchId: '',
    finalTouch: '',
    purity: 0,
    pureValue: 0,
    beforeWeight: 0,
    copper: 0,
  });

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [allEntries, setAllEntries] = useState([]); 
  const [openModal, setOpenModal] = useState(false); 
  const [updatedCastingItems, setUpdatedCastingItems] = useState({});


  const handleCastingItemsSaved = (entryId, summaryData) => {
    setUpdatedCastingItems(prev => ({
      ...prev,
      [entryId]: summaryData
    }));

    fetchAllData();
  };
  

  const resetForm = () => {
    setForm({
      date: new Date().toISOString().split('T')[0],
      name: '',
      nameId: '',
      givenGold: '',
      touch: '',
      touchId: '',
      finalTouch: '',
      purity: 0,
      pureValue: 0,
      beforeWeight: 0,
      copper: 0,
    });
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const fetchAllData = async () => {
    try {
      const [touchRes, nameRes, entryRes] = await Promise.all([
        axios.get(`${BACKEND_SERVER_URL}/api/addtouch`),
        axios.get(`${BACKEND_SERVER_URL}/api/casting`),
        axios.get(`${BACKEND_SERVER_URL}/api/castingentry`)
      ]);
      setTouchOptions(touchRes.data);
      setNameOptions(nameRes.data);
      setEntries(entryRes.data);
      setAllEntries(entryRes.data);
    } catch (err) {
      console.error('Error fetching dropdown data', err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

 
  useEffect(() => {
    const givenGold = parseFloat(form.givenGold) || 0;
    const touch = parseFloat(form.touch) || 0;
    const finalTouch = parseFloat(form.finalTouch) || 0;
    const purity = (givenGold * touch) / 100;
    const pureValue = finalTouch / 100;
    const beforeWeight = pureValue ? purity / pureValue : 0;
    const copper = givenGold - beforeWeight;

    setForm((prev) => ({
      ...prev,
      purity: purity.toFixed(3),
      pureValue: pureValue.toFixed(3),
      beforeWeight: beforeWeight.toFixed(3),
      copper: copper.toFixed(3),
    }));
  }, [form.givenGold, form.touch, form.finalTouch]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    if (field === 'name') {
      const selected = nameOptions.find(n => n.name === value);
      setForm(prev => ({ ...prev, name: value, nameId: selected?.id || '' }));
    } else if (field === 'touch') {
      const selected = touchOptions.find(t => t.touch === value);
      setForm(prev => ({ ...prev, touch: value, touchId: selected?.id || '' }));
    } else {
      setForm({ ...form, [field]: value });
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        date: form.date,
        given_gold: parseFloat(form.givenGold),
        casting_customer_id: form.nameId,
        touch_id: form.touchId,
        final_touch: parseFloat(form.finalTouch),
        purity: parseFloat(form.purity),
        pure_value: parseFloat(form.pureValue),
        final_weight: parseFloat(form.beforeWeight),
        copper: parseFloat(form.copper)
      };

      const response = await axios.post(`${BACKEND_SERVER_URL}/api/castingentry`, payload);
      const savedEntry = response.data; 
      console.log("Saved Entry:", savedEntry);
      console.log("Casting Entry ID:", savedEntry.id);
  
      setForm(prev => ({
        ...prev,
        id: savedEntry.id 
      }));
  
      setEntries(prev => [...prev, savedEntry]);
      setAllEntries(prev => [...prev, savedEntry]);

      await fetchAllData();

      setMode("view");    
      setOpenModal(true);   
  
    } catch (err) {
      console.error("Failed to save:", err);
      alert("Error saving entry");
    }
  };
  
  const handleOpen = () => {
    setMode('add');
    resetForm();
    setOpen(true);
   

  };

  const handleView = (entry) => {
    const nameObj = nameOptions.find(obj => obj.id === entry.casting_customer_id);
    const touchObj = touchOptions.find(t => t.id === entry.touch_id);

    setForm({
      id: entry.id,
      date: entry.date?.split('T')[0] || '',
      name: nameObj?.name || '',
      nameId: nameObj?.id || '',
      givenGold: entry.given_gold || '',
      touch: touchObj?.touch || '',
      touchId: touchObj?.id || '',
      finalTouch: entry.final_touch || '',
      purity: entry.purity || '',
      pureValue: entry.pure_value || '',
      beforeWeight: entry.final_weight || '',
      copper: entry.copper || ''
    });

    setMode('view');
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await axios.delete(`${BACKEND_SERVER_URL}/api/castingentry/${id}`);
        setEntries(prev => prev.filter(entry => entry.id !== id));
        setAllEntries(prev => prev.filter(entry => entry.id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Failed to delete entry.");
      }
    }
  };

  const handleDateFilter = () => {
    if (!fromDate || !toDate) return;

    const filtered = allEntries.filter(entry => {
      const entryDate = new Date(entry.date).toISOString().split("T")[0];
      return entryDate >= fromDate && entryDate <= toDate;
    });

    setEntries(filtered);
  };

  const handleReset = () => {
    setFromDate('');
    setToDate('');
    setEntries(allEntries);
  };

  return (
    <>
    <Navbar/>
      <center style={{marginTop:'1.5rem'}}>Casting Entry</center>
      <Stack direction="row" spacing={2} alignItems="center" mb={2} ml={6} mt={2}>
        <TextField
          type="date"
          label="From Date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          label="To Date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" onClick={handleDateFilter}>Filter</Button>
        <Button variant="outlined" onClick={handleReset}>Reset</Button>
        <Button variant="contained" color="success" onClick={handleOpen}>Add Casting / Melting</Button>
      </Stack>

      <Table sx={{width:'92rem', marginLeft:'2rem'}}>
        <TableHead>
          <TableRow >
            <TableCell>S.No</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Before Weight</TableCell> 
            <TableCell>Product Item(s)</TableCell>
            <TableCell>Product Qty</TableCell>
<TableCell>Scrap Item(s)</TableCell>
<TableCell>Scrap Qty</TableCell>
<TableCell>Total Item Weight</TableCell>
<TableCell>Balance Weight</TableCell>
<TableCell>Scrap Weight</TableCell>
<TableCell>Wastage</TableCell>
<TableCell>Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
  {entries.map((entry, index) => {
    return (
      <TableRow key={entry.id}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{entry.date ? new Date(entry.date).toLocaleDateString() : "-"}</TableCell>
        <TableCell>{entry.createdAt ? new Date(entry.createdAt).toLocaleTimeString() : "-"}</TableCell>
        <TableCell>{entry.customer?.name || "-"}</TableCell>
        <TableCell>{entry.final_weight ?? "-"}</TableCell>
<TableCell>{Array.isArray(entry.productItems) ? entry.productItems.join(", ") : "-"}</TableCell>
<TableCell>{entry.productQty || "-"}</TableCell>
<TableCell>{Array.isArray(entry.scrapItems) ? entry.scrapItems.join(", ") : "-"}</TableCell>
<TableCell>{entry.scrapQty || "-"}</TableCell>
<TableCell>{entry.totalItemWeight ? entry.totalItemWeight.toFixed(2) : '-'}</TableCell>
<TableCell>{entry.currentBalanceWeight ? entry.currentBalanceWeight.toFixed(2) : '-'}</TableCell>
<TableCell>{entry.totalScrapWeight ? entry.totalScrapWeight.toFixed(2) : '-'}</TableCell>
<TableCell>{entry.totalWastage ? entry.totalWastage.toFixed(2) : '-'}</TableCell>


        <TableCell>
          <FaEye onClick={() => handleView(entry)} />
          <RiDeleteBin2Fill onClick={() => handleDelete(entry.id)} />      
        </TableCell>
      </TableRow>

    );
  })}
</TableBody>
      </Table>
      <CastingEntryViewModal
        open={open}
        handleClose={handleClose}
        form={form}
        mode={mode}
        nameOptions={nameOptions}
        touchOptions={touchOptions}
        handleChange={handleChange}
        handleSave={handleSave}
        castingEntryId={form.id}
        openModal={openModal}             
        setOpenModal={setOpenModal} 
        handleCastingItemsSaved={handleCastingItemsSaved}
       
      />
    </>
  );
};

export default CastingEntry;
