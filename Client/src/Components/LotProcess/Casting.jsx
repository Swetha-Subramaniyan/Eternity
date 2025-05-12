import React, { useState } from "react";
import "./Casting.css";
import Navbar from "../Navbar/Navbar";
import { Button, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CastingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    date: "",
    name: "",
    givenGold: "",
    givenTouch: "",
    copper: "",
    copperTouch: "",
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
      toast.success("Updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      setSavedCastings([...savedCastings, newEntry]);
      toast.success("Saved successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
      <ToastContainer />
      <div className="casting-container">
        <div className="top-bar">
          <Button
            style={{
              backgroundColor: "#F5F5F5",
              color: "black",
              borderColor: "#25274D",
              borderStyle: "solid",
              borderWidth: "2px",
              marginLeft: "78rem",
              position: "absolute",
              marginTop: "1rem",
            }}
            variant="contained"
            onClick={() => setShowPopup(true)}
          >
            Add Casting Items
          </Button>

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
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <div className="popup-header">
                <h2>Casting / Melting </h2>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    resetPopup();
                  }}
                >
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
                        {items.map((item, index) => (
                          <tr key={index}>
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

        <div className="casting-table">
          <br />
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
              {savedCastings.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.date}</td>
                  <td>{entry.name}</td>
                  <td>{entry.beforeWeight}</td>
                  <td>{entry.afterWeight}</td>
                  <td>{entry.items.length}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
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
