import React, { useState, useEffect } from "react";
import "./Casting.css";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACKEND_SERVER_URL } from "../../../Config/config";
import axios from "axios";
import CastingItemForm from "./CastingItemForm";

export default function Casting() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    name: "",
    givenGold: "",
    givenTouch: "",
    copperTouch: "",
    finalTouch: "",
  });

  const [savedCastings, setSavedCastings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [castingNames, setCastingNames] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredCastings, setFilteredCastings] = useState([]);
  const [items, setItems] = useState([]);
  const [scrapItems, setScrapItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [castingEntryId, setCastingEntryId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/additem");
        setAvailableItems(res.data);
      } catch (err) {
        console.error("Failed to fetch available items:", err);
      }
    };
    fetchItems();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [castingNamesRes, castingEntriesRes] = await Promise.all([
          axios.get(`${BACKEND_SERVER_URL}/api/casting`),
          axios.get(`${BACKEND_SERVER_URL}/api/castingentry`)
        ]);
        setCastingNames(castingNamesRes.data.map(c => c.name));
        setSavedCastings(castingEntriesRes.data);
        setFilteredCastings(castingEntriesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const filtered = savedCastings.filter(entry => {
        const entryDate = new Date(entry.date);
        return entryDate >= from && entryDate <= to;
      });
      setFilteredCastings(filtered);
    } else if (fromDate || toDate) {
      toast.warning("Please select both From Date and To Date to filter.");
      setFilteredCastings([]);
    } else {
      setFilteredCastings(savedCastings);
    }
  }, [fromDate, toDate, savedCastings]);

  const purity = (parseFloat(form.givenGold || 0) * parseFloat(form.givenTouch || 0)) / 100;
  const pureValue = parseFloat(form.finalTouch || 0) / 100;
  const finalWeight = pureValue ? purity / pureValue : 0;
  const copper = parseFloat(form.givenGold || 0) - finalWeight;
  const afterWeight = items.reduce((sum, item) => sum + parseFloat(item.weight || 0), 0);
  const totalScrapWeight = scrapItems.reduce((sum, item) => sum + parseFloat(item.weight || 0),0 );
  const wastage = finalWeight - afterWeight;
  const totalWastage = wastage - totalScrapWeight;

  
  const handleSave = async () => {
    try {
      const payload = {
        date: form.date,
        given_gold: form.givenGold,
        given_touch: form.givenTouch,
        purity: purity.toFixed(2),
        final_touch: form.finalTouch,
        pure_value: pureValue.toFixed(2),
        copper: copper.toFixed(2),
        final_weight: finalWeight.toFixed(2),
        casting_customer_id: castingNames.indexOf(form.name) + 1,
      };
  
      let newCastingId = null;
  
      if (editIndex !== null) {
        const idToUpdate = savedCastings[editIndex]?.id;
        const response = await axios.put(`${BACKEND_SERVER_URL}/api/castingentry/${idToUpdate}`, payload);
        toast.success("Casting entry updated!");
        newCastingId = idToUpdate;
  
        // ✅ UPDATE THE ENTRY LOCALLY (no need to refetch full list)
        const updatedEntry = { ...savedCastings[editIndex], ...payload, id: idToUpdate };
        const updatedList = [...savedCastings];
        updatedList[editIndex] = updatedEntry;
        setSavedCastings(updatedList);
        setFilteredCastings(updatedList);
      } else {
        const response = await axios.post(`${BACKEND_SERVER_URL}/api/castingentry`, payload);
        newCastingId = response.data?.data?.id;
        toast.success("Casting entry saved!");
  
        // ✅ ADD NEW ENTRY TO LIST
        const newEntry = { ...payload, id: newCastingId };
        const updatedList = [...savedCastings, newEntry];
        setSavedCastings(updatedList);
        setFilteredCastings(updatedList);
      }
  
      setCastingEntryId(newCastingId);
  
      await saveCastingItems(newCastingId);
  
      if (editIndex === null) {
        resetForm();
        setShowPopup(false);
      } else {
        toast.info("Updated! You can now edit items or close the form.");
      }
  
    } catch (error) {
      console.error("Error saving/updating casting entry:", error);
      // toast.error("Failed to save casting entry.");
    }
  };
  

  const resetForm = () => {
    setForm({
      date: new Date().toISOString().split("T")[0],
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

  const handleEdit = async (index) => {
    const data = filteredCastings[index];
  
    setForm({
      date: data.date ? new Date(data.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
      name: castingNames[data.casting_customer_id - 1] || "",
      givenGold: data.given_gold,
      givenTouch: data.given_touch,
      finalTouch: data.final_touch,
    });
  
    setEditIndex(index);
    setCastingEntryId(data.id);
    setShowPopup(true);
  
    try {
      const response = await axios.get(`${BACKEND_SERVER_URL}/api/castingitems`, {
        params: { casting_entry_id: data.id },
      });
  
      const fetchedItems = response.data;
  
      const itemList = fetchedItems.filter(item => item.type === "Items");
      const scrapList = fetchedItems.filter(item => item.type === "ScrapItems");
  
      setItems(itemList);
      setScrapItems(scrapList);
    } catch (error) {
      console.error("Failed to fetch items during edit:", error);
      toast.error("Failed to load casting items.");
    }
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
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <TextField
            id="to-date"
            label="To Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            sx={{ marginLeft: "1rem" }}
          />
          <Button
            onClick={() => {
              resetForm();
              setShowPopup(true);
            }}
            sx={{
              m: 2,
              marginLeft: 115,
              backgroundColor: "#5f4917",
              color: "white",
            }}
          >
            Add Casting Items
          </Button>
        </div>

        {showPopup && (
          <div className="casting-popup-overlay">
            <div className="casting-popup">
              <div className="casting-popup-header">
                Casting / Melting
                <button onClick={() => {
                  setShowPopup(false);
                  resetForm();
                }} className="close-btnn">X</button>
              </div>
              <hr />
              <br />
              <div className="form-grid">
                <div className="form-row">
                  <div className="form-field">
                    <label>Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Name</label>
                    <select
                      style={{ height: "1.8rem" }}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    >
                      <option value="">Select Name</option>
                      {castingNames.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Given Gold</label>
                    <input
                      type="number"
                      value={form.givenGold}
                      onChange={(e) => setForm({ ...form, givenGold: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Given Touch</label>
                    <input
                      type="number"
                      value={form.givenTouch}
                      onChange={(e) => setForm({ ...form, givenTouch: e.target.value })}
                    />
                  </div>
                  <div className="form-field">
                    <label>Purity</label>
                    <input type="text" value={purity.toFixed(3)} readOnly />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Final Touch</label>
                    <input
                      type="number"
                      value={form.finalTouch}
                      onChange={(e) => setForm({ ...form, finalTouch: e.target.value })}
                    />
                  </div>
                  <div className="form-field" style={{ display: "none" }}>
                    <label>Pure Value</label>
                    <input type="text" value={pureValue.toFixed(3)} readOnly />
                  </div>
                  <div className="form-field">
                    <label>Copper</label>
                    <input type="text" value={copper.toFixed(3)} readOnly />
                  </div>
                  <div className="form-field">
                    <label>Final Weight</label>
                    <input type="text" value={finalWeight.toFixed(3)} readOnly />
                  </div>
                  <div className="form-field">
                  <button className="save-btn" onClick={handleSave}>
                {editIndex !== null ? "Update" : "Save"}
              </button>
              </div>
                </div>
              </div>
              <hr />
             <CastingItemForm castingEntryId={castingEntryId}/>
                
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ textAlign: "center", color: "#d40b4e", fontSize: "1.3rem", fontWeight: "bold" }}>
              Casting / Melting
            </h3>
            <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "95%", margin: "1rem auto", borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "#f0f0f0" }}>
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Before Weight</th>
                  <th>After Weight</th>
                  <th>Items Qty</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredCastings.length > 0 ? (
                  filteredCastings.map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.date ? new Date(entry.date).toLocaleDateString() : "-"}</td>
                      <td>{castingNames[entry.casting_customer_id - 1] || "-"}</td>
                      <td>{entry.items?.map(item => item.name).join(", ") || "-"}</td>
                      <td>{entry.beforeWeight || entry.final_weight}</td>
                      <td>{entry.afterWeight || "-"}</td>
                      <td>{(entry.items?.length || 0) + (entry.scrapItems?.length || 0)}</td>
                      <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center", color: "gray" }}>
                      No items found for selected date range.
                    </td>
                  </tr>
                )}
              </tbody>
           
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
