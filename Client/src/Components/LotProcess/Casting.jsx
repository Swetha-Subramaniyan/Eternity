
// import React, { useState } from "react";
// import "./Casting.css";
// import Navbar from "../Navbar/Navbar";

// export default function CastingPage() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState({
//     date: "",
//     name: "",
//     givenGold: "",
//     givenTouch: "",
//     copper: "",
//   });

//   const beforeWeight =
//     parseFloat(form.givenGold || 0) + parseFloat(form.copper || 0);
//   const givenPurity =
//     parseFloat(form.givenGold || 0) * parseFloat(form.givenTouch || 0);
//   const finalPurity = beforeWeight * 0.916;
//   const afterWeight = items.reduce(
//     (sum, item) => sum + parseFloat(item.weight || 0),
//     0
//   );
//   const wastage = beforeWeight - afterWeight;

//   const handleItemChange = (index, field, value) => {
//     const newItems = [...items];
//     newItems[index][field] = value;
//     setItems(newItems);
//   };

//   const addItem = () => {
//     setItems([...items, { name: "", weight: "" }]);
//   };

//   return (
//     <> 
//     <Navbar/>
//     <div className="casting-container">
//       <div className="top-bar">
//         <button onClick={() => setShowPopup(true)}>Add Casting Items</button>
//         <div className="date-fields">
//           <input type="date" placeholder="From Date" />
//           <input type="date" placeholder="To Date" />
//         </div>
//       </div>

//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <div className="popup-header">
//               <h2>Casting / Melting</h2>
//               <button onClick={() => setShowPopup(false)}>X</button>
//             </div>

//             <div className="popup-content">
//               {/* Column 1 */}
//               <div className="popup-column">
//                 <label>Date</label>
//                 <input
//                   type="date"
//                   value={form.date}
//                   onChange={(e) => setForm({ ...form, date: e.target.value })}
//                 />

//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />

//                 <label>Given Gold</label>
//                 <input
//                   type="number"
//                   value={form.givenGold}
//                   onChange={(e) =>
//                     setForm({ ...form, givenGold: e.target.value })
//                   }
//                 />

//                 <label>Given Touch</label>
//                 <input
//                   type="number"
//                   value={form.givenTouch}
//                   onChange={(e) =>
//                     setForm({ ...form, givenTouch: e.target.value })
//                   }
//                 />

//                 <p>Purity: <strong>{givenPurity.toFixed(3)}</strong></p>
//               </div>

//               {/* Column 2 */}
//               <div className="popup-column">
//                 <h4>After Adding Copper</h4>

//                 <label>Copper</label>
//                 <input
//                   type="number"
//                   value={form.copper}
//                   onChange={(e) =>
//                     setForm({ ...form, copper: e.target.value })
//                   }
//                 />

//                 <p>Before Weight: <strong>{beforeWeight.toFixed(3)}</strong></p>
//                 <p>Touch: <strong>0.916</strong></p>
//                 <p>Purity: <strong>{finalPurity.toFixed(3)}</strong></p>
//               </div>

//               {/* Column 3 */}
//               <div className="popup-column">
//                 <button className="add-btn" onClick={addItem}>Add Item</button>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Item</th>
//                       <th>Weight</th>
//                       <th> Touch</th>
//                       <th> Purity </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {items.map((item, idx) => (
//                       <tr key={idx}>
//                         <td>
//                           <input
//                             type="text"
//                             value={item.name}
//                             onChange={(e) =>
//                               handleItemChange(idx, "name", e.target.value)
//                             }
//                           />
//                         </td>
//                         <td>
//                           <input
//                             type="number"
//                             value={item.weight}
//                             onChange={(e) =>
//                               handleItemChange(idx, "weight", e.target.value)
//                             }
//                           />
//                         </td>
//                         <td>
//                           <input
//                             type="number"
//                             value={item.touch}
//                             onChange={(e) =>
//                               handleItemChange(idx, "touch", e.target.value)
//                             }
//                           />
//                         </td>
//                         <td>{(parseFloat(item.weight || 0) * 0.916).toFixed(3)}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>

//                 <p>After Weight: <strong>{afterWeight.toFixed(3)}</strong></p>
//                 <p>Wastage: <strong>{wastage.toFixed(3)}</strong></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }




import React, { useState } from "react";
import "./Casting.css";
import Navbar from "../Navbar/Navbar";

