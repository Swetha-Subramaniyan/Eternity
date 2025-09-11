import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
} from "@mui/material";
import axios from "axios";
import { BACKEND_SERVER_URL } from "../../../Config/config";
import Navbar from "../Navbar/Navbar";
import styles from "../LotProcess/CastingProcess/CastingEntry.module.css";

const PurchaseRegister = () => {
  const [purchases, setPurchases] = useState([]);
  const [allPurchases, setAllPurchases] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [supplierFilter, setSupplierFilter] = useState("");
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchPurchases();
    fetchSuppliers();
  }, []);

  const fetchPurchases = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_SERVER_URL}/api/purchase`);
      setPurchases(data);
      setAllPurchases(data);
    } catch (error) {
      console.error("Failed to fetch purchases", error);
    }
  };

  const fetchSuppliers = async () => {
    try {
      const response = await axios.get(`${BACKEND_SERVER_URL}/api/addsupplier`);
      setSuppliers(response.data.data || response.data);
    } catch (error) {
      console.error("Error fetching suppliers:", error.message);
    }
  };

  const handleFilter = () => {
    let filtered = allPurchases;

    if (fromDate && toDate) {
      filtered = filtered.filter((purchase) => {
        const purchaseDate = new Date(purchase.createdAt)
          .toISOString()
          .split("T")[0];
        return purchaseDate >= fromDate && purchaseDate <= toDate;
      });
    }

    if (supplierFilter) {
      filtered = filtered.filter(
        (purchase) => purchase.supplierId == supplierFilter
      );
    }

    setPurchases(filtered);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setSupplierFilter("");
    setPurchases(allPurchases);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Purchase Register
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" mb={3}>
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
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Supplier</InputLabel>
            <Select
              value={supplierFilter}
              label="Supplier"
              onChange={(e) => setSupplierFilter(e.target.value)}
            >
              <MenuItem value="">All Suppliers</MenuItem>
              {suppliers.map((supplier) => (
                <MenuItem key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleFilter}>
            Filter
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Stack>

        <TableContainer className={styles.itemList} >
          <Table className={styles.customerTable} style={{margin:0}}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell>
                  <strong>Date</strong>
                </TableCell>
                <TableCell>
                  <strong>Supplier</strong>
                </TableCell>
                <TableCell>
                  <strong>Item</strong>
                </TableCell>
                <TableCell>
                  <strong>Touch</strong>
                </TableCell>
                <TableCell>
                  <strong>Weight</strong>
                </TableCell>
                <TableCell>
                  <strong>Rate</strong>
                </TableCell>
                <TableCell>
                  <strong>Value</strong>
                </TableCell>
                <TableCell>
                  <strong>Remarks</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell>
                    {new Date(purchase.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{purchase.SupplierId?.name || "-"}</TableCell>
                  <TableCell>{purchase.item}</TableCell>
                  <TableCell>
                    {purchase.TouchId?.touch || purchase.touch_id}
                  </TableCell>
                  <TableCell>{purchase.weight}</TableCell>
                  <TableCell>{purchase.rate}</TableCell>
                  <TableCell>{purchase.totalValue}</TableCell>
                  <TableCell>{purchase.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PurchaseRegister;
