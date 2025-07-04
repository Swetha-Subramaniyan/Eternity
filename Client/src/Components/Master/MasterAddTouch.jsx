import React, { useState } from 'react';
import Styles from './MasterAddTouch.module.css'
import Master from './Master';

const MasterAddTouch = () => {

    const [touchValue, setTouchValue] = useState("");

  return (
    <>
    <Master/>
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
          <button >Add Touch</button>
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
        
                  <tr >
                    <td></td>
                    <td></td>
                    
                  </tr>
    
              </tbody>
            </table>
      
    
      
        </div>
      </div>

    </>
  )
}

export default MasterAddTouch