export default function CastingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    date: "",
    name: "",
    givenGold: "",
    givenTouch: "",
    copper: "",
    copperTouch: "", // new field
  });
  const [items, setItems] = useState([]);
  const [savedCastings, setSavedCastings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const givenPurity =
    parseFloat(form.givenGold || 0) * parseFloat(form.givenTouch || 0);

  const beforeWeight =
    parseFloat(form.givenGold || 0) + parseFloat(form.copper || 0);

  const copperPurity =
    beforeWeight * parseFloat(form.copperTouch || 0);

  const afterWeight = items.reduce(
    (sum, item) => sum + parseFloat(item.weight || 0),
    0
  );

  const wastage = beforeWeight - afterWeight;

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", weight: "", touch: "" }]);
  };

  const resetPopup = () => {
    setForm({
      date: "",
      name: "",
      givenGold: "",
      givenTouch: "",
      copper: "",
      copperTouch: "",
    });
    setItems([]);
    setEditIndex(null);
  };

  const handleSave = () => {
    const newEntry = {
      ...form,
      beforeWeight: beforeWeight.toFixed(3),
      afterWeight: afterWeight.toFixed(3),
      items: [...items],
    };

    if (editIndex !== null) {
      const updated = [...savedCastings];
      updated[editIndex] = newEntry;
      setSavedCastings(updated);
    } else {
      setSavedCastings([...savedCastings, newEntry]);
    }

    resetPopup();
    setShowPopup(false);
  };

  const handleEdit = (index) => {
    const data = savedCastings[index];
    setForm({
      date: data.date,
      name: data.name,
      givenGold: data.givenGold,
      givenTouch: data.givenTouch,
      copper: data.copper,
      copperTouch: data.copperTouch || "",
    });
    setItems(data.items);
    setEditIndex(index);
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />
      <div className="casting-container">
        <div className="top-bar">
          <button onClick={() => setShowPopup(true)}>Add Casting Items</button>
          <div className="date-fields">
            <input type="date" placeholder="From Date" />
            <input type="date" placeholder="To Date" />
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <div className="popup-header">
                <h2>Casting / Melting</h2>
                <button onClick={() => { setShowPopup(false); resetPopup(); }}>
                  X
                </button>
              </div>

              <div className="popup-content">
                {/* Column 1 */}
                <div className="popup-column">
                  <label>Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      setForm({ ...form, date: e.target.value })
                    }
                  />

                  <label>Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />

                  <label>Given Gold</label>
                  <input
                    type="number"
                    value={form.givenGold}
                    onChange={(e) =>
                      setForm({ ...form, givenGold: e.target.value })
                    }
                  />

                  <label>Given Touch</label>
                  <input
                    type="number"
                    value={form.givenTouch}
                    onChange={(e) =>
                      setForm({ ...form, givenTouch: e.target.value })
                    }
                  />

                  <p>Purity: <strong>{givenPurity.toFixed(3)}</strong></p>
                </div>

                {/* Column 2 */}
                <div className="popup-column">
                  <h3>After Adding Copper</h3>

                  <label>Copper</label>
                  <input
                    type="number"
                    value={form.copper}
                    onChange={(e) =>
                      setForm({ ...form, copper: e.target.value })
                    }
                  />

                  <p>Before Weight: <strong>{beforeWeight.toFixed(3)}</strong></p>

                  <label>Touch</label>
                  <input
                    type="number"
                    value={form.copperTouch}
                    onChange={(e) =>
                      setForm({ ...form, copperTouch: e.target.value })
                    }
                  />

                  <p>Purity: <strong>{copperPurity.toFixed(3)}</strong></p>
                </div>

                {/* Column 3 */}
                <div className="popup-column">
                  <button className="add-btn" onClick={addItem}>Add Item</button>
                  <div className="scroll-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Wt</th>
                          <th>Touch</th>
                          <th>Purity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, idx) => (
                          <tr key={idx}>
                            <td>
                              <input
                                type="text"
                                value={item.name}
                                onChange={(e) =>
                                  handleItemChange(idx, "name", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={item.weight}
                                onChange={(e) =>
                                  handleItemChange(idx, "weight", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={item.touch}
                                onChange={(e) =>
                                  handleItemChange(idx, "touch", e.target.value)
                                }
                              />
                            </td>
                            <td>
                              {(
                                parseFloat(item.weight || 0) *
                                parseFloat(item.touch || 0)
                              ).toFixed(3)}
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

        {/* Display Saved Casting Entries */}
        <div className="casting-table">
          <h3 style={{ textAlign: "center" }}>Casting / Melting</h3>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Before Weight</th>
                <th>After Weight</th>
                <th>Items Qty</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {savedCastings.map((entry, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{entry.date}</td>
                  <td>{entry.name}</td>
                  <td>{entry.beforeWeight}</td>
                  <td>{entry.afterWeight}</td>
                  <td>{entry.items.length}</td>
                  <td>
                    <button onClick={() => handleEdit(idx)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

