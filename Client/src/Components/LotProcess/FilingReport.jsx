import React from 'react';
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
    Button,
    TextField,
    InputAdornment,
  } from "@mui/material";
  import { FaEye } from "react-icons/fa";
  import styles from './FilingReport.module.css'; 
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const FilingReport = () => {
  return (
    <> 
    <Navbar/>
<div className={styles.card} >  
 <div className={styles.headingg}> Eternity Jewelley Details </div>
    <div className={styles.details}> 
         <b> Name:</b> <span> Dhanusha R  </span>     
    </div>
    <div className={styles.details}> 
     <b> Phone Number: </b>   <span> 9342516726  </span>  
       
    </div>
    <div className={styles.details}> 
         
         <b> Address: </b>   <span> 4/253, Coimbatore  </span>  
      
    </div>
    <hr style={{marginTop:'1rem'}}/>
    </div>
  
<div className={styles.tablecontainer}> 
    <TableContainer sx={{width:'60rem',}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center"><strong>S.No</strong></TableCell>
                  <TableCell align="center"><strong>Date</strong></TableCell>
                  <TableCell align="center"><strong>Process </strong></TableCell>
                  <TableCell align="center"><strong>Issue</strong></TableCell>
                  <TableCell align="center"><strong>Receipt</strong></TableCell>                 
                  <TableCell align="center"><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">1</TableCell>
                  <TableCell align="center"> 23-06 -2025</TableCell>
                  <TableCell align="center"> cst </TableCell>
                  <TableCell align="center"> 200 </TableCell>
                  <TableCell align="center"> 180 </TableCell>
                  <TableCell align="center">  
                  <Link to='/filingdetails'> 
                  <FaEye style={{fontSize:'1.2rem'}} />  
                  </Link>                
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </div>
    </>
  )
}

export default FilingReport