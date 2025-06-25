

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './FilingLot.module.css';
import { Link } from 'react-router-dom';

const FilingLot = () => {
  const [lots, setLots] = useState([{ id: 1 }]);

  const handleCloseLot = () => {
    const nextId = lots.length + 1;
    setLots([...lots, { id: nextId }]);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {lots.map((lot) => (
          <div key={lot.id} className={styles.card}>
            <div className={styles.header}>
              <label className={styles.lotLabel}>Lot No: {lot.id}</label>
              <div className={styles.actions}>
                <Link to="/filingreport">
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

export default FilingLot;
