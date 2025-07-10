// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import { Link } from 'react-router-dom';
// import styles from './FilingLot.module.css';

// const SettingLot = () => {
//   const [lots, setLots] = useState([]);

//   useEffect(() => {
//     const savedLots = JSON.parse(localStorage.getItem("settingLots")) || [];
//     setLots(savedLots);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className={styles.pageWrapper}>
//         <div className={styles.headingg}>Eternity Jewellery Details</div>
//         <div className={styles.details}><strong>Name:</strong> <span>Dhanusha R</span></div>
//         <div className={styles.details}><strong>Phone Number:</strong> <span>9342516726</span></div>
//         <div className={styles.details}><strong>Address:</strong> <span>4/253, Coimbatore</span></div>
//         <hr />
//       </div>

//       <div className={styles.container}>
//         {lots.length === 0 ? (
//           <p style={{ marginLeft: '2rem', marginTop: '1rem' }}>No jobcards yet.</p>
//         ) : (
//           lots.map((lot, index) => (
//             <div key={lot.id} className={styles.card}>
//               <div className={styles.header}>
//                 <label className={styles.lotLabel}> Lot No: {lot.id}</label>
//                 <div className={styles.actions}>
//                   <Link to="/settingreport">
//                     <button className={styles.button}>View</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default SettingLot;


import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SettingLot.module.css';
import { BACKEND_SERVER_URL } from '../../../Config/config';

const SettingLot = () => {
  const { id, name } = useParams();  
  const [userDetails, setUserDetails] = useState(null);
  const [lots, setLots] = useState([{ id: 1 }]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${BACKEND_SERVER_URL}/api/setting/${id}`)
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  const handleCloseLot = () => {
    const nextId = lots.length + 1;
    setLots([...lots, { id: nextId }]);
  };

  return (
    <>
      <Navbar />

      <div className={styles.pageWrapper}>
        <div className={styles.headingg}>Eternity Jewellery Details</div>
        <div className={styles.details}><strong>Name:</strong> <span>{name}</span></div>
        <div className={styles.details}><strong>Phone Number:</strong> <span>{userDetails?.phoneNumber || '-'}</span></div>
        <div className={styles.details}><strong>Address:</strong> <span>{userDetails?.address || '-'}</span></div>
        <hr />
      </div>

      <div className={styles.container}>
        {lots.map((lot) => (
          <div key={lot.id} className={styles.card}>
            <div className={styles.header}>
              <label className={styles.lotLabel}>Lot No: {lot.id}</label>
              <div className={styles.actions}>
              <Link to={`/settingLotDetails/${id}/${encodeURIComponent(name)}`}>
                  <button className={styles.button}>View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SettingLot;

