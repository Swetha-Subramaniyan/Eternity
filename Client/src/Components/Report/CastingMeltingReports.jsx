import React, { useState, useEffect } from "react";
import { Button, TextField, Stack } from "@mui/material";
import axios from "axios";
import { BACKEND_SERVER_URL } from "../../../Config/config";
import Navbar from "../Navbar/Navbar";
import styles from "../LotProcess/CastingProcess//CastingEntry.module.css";

const CastingMeltingReports = () => {
  const [entries, setEntries] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [allEntries, setAllEntries] = useState([]);

  const fetchAllData = async () => {
    try {
      const [entryRes] = await Promise.all([
        axios.get(`${BACKEND_SERVER_URL}/api/castingentry`),
      ]);
      setEntries(entryRes.data);
      setAllEntries(entryRes.data);
    } catch (err) {
      console.error("Error fetching dropdown data", err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleDateFilter = () => {
    if (!fromDate || !toDate) return;

    const filtered = allEntries.filter((entry) => {
      const entryDate = new Date(entry.date).toISOString().split("T")[0];
      return entryDate >= fromDate && entryDate <= toDate;
    });

    setEntries(filtered);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setEntries(allEntries);
  };

  return (
    <>
      <Navbar />

      <h5 className={styles.heading}>Casting/Melting Report</h5>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        mb={2}
        ml={6}
        mt={1}
      >
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
        <Button variant="outlined" onClick={handleDateFilter}>
          Filter
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Stack>

      <div className={styles.itemList}>
        <table className={styles.customerTable}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Before Wt</th>
              <th>Product Item(s)</th>
              <th>Product Qty</th>
              <th>Scrap Item(s)</th>
              <th>Scrap Qty</th>
              <th style={{ width: "8rem" }}>Total Item Wt</th>
              <th>Balance Wt</th>
              <th>Scrap Wt</th>
              <th>Wastage</th>
              <th>Next Process</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>
                  {entry.date ? new Date(entry.date).toLocaleDateString() : "-"}
                </td>
                <td>
                  {entry.createdAt
                    ? new Date(entry.createdAt).toLocaleTimeString()
                    : "-"}
                </td>
                <td>{entry.customer?.name || "-"}</td>
                <td>{entry.final_weight ?? "-"}</td>
                <td>
                  {Array.isArray(entry.productItems)
                    ? entry.productItems.join(", ")
                    : "-"}
                </td>
                <td>{entry.productQty || "-"}</td>
                <td>
                  {Array.isArray(entry.scrapItems)
                    ? entry.scrapItems.join(", ")
                    : "-"}
                </td>
                <td>{entry.scrapQty || "-"}</td>
                <td>
                  {entry.totalItemWeight
                    ? entry.totalItemWeight.toFixed(2)
                    : "-"}
                </td>
                <td>
                  {entry.currentBalanceWeight
                    ? entry.currentBalanceWeight.toFixed(2)
                    : "-"}
                </td>
                <td>
                  {entry.totalScrapWeight
                    ? entry.totalScrapWeight.toFixed(2)
                    : "-"}
                </td>
                <td>
                  {entry.totalWastage ? entry.totalWastage.toFixed(2) : "-"}
                </td>
                <td>Filing</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CastingMeltingReports;
