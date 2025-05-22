// import React, { useState } from "react";
// import "./Casting.css";
// import Navbar from "../Navbar/Navbar";
// import { Button, TextField } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Edit, Delete } from "@mui/icons-material";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   DialogTitle

// } from "@mui/material";


// export default function CastingPage() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [form, setForm] = useState({
//     date: "",
//     name: "",
//     givenGold: "",
//     givenTouch: "",
//     copper: "",
//     copperTouch: "",
//   });
//   const [items, setItems] = useState([]);
//   const [savedCastings, setSavedCastings] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const givenPurity =
//     parseFloat(form.givenGold || 0) * parseFloat(form.givenTouch || 0);

//   const beforeWeight =
//     parseFloat(form.givenGold || 0) + parseFloat(form.copper || 0);

//   const copperPurity =
//     beforeWeight * parseFloat(form.copperTouch || 0);

//   const afterWeight = items.reduce(
//     (sum, item) => sum + parseFloat(item.weight || 0),
//     0
//   );

//   const wastage = beforeWeight - afterWeight;


//   const addItem = () => {
//     setItems([...items, { name: "", weight: "", touch: "" }]);
//   };

//   const resetPopup = () => {
//     setForm({
//       date: "",
//       name: "",
//       givenGold: "",
//       givenTouch: "",
//       copper: "",
//       copperTouch: "",
//     });
//     setItems([]);
//     setEditIndex(null);
//   };

//   const handleSave = () => {
//     const filteredItems = items.filter(
//       (item) => item.name.trim() !== ""
//     );
  
//     const newEntry = {
//       ...form,
//       beforeWeight: beforeWeight.toFixed(3),
//       afterWeight: afterWeight.toFixed(3),
//       items: [...filteredItems],
//     };
  
//     if (editIndex !== null) {
//       const updated = [...savedCastings];
//       updated[editIndex] = newEntry;
//       setSavedCastings(updated);
//       toast.success("Updated successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } else {
//       setSavedCastings([...savedCastings, newEntry]);
//       toast.success("Saved successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
  
//     resetPopup();
//     setShowPopup(false);
//   };
  

//   const handleEdit = (index) => {
//     const data = savedCastings[index];
//     setForm({
//       date: data.date,
//       name: data.name,
//       givenGold: data.givenGold,
//       givenTouch: data.givenTouch,
//       copper: data.copper,
//       copperTouch: data.copperTouch || "",
//     });
//     setItems(data.items);
//     setEditIndex(index);
//     setShowPopup(true);
//   };



//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...items];
//     updatedItems[index][field] = value;
//     setItems(updatedItems);
//   };
  
//   const handleEditItem = (index) => {
//     // Editing is inline, so no logic needed unless using modal
//     console.log("Edit requested for item at index", index);
//   };
  
//   const handleDeleteItem = (index) => {
//     const updatedItems = [...items];
//     updatedItems.splice(index, 1);
//     setItems(updatedItems);
//   };
  

//   return (
//     <>
//       <Navbar />
//       <ToastContainer />
//       <div className="casting-container">
//         <div className="top-bar">

        // <div className="date-fields">
        //     <TextField
        //       id="from-date"
        //       label="From Date"
        //       type="date"
        //       InputLabelProps={{ shrink: true }}
        //     />
        //     <TextField
        //       id="to-date"
        //       label="To Date"
        //       type="date"
        //       InputLabelProps={{ shrink: true }}
        //       sx={{ marginLeft: "1rem" }}
        //     />
        //   </div>
//           <Button
//             style={{
//               backgroundColor: "#F5F5F5",
//               color: "black",
//               borderColor: "#25274D",
//               borderStyle: "solid",
//               borderWidth: "2px",
//               marginTop: "1rem",
//               marginRight:'2.5rem',
//               height:"3rem",

//               backgroundColor: '#89681c',
//               color: 'rgb(244, 237, 237)',
//               fontWeight:'bold',
//               border:'rgb(237, 74, 74) ',
//               backgroundColor:'#a94b1d'


//               // color: rgb(244, 237, 237);
//               // font-weight: bold;
//               // border: rgb(237, 74, 74);
             
              
             
//             }}
//             variant="contained"
//             onClick={() => setShowPopup(true)}
//           >
//             Add Casting Items
//           </Button>

        
//         </div>

//         {showPopup && (
//           <div className="popup-overlay">
//             <div className="popup"  >
//               <div className="popup-header">
              
