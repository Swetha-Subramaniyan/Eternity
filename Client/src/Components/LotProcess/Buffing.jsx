import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PreviewIcon from "@mui/icons-material/Preview";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Buffing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>

      <Navbar />
      <Container maxWidth="lg">
        <Paper className="customer-table-container" elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Buffing Details
          </Typography>
          <TextField
            label="Search Buffing"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                width: "22rem",
                backgroundColor: "#f8f9fa",
                "&.Mui-focused": {
                  backgroundColor: "#ffffff",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#777" }} />
                </InputAdornment>
              ),
            }}
          />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }}>S.No</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }}>Buffing Member Name</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }}>Phone Number</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }}>Address</TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center' , fontWeight:'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell align="center">1 </TableCell>
                  <TableCell align="center">Dhanusha</TableCell>
                  <TableCell align="center">9321345672</TableCell>
                  <TableCell align="center">4/213, Coimbatore, Buffing</TableCell>
                  <TableCell align="center">
             
                    <Link to={'/buffinglot'}> 
                    <IconButton>
                      <PreviewIcon color="primary"  /> 
                    </IconButton>
                    </Link>
                  </TableCell> 
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      
    </>
  );
};

export default Buffing;