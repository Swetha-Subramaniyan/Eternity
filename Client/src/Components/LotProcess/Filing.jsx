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

  const filingMembers = [
    {
      id: 1,
      name: "Dhanusha",
      phone: "9321345672",
      address: "4/213, Coimbatore",
    },
    {
      id: 2,
      name: "Ravi Kannan",
      phone: "9876543210",
      address: "4/234, Ooty",
    }
  
  ];

  const filteredMembers = filingMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm) ||
      member.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Paper className="customer-table-container" elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Filing Details
          </Typography>

          <TextField
            label="Search Filing Member"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                width: "20rem",
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
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>
                    <strong>S.No</strong>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>
                    <strong>Filing Member Name</strong>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>
                    <strong>Phone Number</strong>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>
                    <strong>Address</strong>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#38383e', color: 'white', textAlign: 'center' }}>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, index) => (
                    <TableRow key={member.id}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{member.name}</TableCell>
                      <TableCell align="center">{member.phone}</TableCell>
                      <TableCell align="center">{member.address}</TableCell>
                      <TableCell align="center">
                        <Link to="/filinglot">
                          <IconButton>
                            <PreviewIcon color="primary" />
                          </IconButton>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No records found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
};

export default Filing;
