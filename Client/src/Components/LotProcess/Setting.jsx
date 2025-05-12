// import React from 'react'
// import Navbar from '../Navbar/Navbar'

// const Setting = () => {
//   return (
//     <> 
//    <Navbar/>
//     <div>Setting</div>
//     </>
    
//   )
// }

// export default Setting



import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const Setting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goldsmithName, setGoldsmithName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <> 
    <Navbar/>
    <div className="customer-container">
<br/>
    <TextField
    id="date-filter"
    label="Filter by Date"
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
   
  />
        <Button
          style={{
            backgroundColor: "#F5F5F5",
            color: "black",
            borderColor: "#25274D",
            borderStyle: "solid",
            borderWidth: "2px",
            marginLeft:'55rem'
          }}
          variant="contained"
          onClick={openModal}
        >
          Add Setting Items
        </Button>
{/*       
      <Button
        style={{
          backgroundColor: "#F5F5F5",
          color: "black",
          borderColor: "#25274D",
          borderStyle: "solid",
          borderWidth: "2px",
        }}
        variant="contained"
        onClick={openModal}
      >
        Add Setting Items
      </Button> */}

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle style={{ color: "#a33768" }}>  Setting Items </DialogTitle>
        <DialogContent>
          
        
            <FormControl sx={{ m: 0, width: 351, marginTop:1 }}>
        <InputLabel id="demo-multiple-checkbox-label">Setting Name</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Casting Name" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> 
          <TextField
            margin="dense"
            label="Before Weight"
            type="number"
            fullWidth
           
          />
          <TextField
            margin="dense"
            label="Purity"
            type="number"
            fullWidth
           
          />
           <TextField
            margin="dense"
            label="Touch"
            type="number"
            fullWidth
           
          />
          <TextField
          margin="dense"
          label="Difference"
          type="number"
          fullWidth
         
        />
          <TextField
          margin="dense"
          label="After Weight"
          type="number"
          fullWidth
         
        />

        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={closeModal} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
};

export default Setting;