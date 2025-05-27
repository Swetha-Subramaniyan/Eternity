
import React, { useState, useEffect } from "react";
import "./Casting.css";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Edit, Delete } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from 'axios';
import { BACKEND_SERVER_URL } from "../../../Config/config";

export default function Casting() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    date: "",
    name: "",
    givenGold: "",
    givenTouch: "",
    copperTouch: "",
    finalTouch: "", 
  });

  const [items, setItems] = useState([]);
  const [scrapItems, setScrapItems] = useState([]);
  const [savedCastings, setSavedCastings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [castingNames,setCastingNames] = useState([]);


  useEffect(() => {
    const fetchCastingNames = async () => {
      try {
        const response = await axios.get(`${BACKEND_SERVER_URL}/api/casting`);
        const names = response.data.map(casting => casting.name);
        setCastingNames(names);
      } catch (error) {
        console.error("Error fetching casting names:", error);
      }
    };
  
    fetchCastingNames();
  }, []);
  


const purity = (parseFloat(form.givenGold || 0) * parseFloat(form.givenTouch || 0)) / 100; 
const pureValue = parseFloat(form.finalTouch || 0) / 100;  
const finalWeight = pureValue ? purity / pureValue : 0;
const copper = parseFloat(form.givenGold || 0) - finalWeight;


const afterWeight = items.reduce((sum, item) => sum + parseFloat(item.weight || 0), 0);
const totalScrapWeight = scrapItems.reduce((sum, item) => sum + parseFloat(item.weight || 0), 0);

const wastage = finalWeight - afterWeight;
const totalWastage = wastage - totalScrapWeight;


  const addItem = () => {
    setItems([...items, { name: "", weight: "", touch: form.finalTouch || "", remarks: "" }]);
  };
  
  const addScrapItem = () => {
    setScrapItems([...scrapItems, { name: "", weight: "", touch: form.finalTouch || "", remarks: "" }]);
  };
  

  const handleItemChange = (list, setList, index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;
    setList(updated);
  };

  const handleSave = () => {
    const newEntry = {
      ...form,
      beforeWeight: finalWeight.toFixed(3),
      afterWeight: afterWeight.toFixed(3),
      items: [...items],
      scrapItems: [...scrapItems],
    };

    if (editIndex !== null) {
      const updated = [...savedCastings];
      updated[editIndex] = newEntry;
      setSavedCastings(updated);
      toast.success("Updated successfully!");
    } else {
      setSavedCastings([...savedCastings, newEntry]);
      toast.success("Saved successfully!");
    }

    resetForm();
    setShowPopup(false);
  };

  const resetForm = () => {
    setForm({
      date: "",
      name: "",
      givenGold: "",
      givenTouch: "",
      copperTouch: "",
      finalTouch: "",
    });
    setItems([]);
    setScrapItems([]);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const data = savedCastings[index];
    setForm(data);
    setItems(data.items || []);
    setScrapItems(data.scrapItems || []);
    setEditIndex(index);
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="casting-container">

      <div className="date-fields">
            <TextField
              id="from-date"
              label="From Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              id="to-date"
              label="To Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              sx={{ marginLeft: "1rem" }}
            />

<Button  onClick={() => setShowPopup(true)} sx={{ m: 2, marginLeft:115, backgroundColor:'#5f4917', color:'white' }}>
          Add Casting Items
</Button>
          </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <div className="popup-header" >
                Casting / Melting
                <button onClick={() => { setShowPopup(false); resetForm(); }} style={{ float: "right" }}>X</button>
              </div>

              <div className="popup-content">
                {/* Column 1 */}
                <div className="popup-column">
                  <label>Date</label>
                  <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              
                 <label style={{marginTop:'0.5rem'}}>Name</label>
<select 
  style={{ height: "2rem" }}

value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}>
  <option value="">Select Name</option>
  {castingNames.map((name, index) => (
    <option key={index} value={name}>
      {name}
    </option>
  ))}
</select>     <br/>          
                  <label>Given Gold</label>
                  <input type="number" value={form.givenGold} onChange={(e) => setForm({ ...form, givenGold: e.target.value })} />
                  <label>Given Touch</label>
                  <input type="number" value={form.givenTouch} onChange={(e) => setForm({ ...form, givenTouch: e.target.value })} />
                  <p>Purity: <strong>{purity.toFixed(3)}</strong></p>
                </div>

                {/* Column 2 */}
                <div className="popup-column">
                  <label>Final Touch </label>
                  <input type="number" value={form.finalTouch} onChange={(e) => setForm({ ...form, finalTouch: e.target.value })} />
                  <p>Pure Value: <strong>{pureValue.toFixed(3)}</strong></p>
                  <p>Copper: <strong>{copper.toFixed(3)}</strong></p>
                  <p>Final Weight: <strong>{finalWeight.toFixed(3)}</strong></p>
                  
                </div>

                {/* Column 3 */}
                <div className="popup-column">
                  <Button onClick={addItem} sx={{ mt: 0 ,mb:1, backgroundColor:'#5f4917', color:'white', width:'fit-content' }}>
          Add Items
        </Button>

                  <div className="scroll-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Weight</th>
                          <th>Touch</th>
                          <th>Purity</th>
                          <th>Remarks</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={index}>
                            <td><input value={item.name} onChange={(e) => handleItemChange(items, setItems, index, "name", e.target.value)} /></td>
                            <td><input value={item.weight} type="number" onChange={(e) => handleItemChange(items, setItems, index, "weight", e.target.value)} /></td>
                            <td><input value={item.touch} type="number" onChange={(e) => handleItemChange(items, setItems, index, "touch", e.target.value)} /></td>
                            <td>{((parseFloat(item.weight || 0) * parseFloat(item.touch || 0)) / 100).toFixed(3)}</td>
                            <td>
  <input
    value={item.remarks}
    onChange={(e) => handleItemChange(items, setItems, index, "remarks", e.target.value)}
  />
</td>

                            <td>
                              <Button color="error" onClick={() => {
                                const updated = [...items];
                                updated.splice(index, 1);
                                setItems(updated);
                              }}>
                                <Delete />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>After Weight: <strong>{afterWeight.toFixed(3)}</strong></p>
              
                  <Button onClick={addScrapItem} sx={{ mt: 2 ,mb:1, backgroundColor:'#5f4917', color:'white', width:'fit-content' }}>
          Add Scrap Items
        </Button>

                  <div className="scroll-table">
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Weight</th>
        <th>Touch</th>
        <th>Purity</th>
        <th> Remarks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {scrapItems.map((item, index) => (
        <tr key={index}>
          <td><input value={item.name} onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "name", e.target.value)} /></td>
          <td><input value={item.weight} type="number" onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "weight", e.target.value)} /></td>
          <td><input value={item.touch} type="number" onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "touch", e.target.value)} /></td>
          <td>{((parseFloat(item.weight || 0) * parseFloat(item.touch || 0)) / 100).toFixed(3)}</td>
          <td>
  <input
    value={item.remarks}
    onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "remarks", e.target.value)}
  />
