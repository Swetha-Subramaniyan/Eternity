

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
// import styles from './FilingLot.module.css';
import { Link } from 'react-router-dom';
import styles from './FilingLot.module.css';


const BuffingLot = () => {
  const [lots, setLots] = useState([{ id: 1 }]);

  const handleCloseLot = () => {
    const nextId = lots.length + 1;
    setLots([...lots, { id: nextId }]);
  };

  return (
    <>
      <Navbar />

      <div >
        <div className={styles.headingg}>Eternity Jewellery Details</div>
        <div className={styles.details}><b>Name:</b> <span>Dhanusha R</span></div>
        <div className={styles.details}><b>Phone Number:</b> <span>9342516726</span></div>
        <div className={styles.details}><b>Address:</b> <span>4/253, Coimbatore</span></div>
        <hr style={{ marginTop: '1rem' }} />
      </div> 

      <div className={styles.container}>
        {lots.map((lot) => (
          <div key={lot.id} className={styles.card}>
            <div className={styles.header}>
              <label className={styles.lotLabel}> Lot No: {lot.id}</label>
              <div className={styles.actions}>
                <Link to="/buffingreport">
                  <button className={styles.button}>
                    View
                  </button>
                </Link>
                <button className={styles.closebutton} onClick={handleCloseLot}>
                  Close
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuffingLot;