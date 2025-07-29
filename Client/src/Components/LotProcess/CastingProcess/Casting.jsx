import React, { useState, useEffect } from "react";
import styles from "./Casting.module.css";
import Navbar from "../../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACKEND_SERVER_URL } from "../../../../Config/config";
import axios from "axios";
import CastingItemForm from "./CastingItemForm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function Casting() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    name: "",
    givenGold: "",
    givenTouchId: "",
    givenTouchValue: "",
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
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [touchOptions, setTouchOptions] = useState([]);
 
 
  const triggerRefresh = () => {
    setRefreshFlag((prev) => !prev);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          castingNamesRes,
          castingEntriesRes,
          availableItemsRes,
          touchOptionsRes,
        ] = await Promise.all([
          axios.get(`${BACKEND_SERVER_URL}/api/casting`),
          axios.get(`${BACKEND_SERVER_URL}/api/castingentry`),
          axios.get(`${BACKEND_SERVER_URL}/api/additem`),
          axios.get(`${BACKEND_SERVER_URL}/api/addtouch`),
        ]);
 
        // Set casting names
        console.log("Casting Names Response:", castingNamesRes.data);
        setCastingNames(castingNamesRes.data.map(c => c.name));
 
        // Casting entries
        const castingEntries = castingEntriesRes.data;
        console.log("Casting Entries Response:", castingEntries);
 
        // Available items and touch options
        setAvailableItems(availableItemsRes.data);
        console.log("Available Items:", availableItemsRes.data);
 
        setTouchOptions(touchOptionsRes.data);
        console.log("Touch Options:", touchOptionsRes.data);
 
        // Now fetch casting items separately (because it's related to casting entries)
        const castingItemsRes = await axios.get(`${BACKEND_SERVER_URL}/api/castingitems`);
        const allCastingItems = castingItemsRes.data;
        console.log("All Casting Items:", allCastingItems);
 
        // Enrich casting entries with afterWeight
        const enrichedEntries = castingEntries.map(entry => {
          const entryItems = allCastingItems.filter(item => item.castingEntryId === entry.id);
          const afterWeightItem = entryItems.find(item => item.after_weight > 0);
 
          console.log(`Entry ID: ${entry.id}, After Weight Found:`, afterWeightItem?.after_weight);
 
          return {
            ...entry,
            afterWeight: afterWeightItem ? afterWeightItem.after_weight : 0,
          };
        });
 
        console.log("Final Enriched Entries:", enrichedEntries);
 
        setSavedCastings(enrichedEntries);
        setFilteredCastings(enrichedEntries);
 
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
 
  const purity = (parseFloat(form.givenGold || 0) * parseFloat(form.givenTouchValue || 0)) / 100;
  const pureValue = parseFloat(form.finalTouch || 0) / 100;
  const finalWeight = pureValue ? purity / pureValue : 0;
  const copper = parseFloat(form.givenGold || 0) - finalWeight;
  const afterWeight = items.reduce((sum, item) => sum + parseFloat(item.weight || 0), 0);
  const totalItemWeight = finalWeight - afterWeight;
  const totalScrapWeight = scrapItems.reduce((sum, item) => sum + parseFloat(item.weight || 0),0 );
  const totalWastage = totalItemWeight - totalScrapWeight;
 
  const handleDelete = async (id) => {
    console.log('Delete casting id:', id)
    const confirm = window.confirm("Are you sure you want to delete this casting entry?");
    if (!confirm) return;
 
    try {
     const response = await axios.delete(`${BACKEND_SERVER_URL}/api/castingentry/${id}`);
     console.log("Delete response from backend:", response);
      toast.success("Casting entry deleted successfully");
      const updatedList = savedCastings.filter(entry => entry.id !== id);
      setSavedCastings(updatedList);
      setFilteredCastings(updatedList);
      console.log("Updated casting list:", updatedList);
    } catch (err) {
      console.error("Error deleting casting entry:", err);
      toast.error("Failed to delete casting entry");
    }
  };
 
  const handleSave = async () => {
    try {
      const payload = {
        date: form.date,
        given_gold: form.givenGold,
        touch_id: parseInt(form.givenTouchId),
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
        console.log('Edit casting entry',response)
        toast.success("Casting entry updated!");
        newCastingId = idToUpdate;
 
        const updatedEntry = {
          ...savedCastings[editIndex],
          ...payload,
          id: idToUpdate,
          createdAt: new Date().toISOString(),
          items: items,
          scrapItems: scrapItems,
          beforeWeight: finalWeight.toFixed(2),
          afterWeight: afterWeight.toFixed(2),
        };
       
        const updatedList = [...savedCastings];
        updatedList[editIndex] = updatedEntry;
        setSavedCastings(updatedList);
        setFilteredCastings(updatedList);
        console.log(updatedList)
      } else {
        const response = await axios.post(`${BACKEND_SERVER_URL}/api/castingentry`, payload);
        newCastingId = response.data?.data?.id;
        toast.success("Casting entry saved!");
 
        const newEntry = {
          ...payload,
          id: newCastingId,
          createdAt: new Date().toISOString(),
          items: items, // add this
          scrapItems: scrapItems, // add this
          beforeWeight: finalWeight.toFixed(2),
          afterWeight: afterWeight.toFixed(2),
        };
       
        const updatedList = [...savedCastings, newEntry];
        setSavedCastings(updatedList);
        setFilteredCastings(updatedList);
      }
      console.log(setSavedCastings)
      console.log(setFilteredCastings)
 
      setCastingEntryId(newCastingId);
 
      if (editIndex === null) {
        resetForm();
        setShowPopup(false);
      } 
    } catch (error) {
      console.error("Error saving/updating casting entry:", error);
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
    setCastingEntryId(null);
  };
 
  const handleEdit = async (index) => {
    const data = filteredCastings[index];
    const matchedTouch = touchOptions.find(t => t.id === data.touch_id);
    const updatedForm = {
      date: data.date ? new Date(data.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
      name: castingNames[data.casting_customer_id - 1] || "",
      givenGold: data.given_gold,
      finalTouch: data.final_touch,
      givenTouchId: data.touch_id,
      givenTouchValue: matchedTouch?.touch || "", 
    };
    setForm(updatedForm);
    setTimeout(() => {
      setEditIndex(index);
      setCastingEntryId(data.id);
      setShowPopup(true);
    }, 0);
 
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
      <Link to='/castingentry'> 
      <button> castingentry</button> </Link>
      <ToastContainer />
      <div className={styles.castingContainer}>
        <div  className={styles.dateFields}>
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
            style={{
              backgroundColor: "#F5F5F5",
              color: "black",
              borderColor: "#25274D",
              borderStyle: "solid",
              borderWidth: "2px",
              marginLeft: "1.2rem",
            }}
 
          >
            Reset
          </Button>
             <Button
      onClick={() => {
        resetForm();
        setShowPopup(true);
      }}
      className={styles.buttonAdd}
    >
      Add Casting Items
    </Button>
        </div>
 
        {showPopup && (
          <div className={styles.castingPopupOverlay}>
            <div className={styles.castingPopup}>
              <div className={styles.castingPopupHeader}>
                Casting / Melting
                <button onClick={() => {
                  setShowPopup(false);
                  resetForm();
                }}      className={styles.closeBtn} >X</button>
              </div>
              <hr />
              <br />
              <div className={styles.formGrid}>
  {/* Row 1: Date, Name, Given Gold, Given Touch */}
  <div className={styles.formRow}>
    <div className={styles.formField}>
      <label>Date</label>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
    </div>
 
    <div className={styles.formField}>
      <label>Name</label>
      <select
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      >
        <option value="">Select Name</option>
        {castingNames.map((name, index) => (
          <option key={index} value={name}>{name}</option>
        ))}
      </select>
    </div>
 
    <div className={styles.formField}>
      <label>Given Gold</label>
      <input
        type="number"
        value={form.givenGold}
        onChange={(e) => setForm({ ...form, givenGold: e.target.value })}
      />
    </div>
 
    <div className={styles.formField}>
      <label>Given Touch</label>
      <select
        value={form.givenTouchId}
        onChange={(e) => {
          const selected = touchOptions.find(t => t.id === parseInt(e.target.value));
          setForm({
            ...form,
            givenTouchId: selected?.id || "",
            givenTouchValue: selected?.touch || "",
          });
        }}
      >
        <option value="">Select Touch</option>
        {touchOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.touch}
          </option>
        ))}
      </select>
    </div>
  </div>
 
  {/* Row 2: Purity, Final Touch, Copper, Before Weight */}
  <div className={styles.formRow}>
    <div className={styles.formField}>
      <label>Purity</label>
      <input type="text" value={purity.toFixed(3)} readOnly />
    </div>
 
    <div className={styles.formField}>
      <label>Final Touch</label>
      <input
        type="number"
        value={form.finalTouch}
        onChange={(e) => setForm({ ...form, finalTouch: e.target.value })}
      />
    </div>
 
    <div className={styles.formField}>
      <label>Copper</label>
      <input type="text" value={copper.toFixed(3)} readOnly />
    </div>
 
    <div className={styles.formField}>
      <label>Before Weight</label>
      <input type="text" value={finalWeight.toFixed(3)} readOnly />
    </div>
  </div>
 
  <div className={styles.formActions}>
    <button className={styles.saveBtn} onClick={handleSave}>
      {editIndex !== null ? "Update" : "Save"}
    </button>
  </div>
</div>
             <hr />
              <CastingItemForm
  castingEntryId={castingEntryId}
  items={items}
  setItems={setItems}
  scrapItems={scrapItems}
  setScrapItems={setScrapItems}
  afterWeight={afterWeight}
  totalScrapWeight={totalScrapWeight}
  totalWastage={totalWastage}
  totalItemWeight= {totalItemWeight}
  onStockUpdate={triggerRefresh}
/>
 <div style={{marginTop:'20rem'}}> </div>
 
            </div>
          </div>
        )}
        <div>
          <div >
          <div className={styles.titleText}>Casting / Melting</div>
            <div className={styles.tableHeaderStyle}>
            <table  className={styles.tableContainer}>
              <thead >
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Items Qty</th>
                  <th>Scrap Name</th>
                  <th>Scrap Items Qty</th>
                  <th>Before Weight</th>
                  <th>After Weight</th>                
                  <th>Action</th>
                 
               </tr>
              </thead>
              <tbody>
  {filteredCastings.length > 0 ? (
    filteredCastings.map((entry, index) => {
      const addItems = (entry.items || []).filter(i => i.type === "Items");
      const scrapItems = (entry.items || []).filter(i => i.type === "ScrapItems");
 
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{entry.date ? new Date(entry.date).toLocaleDateString() : "-"}</td>
          <td>
  {entry.createdAt
    ? new Date(entry.createdAt).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
    
        hour12: true,
      })
    : "-"}
</td>

          <td>{castingNames[entry.casting_customer_id - 1] || "-"}</td>
 
          <td>
            {addItems.map(item => {
              const found = availableItems.find(i => i.id === item.item_id);
              return found?.name || "Unknown";
            }).join(", ") || "-"}
          </td>

          <td>{addItems.length}</td>

          <td>
            {scrapItems.map(item => {
              const found = availableItems.find(i => i.id === item.item_id);
              return found?.name || "Unknown";
            }).join(", ") || "-"}
          </td>
 
          <td>{scrapItems.length}</td>
          <td>{entry.beforeWeight || entry.final_weight}</td>
 
    
          <td>
            {addItems.reduce((sum, item) => sum + (item.after_weight || 0), 0).toFixed(3)}
          </td>
          <td className={styles.actionButtons}>
    <EditIcon onClick={() => handleEdit(index)} className={styles.editButton}  />
    <DeleteIcon onClick={() => handleDelete(entry.id)} className={styles.deleteButton} />
</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="10" style={{ textAlign: "center", color: "gray" }}>
        No items found for selected date range.
      </td>
    </tr>
  )}
</tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};