</td>

          <td>
            <Button color="error" onClick={() => {
              const updated = [...scrapItems];
              updated.splice(index, 1);
              setScrapItems(updated);
            }}>
              <Delete />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<p>Total Scrap Weight: <strong>{totalScrapWeight.toFixed(3)}</strong></p>
<p>Total Wastage: <strong>{totalWastage.toFixed(3)}</strong></p>


                  <button className="save-btn" onClick={handleSave}>
                    {editIndex !== null ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
  {/* Left Table */}
  <div style={{ flex: 1 }}>
    <h3 style={{ textAlign: 'center', color: '#d40b4e', fontSize: '1.3rem', fontWeight: 'bold' }}>
      Casting / Melting
    </h3>

    <TableContainer component={Paper} sx={{ mt: 2, width: "95%", mx: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Before Weight</TableCell>
            <TableCell>After Weight</TableCell>
            <TableCell>Items Qty</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedCastings.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.beforeWeight}</TableCell>
              <TableCell>{entry.afterWeight}</TableCell>
              <TableCell>{(entry.items?.length || 0) + (entry.scrapItems?.length || 0)}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(index)} variant="contained" size="small">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>

  {/* Right Table */}
  <div style={{ width: '30rem', marginLeft: '1rem' }}>
    <h3 style={{ textAlign: 'center', color: '#d40b4e', fontSize: '1.3rem', fontWeight: 'bold' }}>Casting Items</h3>
    <TableContainer component={Paper} style={{ marginTop: "1rem", width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem' }}>S.No</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Item Name</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Weight</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Touch</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Purity</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  </div>
</div>

</div>
     
    </>
  );
}
