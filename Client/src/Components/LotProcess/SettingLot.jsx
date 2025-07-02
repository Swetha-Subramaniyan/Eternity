import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import styles from './FilingLot.module.css';

const SettingLot = () => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    const savedLots = JSON.parse(localStorage.getItem("settingLots")) || [];
    setLots(savedLots);
  }, []);

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
        {lots.length === 0 ? (
          <p style={{ marginLeft: '2rem', marginTop: '1rem' }}>No jobcards yet.</p>
        ) : (
          lots.map((lot, index) => (
            <div key={lot.id} className={styles.card}>
              <div className={styles.header}>
                <label className={styles.lotLabel}> Lot No: {lot.id}</label>
                <div className={styles.actions}>
                  <Link to="/settingreport">
                    <button className={styles.button}>View</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SettingLot;
