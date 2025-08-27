import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./BuffingLotDetails.module.css";
import { useParams } from 'react-router-dom';
import axios from "axios";
 
const BuffingLotDetails = () => {
  const [open, setOpen] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [selectedItems, setSelectedItems] = useState([]);
  const [mainTableData, setMainTableData] = useState([]);
  const [popupData, setPopupData] = useState([]);
  const [viewEntry, setViewEntry] = useState(null);
  const { id, name, lotNumber } = useParams();
 
  console.log('Buffing Datas:',`person_id: ${id},`,`name: ${name},`,`lot_number: ${lotNumber}`)
 
const handleAssign = async () => {
  if (selectedItems.length === 0) {
    alert("Please select at least one row.");
    return;
  }
 
  try {
    // Prepare payload for backend
    const payload = {
      buffing_person_id: parseInt(id),      
      lot_number: parseInt(lotNumber),            
      items: selectedItems.map((item) => ({
        filing_item_id: item.id,  
      })),
    };
 
    console.log("Posting Buffing Entry:", payload);
 
    const res = await axios.post("http://localhost:5000/api/buffingentry", payload);
    const newEntry = {
      date,
      items: selectedItems,
    };
 
    setMainTableData((prev) => [...prev, newEntry]);
    setOpen(false);
    setSelectedItems([]);
 
    alert("Buffing Entry created successfully!");
  } catch (error) {
    console.error("Error assigning buffing entry:", error);
 
    if (error.response) {
      alert(error.response.data.error || "Failed to create Buffing Entry");
    } else {
      alert("Something went wrong while assigning buffing entry.");
    }
  }
};
 
 
useEffect(() => {
  const fetchBuffingEntries = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/buffingentry/person/${id}`);
 
 
      const formatted = res.data.map((entry) => ({
        date: new Date(entry.createdAt).toISOString().split("T")[0],
        items: entry.lotBuffingMapper.length > 0
          ? entry.lotBuffingMapper.map((mapper) => ({
              id: mapper.filing_item_id || mapper.setting_item_id,
              item: mapper.filing_item_name || mapper.setting_item_name,
              weight: mapper.filing_item_weight || entry.casting_item_weight,
              touch: mapper.filing_item_touch || entry.touch,
              purity: mapper.filing_item_purity || entry.casting_item_purity,
              remarks: mapper.filing_item_remarks || entry.casting_item_remarks,
              stoneCount: "-",
              stoneWeight: "-"
            }))
          : [
              {
                id: entry.casting_item_id,
                item: entry.item_name,
                weight: entry.casting_item_weight,
                touch: entry.touch,
                purity: entry.casting_item_purity,
                remarks: entry.casting_item_remarks,
                stoneCount: "-",
                stoneWeight: "-"
              }
            ]
      }));
     
      setMainTableData(formatted);
    } catch (error) {
      console.error("Error fetching buffing entries:", error);
    }
  };
 
  fetchBuffingEntries();
}, [id]);
 
 
  const handleView = (entry) => {
    setViewEntry(entry);
    setOpen(true);        
  };
 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/filingitems");
        const data = await res.json();
 
        // filter only WithoutStone
        const filtered = data.filter(
          (item) => item.stone_option === "WithoutStone"
        );
        console.log('Filtered items from Filing Process', filtered)
 
        const transformed = filtered.map((item) => ({
          id: item.id,
          item: item.filingitem?.name,
          weight: item.weight,
          touch: item.touch?.touch || "-",
          purity: item.item_purity,
          remarks: item.remarks,
          stoneCount: item.stoneCount || "-",
          stoneWeight: item.stoneWeight || "-",
        }));
 
        setPopupData(transformed);
 
      } catch (error) {
        console.error("Error fetching filing items:", error);
      }
    };
 
    fetchItems();
  }, []);
 
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedItems([]);
  };
 
  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    );
  };
  return (
    <>
      <Navbar />
      <button onClick={handleClickOpen}>Add</button>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Item</th>
            <th>Weight</th>
            <th>Touch</th>
            <th>Purity</th>
            <th>Remarks</th>
            <th>Stone Count</th>
            <th>Stone Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mainTableData.length > 0 ? (
            mainTableData.map((entry, index) =>
              entry.items.map((item, i) => (
                <tr key={item.id}>
                  {i === 0 && (
                    <>
                      <td rowSpan={entry.items.length}>{index + 1}</td>
                      <td rowSpan={entry.items.length}>{entry.date}</td>
                    </>
                  )}
 
                  <td>{item.item}</td>
                  <td>{item.weight}</td>
                  <td>{item.touch}</td>
                  <td>{item.purity}</td>
                  <td>{item.remarks}</td>
                  <td>{item.stoneCount || "-"}</td>
                  <td>{item.stoneWeight || "-"}</td>
 
                  {i === 0 && (
                    <td rowSpan={entry.items.length}>
                      <button onClick={() => handleView(entry)}>View</button>
                    </td>
                  )}
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="10" align="center">
                No records yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
 
{open && (
  <div className={styles.overlay}>
    <div className={styles.assign}>
      <h5>{viewEntry ? "View Buffing Lot" : "Assign Buffing Lot"}</h5>
 
      {!viewEntry && (
        <>
          <label>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </>
      )}
 
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            {!viewEntry &&
            <th>Select</th>}
            <th>Item</th>
            <th>Weight</th>
            <th>Touch</th>
            <th>Purity</th>
            <th>Remarks</th>
            <th>Stone Count</th>
            <th>Stone Weight</th>
          </tr>
        </thead>
        <tbody>
          {(viewEntry ? viewEntry.items : popupData).map((item) => (
            <tr key={item.id}>
              {!viewEntry && (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.some((i) => i.id === item.id)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </td>
              )}
              <td>{item.item}</td>
              <td>{item.weight}</td>
              <td>{item.touch}</td>
              <td>{item.purity}</td>
              <td>{item.remarks}</td>
              <td>{item.stoneCount}</td>
              <td>{item.stoneWeight}</td>
            </tr>
          ))}
        </tbody>
      </table>
 
      <div className={styles.buttonRow}>
        <button
          onClick={() => {
            setOpen(false);
            setSelectedItems([]);
            setViewEntry(null);
          }}
        >
          Close
        </button>
        {!viewEntry && <button onClick={handleAssign}>Assign</button>}
      </div>
    </div>
  </div>
)}
 
    </>
  );
};
 
export default BuffingLotDetails;