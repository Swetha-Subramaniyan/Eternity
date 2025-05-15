import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MasterAddItems.css";

const MasterAddItems = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const handleAddItem = () => {
    if (!itemName.trim()) {
      return toast.warn("Please enter item name.");
    }

    const newItem = {
      id: Date.now(),
      itemName: itemName.trim(),
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setItemName("");
    toast.success("Item added successfully!");
  };

  return (
    <div className="master-container">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <div className="split-container">
        <div className="left-panel">
          <div className="add-item-form">
            <h2>Add Item</h2>
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter item name"
            />
            <button onClick={handleAddItem}>Add Item</button>
          </div>
        </div>

        <div className="divider" />

        <div className="right-panel">
          <h2>Added Items</h2>
          {items.length > 0 ? (
            <div className="cards-wrapper">
              {items.map((item) => (
                <div className="item-card" key={item.id}>
                  {item.itemName}
                </div>
              ))}
            </div>
          ) : (
            <p>No items added.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MasterAddItems;
