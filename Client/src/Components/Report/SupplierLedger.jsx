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

const SupplierLedger = () => {
  const [purchases, setPurchases] = useState([]);
  const [allPurchases, setAllPurchases] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");

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

  const handleSupplierChange = (e) => {
    const supplierId = e.target.value;
    setSelectedSupplier(supplierId);

    if (supplierId) {
      const filtered = allPurchases.filter(
        (purchase) => purchase.supplierId == supplierId
      );
      setPurchases(filtered);
    } else {
      setPurchases(allPurchases);
    }
  };

  // Reset all filters
  const handleReset = () => {
    setSelectedSupplier("");
    setPurchases(allPurchases);
  };

  // Calculate outstanding balance for a supplier
  const calculateOutstanding = (supplierId) => {
    const supplierPurchases = allPurchases.filter(
      (p) => p.supplierId == supplierId
    );
    return supplierPurchases.reduce(
      (total, purchase) => total + purchase.totalValue,
      0
    );
  };

  // Calculate total outstanding for all suppliers
  const calculateTotalOutstanding = () => {
    return allPurchases.reduce(
      (total, purchase) => total + purchase.totalValue,
      0
    );
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Supplier Ledger
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" mb={3}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Select Supplier</InputLabel>
            <Select
              value={selectedSupplier}
              label="Select Supplier"
              onChange={handleSupplierChange}
            >
              <MenuItem value="">All Suppliers</MenuItem>
              {suppliers.map((supplier) => (
                <MenuItem key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button 
            variant="outlined" 
            onClick={handleReset}
            disabled={!selectedSupplier}
          >
            Reset
          </Button>
        </Stack>

        {selectedSupplier ? (
          <Box
            sx={{ mb: 3, p: 2, backgroundColor: "#f9f9f9", borderRadius: 1 }}
          >
            <Typography variant="h6">
              Outstanding Balance for {suppliers.find(s => s.id == selectedSupplier)?.name}: 
              ₹{calculateOutstanding(selectedSupplier).toFixed(2)}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{ mb: 3, p: 2, backgroundColor: "#e8f5e8", borderRadius: 1 }}
          >
            <Typography variant="h6">
              Total Outstanding Balance for All Suppliers: 
              ₹{calculateTotalOutstanding().toFixed(2)}
            </Typography>
          </Box>
        )}

        <TableContainer className={styles.itemList}>
          <Table className={styles.customerTable} style={{ margin: 0 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell><strong>S.No</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Supplier</strong></TableCell>
                <TableCell><strong>Item</strong></TableCell>
                <TableCell><strong>Touch</strong></TableCell>
                <TableCell><strong>Weight</strong></TableCell>
                <TableCell><strong>Rate</strong></TableCell>
                <TableCell><strong>Value</strong></TableCell>
                <TableCell><strong>Remarks</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases.length > 0 ? (
                purchases.map((purchase, index) => (
                  <TableRow key={purchase.id}>
                    <TableCell>{index + 1}</TableCell>
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
                    <TableCell>₹{purchase.totalValue}</TableCell>
                    <TableCell>{purchase.remarks || "-"}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    No purchases found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default SupplierLedger;