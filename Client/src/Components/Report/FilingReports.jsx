import React, { useState, useEffect } from "react";
import { Button, TextField, Stack } from "@mui/material";
import axios from "axios";
import { BACKEND_SERVER_URL } from "../../../Config/config";
import Navbar from "../Navbar/Navbar";
import styles from "../LotProcess/FilingProcess/FilingLotDetails.module.css";

const FilingReports = () => {
  const [entries, setEntries] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [persons, setPersons] = useState([]);
  const [allEntries, setAllEntries] = useState([]);

  const fetchAllData = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_SERVER_URL}/api/filingentry/get-report-entries`
      );
      setEntries(response.data);
      setAllEntries(response.data);
      const uniquePersons = [
        ...new Set(
          response.data.map((e) => e.filing_person_name).filter(Boolean)
        ),
      ];
      setPersons(uniquePersons);
    } catch (err) {
      console.error("Error fetching filing entries", err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  console.log("Entries:", entries);

  const handleDateFilter = () => {
    let start = fromDate;
    let end = toDate;

    if (start && end && start > end) {
      [start, end] = [end, start];
    }

    const filtered = allEntries.filter((entry) => {
      if (!entry.createdAt) return false;

      const entryDate = new Date(entry.createdAt).toISOString().split("T")[0];

      const dateMatch =
        !start || !end || (entryDate >= start && entryDate <= end);

      const personMatch =
        !selectedPerson || entry.filing_person_name === selectedPerson;

      return dateMatch && personMatch;
    });

    setEntries(filtered);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setSelectedPerson("");
    setEntries(allEntries);
  };

  const calculateTotals = () => {
    const totals = {
      castingWeight: 0,
      productWeight: 0,
      scrapWeight: 0,
      wastage: 0,
      balance: 0,
    };

    entries.forEach((entry) => {
      totals.castingWeight += entry.casting_item_weight || 0;

      if (entry.filingTotalBalance && entry.filingTotalBalance.length > 0) {
        const balance = entry.filingTotalBalance[0];
        totals.productWeight += balance.total_product_weight || 0;
        totals.scrapWeight += balance.total_scrap_weight || 0;
        totals.wastage += balance.wastage || 0;
        totals.balance += balance.balance || 0;
      }
    });

    return totals;
  };

  const totals = calculateTotals();

  return (
    <>
      <Navbar />

      <h5 className={styles.heading}>Filing Report</h5>
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
        <TextField
          select
          label="Person"
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
          SelectProps={{ native: true }}
          InputLabelProps={{ shrink: true }}
          style={{ width: 180 }}
        >
          <option value="">All</option>
          {persons.map((person, idx) => (
            <option key={idx} value={person}>
              {person}
            </option>
          ))}
        </TextField>

        <Button variant="outlined" onClick={handleDateFilter}>
          Filter
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Stack>

      <div className={styles.summarySection}>
        <h4>Summary</h4>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <span>Total Casting Weight:</span>
            <span>{totals.castingWeight.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total Product Weight:</span>
            <span>{totals.productWeight.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total Scrap Weight:</span>
            <span>{totals.scrapWeight.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total Wastage:</span>
            <span>{totals.wastage.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total Balance:</span>
            <span>{totals.balance.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className={styles.itemList}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th rowSpan={2}>S.No</th>
              <th rowSpan={2}>Date</th>
              <th rowSpan={2}>Time</th>
              <th rowSpan={2}>Person</th>
              <th rowSpan={2}>Lot Number</th>
              <th rowSpan={2}>Casting Item</th>
              <th rowSpan={2}>Casting Weight</th>
              <th colSpan={6}>Filing Items</th>
              <th rowSpan={2}>Product Weight</th>
              <th rowSpan={2}>Scrap Weight</th>
              <th rowSpan={2}>Wastage</th>
              <th rowSpan={2}>Balance</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Purity</th>
              <th>Touch</th>
              <th>Type</th>
              <th>Has Stone</th>
              <th>Next Process</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => {
              const balanceData = entry.filingTotalBalance?.[0] || {};
              const lotInfo = entry.lotFilingMapper?.[0] || {};
              const filingItems = entry.filingItems || [];

              return (
                <>
                  {filingItems.length > 0 ? (
                    filingItems.map((item, itemIndex) => (
                      <tr key={`${entry.id}-${itemIndex}`}>
                        {itemIndex === 0 && (
                          <>
                            <td rowSpan={filingItems.length}>{index + 1}</td>
                            <td rowSpan={filingItems.length}>
                              {entry.createdAt
                                ? new Date(entry.createdAt).toLocaleDateString()
                                : "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {entry.createdAt
                                ? new Date(entry.createdAt).toLocaleTimeString()
                                : "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {entry.filing_person_name || "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {lotInfo.lot_number || "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {entry.item_name || "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {entry.casting_item_weight
                                ? entry.casting_item_weight.toFixed(2)
                                : "-"}
                            </td>
                          </>
                        )}
                        <td>{item?.filingitem?.name || "-"}</td>
                        <td>{item?.item_purity || "-"}</td>
                        <td>{item?.touch.touch || "-"}</td>
                        <td>{item?.type || "-"}</td>
                        <td>
                          {item?.stone_option === "WithStone" ? "Yes" : "No"}
                        </td>
                        <td>
                          {item?.stone_option === "WithStone"
                            ? "Setting"
                            : "Buffing"}
                        </td>

                        {itemIndex === 0 && (
                          <>
                            <td rowSpan={filingItems.length}>
                              {balanceData.total_product_weight
                                ? balanceData.total_product_weight.toFixed(2)
                                : "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {balanceData.total_scrap_weight
                                ? balanceData.total_scrap_weight.toFixed(2)
                                : "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {entry?.filingTotalBalance?.[0]?.wastage != null
                                ? entry.filingTotalBalance[0].wastage === true
                                  ? "Yes"
                                  : "No"
                                : "-"}
                            </td>
                            <td rowSpan={filingItems.length}>
                              {balanceData.balance
                                ? balanceData.balance.toFixed(2)
                                : "-"}
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr key={entry.id}>
                      <td>{index + 1}</td>
                      <td>
                        {entry.createdAt
                          ? new Date(entry.createdAt).toLocaleDateString()
                          : "-"}
                      </td>
                      <td>
                        {entry.createdAt
                          ? new Date(entry.createdAt).toLocaleTimeString()
                          : "-"}
                      </td>
                      <td>{entry.filing_person_name || "-"}</td>
                      <td>{lotInfo.lot_number || "-"}</td>
                      <td>{entry.item_name || "-"}</td>
                      <td>
                        {entry.casting_item_weight
                          ? entry.casting_item_weight.toFixed(2)
                          : "-"}
                      </td>
                      <td colSpan={6}>-</td>
                      <td>
                        {balanceData.total_product_weight
                          ? balanceData.total_product_weight.toFixed(2)
                          : "-"}
                      </td>
                      <td>
                        {balanceData.total_scrap_weight
                          ? balanceData.total_scrap_weight.toFixed(2)
                          : "-"}
                      </td>
                      <td>
                        {entry?.filingTotalBalance?.[0]?.wastage != null
                          ? entry.filingTotalBalance[0].wastage === true
                            ? "Yes"
                            : "No"
                          : "-"}
                      </td>
                      <td>
                        {balanceData.balance
                          ? balanceData.balance.toFixed(2)
                          : "-"}
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FilingReports;
