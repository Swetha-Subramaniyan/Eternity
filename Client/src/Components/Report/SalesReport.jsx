import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import {
  TextField,
  Button,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import styles from "./SalesReport.module.css";
import { BACKEND_SERVER_URL } from "../../../Config/config";

const SalesReport = () => {
  const [invoices, setInvoices] = useState([]);
  const [allInvoices, setAllInvoices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [customerId, setCustomerId] = useState("all");
  const [viewInvoice, setViewInvoice] = useState(null);

  // Fetch all bills (with customer info)
useEffect(() => {
  const fetchBills = async () => {
    try {
      const res = await fetch(`${BACKEND_SERVER_URL}/api/bills`);
      const data = await res.json();
      setInvoices(data);
      setAllInvoices(data);

      // Extract unique customers from bills
      const uniqueCustomers = [];
      const seen = new Set();
      data.forEach((inv) => {
        if (inv.customer && !seen.has(inv.customer.id)) {
          seen.add(inv.customer.id);
          uniqueCustomers.push(inv.customer);
        }
      });
      setCustomers(uniqueCustomers);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };
  fetchBills();
}, []);


  // Totals
  const totalWeight = invoices.reduce((sum, inv) => sum + (inv.gold_rate || 0), 0);
  const totalPurity = (
    invoices.reduce((sum, inv) => sum + (inv.total_pure || 0), 0) /
    (invoices.length || 1)
  ).toFixed(2);
  const totalAmount = invoices.reduce((sum, inv) => sum + (inv.total_amount || 0), 0);
  const totalAmountReceived = invoices.reduce(
    (sum, inv) => sum + (inv.amount_received || 0),
    0
  );
  const totalPureReceived = invoices.reduce(
    (sum, inv) => sum + (inv.pure_received || 0),
    0
  );
  const totalCashBalance = invoices.reduce(
    (sum, inv) => sum + (inv.cash_balance || 0),
    0
  );
  const totalPureBalance = invoices.reduce(
    (sum, inv) => sum + (inv.pure_balance || 0),
    0
  );


  const handleViewInvoice = (id) => {
    const invoice = invoices.find((inv) => inv.id === id);
    setViewInvoice(invoice);
  };

  // Apply filters
  
  const applyFilters = () => {
    let filtered = [...allInvoices];
  
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    if (to) to.setHours(23, 59, 59, 999); 
  
    // Date filter
    if (from || to) {
      filtered = filtered.filter((inv) => {
        const invDate = new Date(inv.updatedAt);
        if (from && to) return invDate >= from && invDate <= to;
        if (from) return invDate >= from;
        if (to) return invDate <= to;
        return true;
      });
    }
  
    // Customer filter
    if (customerId !== "all") {
      filtered = filtered.filter(
        (inv) => inv.customer?.id === Number(customerId) //  ensure number
      );
    }
  
    setInvoices(filtered);
  };
  
// Reset filters
const resetFilters = () => {
  setFromDate("");
  setToDate("");
  setCustomerId("all");
  setInvoices(allInvoices);
};

  

  return (
    <>
      <Navbar />
      <div className={styles.reportContainer}>
        <div className={styles.reportTitle}>Daily Sales Reports</div>

        <div className={styles.filterSection}>
  <TextField
    type="date"
    label="From Date"
    value={fromDate}
    onChange={(e) => setFromDate(e.target.value)}
    InputLabelProps={{ shrink: true }}
    size="small"
    sx={{ marginRight: "1rem" }}
  />
  <TextField
    type="date"
    label="To Date"
    value={toDate}
    onChange={(e) => setToDate(e.target.value)}
    InputLabelProps={{ shrink: true }}
    size="small"
    sx={{ marginRight: "1rem" }}
  />
  <TextField
    select
    label="Customer"
    value={customerId}
    onChange={(e) => setCustomerId(e.target.value)}
    size="small"
    sx={{ marginRight: "1rem", minWidth: "200px" }}
  >
    <MenuItem value="all">All Customers</MenuItem>
    {customers.map((cust) => (
      <MenuItem key={cust.id} value={cust.id}>
        {cust.name}
      </MenuItem>
    ))}
  </TextField>
  <Button
    variant="outlined" color="primary"
    onClick={applyFilters}
    sx={{ marginRight: "0.5rem" }}
  >
    Filter
  </Button>
  <Button variant="outlined" color="primary" onClick={resetFilters}>
    Reset
  </Button>
</div>
        {/* Summary */}
        <div className={styles.summarySection}>
          <h4>Summary</h4>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryItem}>
              <span>Total Weight:</span>
              <span>{totalWeight}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Purity:</span>
              <span>{totalPurity}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Amount:</span>
              <span>{totalAmount}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Amount Received:</span>
              <span>{totalAmountReceived}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Pure Received:</span>
              <span>{totalPureReceived}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Cash Balance:</span>
              <span>{totalCashBalance}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Pure Balance:</span>
              <span>{totalPureBalance .toFixed(3)}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h4>Invoice Details: </h4>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Invoice No</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Total Weight</th>
                <th>Total Purity</th>
                <th>Total Amount</th>
                <th>Amount Received</th>
                <th>Pure Received</th>
                <th>Cash Balance</th>
                <th>Pure Balance</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, index) => (
                <tr key={inv.id}>
                  <td>{index + 1}</td>
                  <td>{inv.bill_no}</td>
                  <td> {new Date(inv.updatedAt).toLocaleDateString("en-GB")} </td>
                  <td>{inv.customer?.name}</td>
                  <td>{inv.gold_rate}</td>
                  <td>{inv.total_pure}</td>
                  <td>{inv.total_amount}</td>
                  <td>{inv.amount_received || "-"}</td>
                  <td>{inv.pure_received || "-"}</td>
                  <td>{inv.cash_balance}</td>
                  <td>{inv.pure_balance.toFixed(3)}</td>
                  <td>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleViewInvoice(inv.id)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className={styles.trEven}>
              <tr>
                <td colSpan={4} style={{ fontWeight: "bold" }}>Total</td>
                <td>{totalWeight}</td>
                <td>{totalPurity}</td>
                <td>{totalAmount}</td>
                <td>{totalAmountReceived}</td>
                <td>{totalPureReceived}</td>
                <td>{totalCashBalance}</td>
                <td>{totalPureBalance .toFixed(3)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* View Modal */}
      <Dialog
        open={!!viewInvoice}
        onClose={() => setViewInvoice(null)}
        maxWidth="md"
        fullWidth
      >
       <center> <h4 style={{padding:'0.5rem'}}>Invoice Details</h4></center>

        <DialogContent dividers>
  {viewInvoice && (
    <> 
      <Typography > Invoice No: {viewInvoice.bill_no} </Typography>
      <Typography>Date: {new Date(viewInvoice.updatedAt).toLocaleDateString("en-GB")}</Typography>
      <Typography>Customer: {viewInvoice.customer?.name}</Typography>
      <Typography>Gold Rate: {viewInvoice.gold_rate}</Typography> 
      <Typography>Total Pure: {viewInvoice.total_pure}</Typography>
      <Typography>Total Amount: {viewInvoice.total_amount}</Typography>
      <Typography>Cash Balance: {viewInvoice.cash_balance}</Typography>
      <Typography>Pure Balance: {viewInvoice.pure_balance.toFixed(3)}</Typography>
      <hr/>

      {/* Bill Items Table */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Bill Items:
      </Typography>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item Name</th>
            <th>Weight</th>
            <th>Stone Weight </th>
            {/* <th>Total Weight </th> */}
            <th>Purity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {viewInvoice.billItems?.length > 0 ? (
            viewInvoice.billItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.item_name}</td>
                <td>{item.weight}</td>
                <td>{item.stone_weight}</td>
                {/* <td>{item.total_weight}</td> */}
                <td>{item.pure}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>


      {/* Received Details Table */}
<Typography variant="h6" sx={{ mt: 2 }}>
  Received Details:
</Typography>
<table className={styles.table}>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Type</th>
      <th>Date</th>
      <th>Gold Rate</th>
      <th>Amount</th>
      <th>Gold weight</th>
      <th>Purity Weight</th>
      <th>Hallmark Charge</th>
    </tr>
  </thead>
  <tbody>
    {viewInvoice.receivedItems?.length > 0 ? (
      viewInvoice.receivedItems.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.type}</td>
          <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
          <td>{item.gold_rate || "-"}</td>
          <td>{item.amount || "-"}</td>
          <td>{item.gold || "-"}</td>
          <td>{item.purity_weight}</td>
          <td>{item.hallmark_charge}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="8" style={{ textAlign: "center" }}>
          No received items found
        </td>
      </tr>
    )}
  </tbody>
</table>
    </>
  )}
</DialogContent>
        <DialogActions>
          <Button onClick={() => setViewInvoice(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SalesReport;
