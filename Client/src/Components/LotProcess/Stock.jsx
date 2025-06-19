import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_SERVER_URL } from "../../../Config/config";
import Navbar from "../Navbar/Navbar";

const Stock = () => {
  const [scrapItems, setScrapItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const fetchScrapItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_SERVER_URL}/api/castingitems`);
        const allItems = response.data;
        const scrapOnly = allItems.filter(item => item.type === "ScrapItems");
        setScrapItems(scrapOnly);
        setFilteredItems(scrapOnly);
      } catch (error) {
        console.error("Error fetching scrap items:", error);
      }
    };

    fetchScrapItems();
  }, []);

  useEffect(() => {
    let filtered = scrapItems;

    // Filter by customer name (partial match, case-insensitive)
    if (customerName.trim()) {
      filtered = filtered.filter(item =>
        item.casting_customer?.name?.toLowerCase().includes(customerName.toLowerCase())
      );
    }

    // Filter by date range
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.castingEntry?.date);
        return itemDate >= from && itemDate <= to;
      });
    }

    setFilteredItems(filtered);
  }, [fromDate, toDate, customerName, scrapItems]);

  return (
    <>
    <Navbar/>
      <div style={{ margin: "2rem" }}>
        <h3 style={{ color: "#5f4917", textAlign: "center" }}>Scrap Items (Stock)</h3>
        <br/>

        {/* Filters */}
        <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
          <label>
            From: <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} />
          </label>
          <label>
            To: <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} />
          </label>
          <label>
            Customer Name:{" "}
            <input
              type="text"
              placeholder="Search by customer"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
            />
          </label>
        </div>

        {filteredItems.length > 0 ? (
          <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#f0f0f0" }}>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Item</th>
                <th>Weight</th>
                <th>Touch</th>
                <th>Purity</th>
                <th>Scrap Weight</th>
                <th>Scrap Wastage</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    {item.castingEntry?.date
                      ? new Date(item.castingEntry.date).toLocaleDateString()
                      : "-"}
                  </td>
                  <td>{item.casting_customer?.name || "-"}</td>
                  <td>{item.item?.name}</td>
                  <td>{item.weight}</td>
                  <td>{item.touch}</td>
                  <td>{item.item_purity}</td>
                  <td>{item.scrap_weight}</td>
                  <td>{item.scrap_wastage?.toFixed(2)}</td>
                  <td>{item.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>No Customer Name found.</p>
        )}
      </div>
    </>
  );
};

export default Stock;
