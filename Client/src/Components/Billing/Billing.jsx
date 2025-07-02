import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { TextField, IconButton,Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from './Billing.module.css';

const Billing = () => {
  const [rows, setRows] = useState([]);

  const now = new Date();
  const currentDate = now.toLocaleDateString('en-GB');
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12:true
  });

  const addRow = () => {
    setRows(prevRows => [
      ...prevRows,
      {
        id: prevRows.length + 1,
        date: currentDate,
        goldRate: '',
        gold: '',
        touch: '',
        purityWeight: '',
        amount: ''
      }
    ]);
  };

  const deleteRow = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this row?")
    if(confirmDelete){
      setRows(prevRows => prevRows.filter(row => row.id !== id));
    }
  
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}> 

      <div className={styles.card}>
        <div >
          <h2>Estimate Only</h2>
        </div>
        <p className={styles.billNo}>Bill No:</p>
        <div className={styles.datetime}> 
        <p>Date: {currentDate} </p>
        <p>Time: {time} </p>
        </div>
        <br/>
        <hr/>

<div className={styles.label}> 
        <TextField label="Select Customer" variant="outlined" size="small" />
        <TextField label="Select Product Name" variant="outlined" size="small" />
        <TextField label="Enter Gold Rate" variant="outlined" size="small" />
</div>
        <br />
        <div className={styles.billdetails}>Bill Details: </div>
<div className={styles.tablehead}>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Touch</th>
              <th>%</th>
              <th>Weight</th>
              <th>Pure</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
</div>
<div className={styles.billtotal}> 
        <b> Bill Total </b>
        <b> Total</b>

</div>


        <div className={styles.receivedHeader}>
  <div className={styles.billdetails}>Received Details: </div>
  
  <IconButton size="small" onClick={addRow}>
    <AddCircleOutlineIcon sx={{color:'darkblue'}} />
  </IconButton>
</div> 
<div className={styles.tablehead}> 
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Gold Rate</th>
              <th>Gold</th>
              <th>Touch</th>
              <th>Purity Weight</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.date}</td>
                <td>{row.goldRate}</td>
                <td>{row.gold}</td>
                <td>{row.touch}</td>
                <td>{row.purityWeight}</td>
                <td>{row.amount}</td>
                <td>
                  <IconButton onClick={() => deleteRow(row.id)} size="small">
                    <DeleteIcon color="error" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={8}></td>
            </tr>
          </tfoot>
        </table>
   </div>
   
        <div className={styles.balance}> 
        <p> Cash Balance: 0.00 </p>
        <p> Excess Pure: 0.00 </p>
        <p> Pure Balance: 0.00 </p>
        </div>

        <Button
         variant="contained"
         sx={{mt:5, backgroundColor:'rgb(139, 103, 14)'}}
        > Save </Button>

      </div>

  
      <div className={styles.tablecard}>
        
        <h2 > Available Product Weights </h2>  
     
        <div className={styles.tablehead}>
        <table> 
          <thead>
            <tr> 
              <th> S.No </th>
              <th> Product Finish Weight </th>
            </tr>
          </thead>
          <tbody> 
            <tr> 
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
        </div> 
        </div>
   
        </div>
    </>
  );
};

export default Billing;