// <div 
// style={{ color: "#855819", 
// textAlign: "center", 
// fontSize:"1.4rem" ,
// fontWeight:'bold', 
// background:'aliceblue',
// background: "linear-gradient(to right, #bf883b, #ebedee, #bf883b )",
// padding:'1rem',
// width:'100%'

// }}

// >  Casting / Melting </div> 

//                 <button 
//                              onClick={() => {
//                     setShowPopup(false);
//                     resetPopup();
//                   }}
//                 >
//                   X
//                 </button>
//               </div>

//               <div className="popup-content">
//                 {/* Column 1 */}
//                 <div className="popup-column">
//                   <label>Date</label>
//                   <input
//                     type="date"
//                     value={form.date}
//                     onChange={(e) =>
//                       setForm({ ...form, date: e.target.value })
//                     }
//                   />

//                   <label>Name</label>
//                   <input
//                     type="text"
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({ ...form, name: e.target.value })
//                     }
//                   />

//                   <label>Given Gold</label>
//                   <input
//                     type="number"
//                     value={form.givenGold}
//                     onChange={(e) =>
//                       setForm({ ...form, givenGold: e.target.value })
//                     }
//                   />

//                   <label>Given Touch</label>
//                   <input
//                     type="number"
//                     value={form.givenTouch}
//                     onChange={(e) =>
//                       setForm({ ...form, givenTouch: e.target.value })
//                     }
//                   />

//                   <p>Purity: <strong>{(givenPurity / 100).toFixed(3)}</strong></p>
                  
//                 </div>

//                 {/* Column 2 */}
//                 <div className="popup-column">
//                   {/* <h3 className="copper">+ Copper</h3> */}

//                   <label>Copper</label>
//                   <input
//                     type="number"
//                     value={form.copper}
//                     onChange={(e) =>
//                       setForm({ ...form, copper: e.target.value })
//                     }
//                   />

//                   {/* <p>Before Weight: 
//                     <strong>{beforeWeight.toFixed(3)}</strong></p> */}
//                     <label> After Weight </label>
//                     <input/>

//                   <label>Touch</label>
//                   <input
//                     type="number"
//                     value={form.copperTouch}
//                     onChange={(e) =>
//                       setForm({ ...form, copperTouch: e.target.value })
//                     }
//                   />

//                   <p>Purity: <strong>{(copperPurity/100).toFixed(3)}</strong></p>
//                 </div>

//                 {/* Column 3 */}
//                 <div className="popup-column">
//                   <button className="add-btn" onClick={addItem}>Add Item</button>
//                   <div className="scroll-table">
//                     <table>
//                       <thead >
//                         <tr>
//                           <th>Item</th>
//                           <th>Weight</th>
//                           <th>Touch</th>
//                           <th>Purity</th>
//                           <th>Remarks</th>
//                           <th> Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {items.map((item, index) => (
//                           <tr key={index}>
//                             <td>
//                               <input
//                                 type="text"
//                                 value={item.name}
//                                 onChange={(e) =>
//                                   handleItemChange(index, "name", e.target.value)
//                                 }
//                               />
//                             </td>
//                             <td>
//                               <input
//                                 type="number"
//                                 value={item.weight}
//                                 onChange={(e) =>
//                                   handleItemChange(index, "weight", e.target.value)
//                                 }
//                               />
//                             </td>
//                             <td>
//                               <input
//                                 type="number"
//                                 value={item.touch}
//                                 onChange={(e) =>
//                                   handleItemChange(index, "touch", e.target.value)
//                                 }
//                               />
//                             </td>
                        

//                             <td>
//   {(
//     (parseFloat(item.weight || 0) *
//      parseFloat(item.touch || 0)) / 100
//   ).toFixed(3)}
// </td>
// <td>
//         <input
//           type="text"
//           value={item.remark}
//           onChange={(e) =>
//             handleItemChange(index, "remark", e.target.value)
//           }
//         />
//       </td>

// <td>
//         <div style={{ display: 'flex', gap: '0px' }}>
//     <Button onClick={() => handleEditItem(index)} color="primary">
//       <Edit />
//     </Button>
//     <Button onClick={() => handleDeleteItem(index)} color="error">
//       <Delete />
//     </Button>
//   </div>
//       </td>

//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   <p>After Weight: <strong>{afterWeight.toFixed(3)}</strong></p>
//                   <p>Wastage: <strong>{wastage.toFixed(3)}</strong></p>

