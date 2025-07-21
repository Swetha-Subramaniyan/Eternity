
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './MasterAddTouch.module.css';
import Master from './MasterNavbar';
import { BACKEND_SERVER_URL } from '../../../Config/config';

const MasterAddTouch = () => {
  const [touchValue, setTouchValue] = useState("");
  const [touchItems, setTouchItems] = useState([]);


  useEffect(() => {
    fetchTouchItems();
  }, []);

  const fetchTouchItems = async () => {
    try {
      const response = await axios.get(`${BACKEND_SERVER_URL}/api/addtouch`);
      setTouchItems(response.data);
    } catch (error) {
      console.error("Error fetching touch items:", error);
    }
  };

  const handleAddTouch = async () => {
    if (!touchValue.trim()) {
      alert("Please enter a touch value");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_SERVER_URL}/api/addtouch`, {
        touch: parseFloat(touchValue),
      });
      setTouchItems(prev => [...prev, response.data]); // Update list
      setTouchValue(""); // Reset input
    } catch (error) {
      console.error("Error adding touch:", error);
      alert("Failed to add touch");
    }
  };

  return (
    <>
      <Master />
      <div className="master-container">
        <div className="add-item-form">
          <h2 style={{ textAlign: "center" }}>Add Touch</h2>
          <label>Touch Value:</label>
          <input
            type="text"
            value={touchValue}
            onChange={(e) => setTouchValue(e.target.value)}
            placeholder="Enter Touch value"
          />
          <button onClick={handleAddTouch}>Add Touch</button>
        </div>

        <div className="item-list">
          <h2 style={{ textAlign: "center" }}>Added Touch Items</h2>
          <table>
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Touch Value</th>
              </tr>
            </thead>
            <tbody>
              {touchItems.length > 0 ? (
                touchItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.touch}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" style={{ textAlign: 'center' }}>No touch values added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MasterAddTouch;
