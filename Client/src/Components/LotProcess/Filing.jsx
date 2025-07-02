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

const Filing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>

      <Navbar />
      <Container maxWidth="lg">
        <Paper className="customer-table-container" elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Filing Details
          </Typography>
          <TextField
            label="Search Filing"
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
              <TableRow > 
                <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><strong>S.No</strong></TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><strong>Filing Member Name</strong></TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><strong>Phone Number</strong></TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><strong>Address</strong></TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color:'white', textAlign:'center'  }}><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell align="center">1 </TableCell>
                  <TableCell align="center">Dhanusha</TableCell>
                  <TableCell align="center">9321345672</TableCell>
                  <TableCell align="center">4/213, Coimbatore</TableCell>
                  <TableCell align="center">
                    <Link to={'/filinglot'}> 
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

export default Filing;
