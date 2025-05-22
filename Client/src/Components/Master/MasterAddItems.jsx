import React, { useState, useEffect } from "react";
import "./MasterAdditems.css";
import Master from "./Master";
import axios from "axios";
import { BACKEND_SERVER_URL } from "../../../Config/config";

const MasterAdditems = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  // Fetch items on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_SERVER_URL}/api/additem`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Add item to backend
  const handleAddItem = async () => {
    if (!itemName) {
      alert("Please enter an item name.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_SERVER_URL}/api/additem`, {
        name: itemName,
      });
      console.log(response)

      setItems((prevItems) => [...prevItems, response.data]);
      setItemName(""); // Clear input
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <>
      <Master />
      <div className="master-container">
        <div className="add-item-form">
          <h2 style={{ textAlign: "center" }}>Add Item</h2>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>

        <div className="item-list">
          <h2 style={{ textAlign: "center" }}>Added Items</h2>
          {items.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>SI.No</th>
                  <th>Item Name</th>
                 
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items added yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MasterAdditems;
