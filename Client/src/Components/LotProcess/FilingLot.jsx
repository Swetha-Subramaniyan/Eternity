import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import styles from './FilingLot.module.css'


const FilingLot = () => {
  const [lots, setLots] = useState([{ id: 1 }]);

  const handleCloseLot = () => {
    const nextId = lots.length + 1;
    setLots([...lots, { id: nextId }]);
  };

  return (
    <>
      <Navbar />

 <div className={styles.pageWrapper}>
  <div className={styles.headingg}>Eternity Jewellery Details</div>
  <div className={styles.details}><strong>Name:</strong> <span>Dhanusha R</span></div>
  <div className={styles.details}><strong>Phone Number:</strong> <span>9342516726</span></div>
  <div className={styles.details}><strong>Address:</strong> <span>4/253, Coimbatore</span></div>
  <hr />
</div> 

      <div className={styles.container}>
        {lots.map((lot) => (
          <div key={lot.id} className={styles.card}>
            <div className={styles.header}>
              <label className={styles.lotLabel}> Lot No: {lot.id}</label>
              <div className={styles.actions}>
                <Link to="/filingreport">
                  <button className={styles.button}>
                    View
                  </button>
                </Link>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilingLot;