//                   <button className="save-btn" onClick={handleSave}>
//                     {editIndex !== null ? "Update" : "Save"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}


// <h3 style={{textAlign:'center',color:'#d40b4e',fontSize:'1.3rem',fontWeight:'bold'}}> Casting / Melting </h3>
// <TableContainer component={Paper} style={{ marginTop: "1rem", width: "96%",marginLeft:'1.6rem'}}>
//   <Table>
//     <TableHead >
//       <TableRow>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >S.No</TableCell>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Date</TableCell>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Name</TableCell>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Before Weight</TableCell>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >After Weight</TableCell>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Items Qty</TableCell>
//         <TableCell className="table-head-cell" sx={{fontSize:'1rem'}} >Action</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {savedCastings.map((entry, index) => (
//         <TableRow key={index} className="table-body-row">
//           <TableCell>{index + 1}</TableCell>
//           <TableCell>{entry.date}</TableCell>
//           <TableCell>{entry.name}</TableCell>
//           <TableCell>{entry.beforeWeight}</TableCell>
//           <TableCell>{entry.afterWeight}</TableCell>
//           <TableCell>{entry.items.length}</TableCell>
//           <TableCell>
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={() => handleEdit(index)}
//               sx={{ textTransform: 'none' }}
//             >
//               Edit
//             </Button>
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </TableContainer>

//       </div>
//     </>
//   );
// }









