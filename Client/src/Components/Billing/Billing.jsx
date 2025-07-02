import React from 'react';
import Navbar from '../Navbar/Navbar';
import {
    Autocomplete,
    TextField,
    Box,
    Button,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    IconButton,
  } from "@mui/material";
  import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

  import styles from './Billing.module.css';

const Billing = () => {
  return (
    <>
    <Navbar/> 
    <div className={styles.card}> 
  <div> 
    <h2> Estimate Only</h2>
  </div>
  <p> Bill No: </p>
  <p> Date: </p>
  <p> Time: </p>
  <TextField      
    label="Select Customer"
    variant="outlined"
    size="small"
   />
   <TextField      
    label="Select Product Name"
    variant="outlined"
    size="small"
   />
 <TextField      
    label="Enter Gold Rate"
    variant="outlined"
    size="small"
   />
   <br/>
   <h2> Bill Details </h2>
   <table> 
    <thead> 
        <th> Description </th>
        <th> Touch </th>
        <th> % </th>
        <th> Weight </th>
        <th> Pure</th>        
        <th> Amount </th>
        <th> Action </th>
    </thead>
 
   </table>
<br/>
   <h2> Received Details </h2> 
   <IconButton
                  size="small"
                  className="add-circle-icon"
                >
                  <AddCircleOutlineIcon />
                </IconButton>

   <table> 
    <thead> 
        <tr> 
            <th>S.No </th>
            <th> Date </th>
            <th> Gold Rate </th>
            <th> Gold </th>
            <th> Touch </th>
            <th> Purity Weight </th>
            <th> Amount </th>
            <th> Action </th>
        </tr>
    </thead>
    <tfoot> 
        <td colspan={8}> </td>
    </tfoot>
   </table>

   </div>

    </>
  )
}

export default Billing