import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './FilingLot.module.css';
import { BACKEND_SERVER_URL } from '../../../Config/config';

const FilingLot = () => {
  const { id, name } = useParams();  
  const [userDetails, setUserDetails] = useState(null);
  const [lots, setLots] = useState([{ id: 1 }]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${BACKEND_SERVER_URL}/api/filing/${id}`)
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
              <Link to={`/filingLotDetails/${id}/${encodeURIComponent(name)}`}>

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

export default FilingLot;