import React, { useState } from "react";
import "./Casting.css";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Edit, Delete } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function CastingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    date: "",
    name: "",
    givenGold: "",
    givenTouch: "",
    copperTouch: "",
    finalTouch: "", 
  });

  const [items, setItems] = useState([]);
  const [scrapItems, setScrapItems] = useState([]);
  const [savedCastings, setSavedCastings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


const purity = (parseFloat(form.givenGold || 0) * parseFloat(form.givenTouch || 0)) / 100;  // No division by 100
const pureValue = parseFloat(form.finalTouch || 0) / 100;  // Convert manually entered touch to fraction
const finalWeight = pureValue ? purity / pureValue : 0;
const copper = parseFloat(form.givenGold || 0) - finalWeight;


  const afterWeight = items.reduce((sum, item) => sum + parseFloat(item.weight || 0), 0);
  const wastage = finalWeight - afterWeight;

  const addItem = () => {
    setItems([...items, { name: "", weight: "", touch: form.finalTouch || "" }]);
  };

  const addScrapItem = () => {
    setScrapItems([...scrapItems, { name: "", weight: "", touch: form.finalTouch || "" }]);
  };

  const handleItemChange = (list, setList, index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;
    setList(updated);
  };

  const handleSave = () => {
    const newEntry = {
      ...form,
      beforeWeight: finalWeight.toFixed(3),
      afterWeight: afterWeight.toFixed(3),
      items: [...items],
      scrapItems: [...scrapItems],
    };

    if (editIndex !== null) {
      const updated = [...savedCastings];
      updated[editIndex] = newEntry;
      setSavedCastings(updated);
      toast.success("Updated successfully!");
    } else {
      setSavedCastings([...savedCastings, newEntry]);
      toast.success("Saved successfully!");
    }

    resetForm();
    setShowPopup(false);
  };

  const resetForm = () => {
    setForm({
      date: "",
      name: "",
      givenGold: "",
      givenTouch: "",
      copperTouch: "",
      finalTouch: "",
    });
    setItems([]);
    setScrapItems([]);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const data = savedCastings[index];
    setForm(data);
    setItems(data.items || []);
    setScrapItems(data.scrapItems || []);
    setEditIndex(index);
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="casting-container">

      <div className="date-fields">
            <TextField
              id="from-date"
              label="From Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              id="to-date"
              label="To Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              sx={{ marginLeft: "1rem" }}
            />

<Button  onClick={() => setShowPopup(true)} sx={{ m: 2, marginLeft:115, backgroundColor:'#5f4917', color:'white' }}>
          Add Casting Items
</Button>
          </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <div className="popup-header" >
                Casting / Melting
                <button onClick={() => { setShowPopup(false); resetForm(); }} style={{ float: "right" }}>X</button>
              </div>

              <div className="popup-content">
                {/* Column 1 */}
                <div className="popup-column">
                  <label>Date</label>
                  <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  <label>Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <label>Given Gold</label>
                  <input type="number" value={form.givenGold} onChange={(e) => setForm({ ...form, givenGold: e.target.value })} />
                  <label>Given Touch</label>
                  <input type="number" value={form.givenTouch} onChange={(e) => setForm({ ...form, givenTouch: e.target.value })} />
                  <p>Purity: <strong>{purity.toFixed(3)}</strong></p>
                </div>

                {/* Column 2 */}
                <div className="popup-column">
                  <label>Final Touch </label>
                  <input type="number" value={form.finalTouch} onChange={(e) => setForm({ ...form, finalTouch: e.target.value })} />
                  <p>Pure Value: <strong>{pureValue.toFixed(3)}</strong></p>
                  <p>Final Weight: <strong>{finalWeight.toFixed(3)}</strong></p>
                  <p>Copper: <strong>{copper.toFixed(3)}</strong></p>
                </div>

                {/* Column 3 */}
                <div className="popup-column">
                  <Button onClick={addItem} sx={{ mt: 0 ,mb:1, backgroundColor:'#5f4917', color:'white', width:'fit-content' }}>
          Add Items
        </Button>

                  <div className="scroll-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Weight</th>
                          <th>Touch</th>
                          <th>Purity</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={index}>
                            <td><input value={item.name} onChange={(e) => handleItemChange(items, setItems, index, "name", e.target.value)} /></td>
                            <td><input value={item.weight} type="number" onChange={(e) => handleItemChange(items, setItems, index, "weight", e.target.value)} /></td>
                            <td><input value={item.touch} type="number" onChange={(e) => handleItemChange(items, setItems, index, "touch", e.target.value)} /></td>
                            <td>{((parseFloat(item.weight || 0) * parseFloat(item.touch || 0)) / 100).toFixed(3)}</td>
                            <td>
                              <Button color="error" onClick={() => {
                                const updated = [...items];
                                updated.splice(index, 1);
                                setItems(updated);
                              }}>
                                <Delete />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              
                  <Button onClick={addScrapItem} sx={{ mt: 2 ,mb:1, backgroundColor:'#5f4917', color:'white', width:'fit-content' }}>
          Add Scrap Items
        </Button>

                  <div className="scroll-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Weight</th>
                          <th>Touch</th>
                          <th>Purity</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scrapItems.map((item, index) => (
                          <tr key={index}>
                            <td><input value={item.name} onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "name", e.target.value)} /></td>
                            <td><input value={item.weight} type="number" onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "weight", e.target.value)} /></td>
                            <td><input value={item.touch} type="number" onChange={(e) => handleItemChange(scrapItems, setScrapItems, index, "touch", e.target.value)} /></td>
                            <td>{((parseFloat(item.weight || 0) * parseFloat(item.touch || 0)) / 100).toFixed(3)}</td>
                            <td>
                              <Button color="error" onClick={() => {
                                const updated = [...scrapItems];
                                updated.splice(index, 1);
                                setScrapItems(updated);
                              }}>
                                <Delete />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>After Weight: <strong>{afterWeight.toFixed(3)}</strong></p>
                  <p>Wastage: <strong>{wastage.toFixed(3)}</strong></p>

                  <button className="save-btn" onClick={handleSave}>
                    {editIndex !== null ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
  {/* Left Table */}
  <div style={{ flex: 1 }}>
    <h3 style={{ textAlign: 'center', color: '#d40b4e', fontSize: '1.3rem', fontWeight: 'bold' }}>
      Casting / Melting
    </h3>

    <TableContainer component={Paper} sx={{ mt: 2, width: "95%", mx: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Before Weight</TableCell>
            <TableCell>After Weight</TableCell>
            <TableCell>Items Qty</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {savedCastings.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.beforeWeight}</TableCell>
              <TableCell>{entry.afterWeight}</TableCell>
              <TableCell>{(entry.items?.length || 0) + (entry.scrapItems?.length || 0)}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(index)} variant="contained" size="small">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>

  {/* Right Table */}
  <div style={{ width: '30rem', marginLeft: '1rem' }}>
    <h3 style={{ textAlign: 'center', color: '#d40b4e', fontSize: '1.3rem', fontWeight: 'bold' }}>Casting Items</h3>
    <TableContainer component={Paper} style={{ marginTop: "1rem", width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem' }}>S.No</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Item Name</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Weight</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Touch</TableCell>
            <TableCell sx={{ fontSize: '1rem' }}>Purity</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  </div>
</div>

</div>
     
    </>
  );
}
