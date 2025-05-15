import React, { useState } from "react";
import {useNavigate } from "react-router-dom"; 
import "./Master.css";
import MasterCustomer from "./MasterCustomer";
import MasterGoldsmith from "./MasterGoldsmith";
import LogoutIcon from '@mui/icons-material/Logout';
import MasterAddItems from "./MasterAddItems";
import MasterSetting from "./MasterSetting";
import MasterBuffing from "./MasterBuffing";
import MasterFiling from "./MasterFiling";
import logo from '../../assets/logo.jpg';
import MasterPurchaseStock from "./MasterPurchaseStock";


const Master = () => {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showCastingDetails, setShowCastingDetails] = useState(false);
  const [showFilingDetails,setShowFilingDetails] = useState(false);
  const [showSettingDetails, setShowSettingDetails] = useState(false);
  const [showBuffingDetails, setShowBuffingDetails] = useState(false);
  const [showAddItemsDetails, setShowAddItemsDetails] = useState(false);
  const [showPurchaseDetails,setShowPurchaseDetails] = useState(false)

  const navigate = useNavigate(); 

  const handleAddCustomerClick = () => {
    setShowCustomerDetails(true);
    setShowGoldsmithDetails(false);
    setShowAddItemsDetails(false);
    setShowSettingDetails(false)
    setShowCastingDetails(false);
    setShowFilingDetails(false);
    setShowAddItemsDetails(false);
    setShowPurchaseDetails(false);
  };

  const handleAddCasting = () => {
    setShowCastingDetails(true);
    setShowCustomerDetails(false);
    setShowAddItemsDetails(false);
    setShowSettingDetails(false)
    setShowFilingDetails(false);
    setShowBuffingDetails(false)
    setShowAddItemsDetails(false);
    setShowPurchaseDetails(false);
  };

  const handleAddFiling =()=>{
    setShowFilingDetails(true);
    setShowCastingDetails(false);
    setShowCustomerDetails(false);
    setShowAddItemsDetails(false);
    setShowSettingDetails(false)
    setShowAddItemsDetails(false);
    setShowPurchaseDetails(false);

  }

  const handleAddSetting=()=>{
    setShowSettingDetails(true)
    setShowCustomerDetails(false);
    setShowCastingDetails(false);
    setShowFilingDetails(false);
    setShowBuffingDetails(false)
    setShowAddItemsDetails(false);
    setShowPurchaseDetails(false);
  }

  const handleAddBuffing = ()=>{
    setShowBuffingDetails(true)
    setShowSettingDetails(false)
    setShowCustomerDetails(false);
    setShowGoldsmithDetails(false);
    setShowFilingDetails(false);
    setShowCastingDetails(false);
    setShowAddItemsDetails(false);
    setShowPurchaseDetails(false);
  }

  const handleAddItemsClick = () => {
    setShowAddItemsDetails(true);
    setShowCustomerDetails(false);
    setShowGoldsmithDetails(false);
    setShowBuffingDetails(false);
    setShowSettingDetails(false)
    setShowFilingDetails(false);
    setShowCastingDetails(false);
    setShowPurchaseDetails(false);
  };

  const handleStockClick = () => {
    setShowPurchaseDetails(true)
    setShowCustomerDetails(false);
    setShowGoldsmithDetails(false);
    setShowBuffingDetails(false);
    setShowSettingDetails(false)
    setShowFilingDetails(false);
    setShowCastingDetails(false);
  };


  const handleLogout = () => {
 
    navigate("/"); 
  };

  return (

    
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav
        style={{
          background: "linear-gradient(90deg, #c1827e 0%, #b8326e 100%)",
          padding: "15px",
          color: "white",
          boxShadow: "0 2px 4px rgba(255, 255, 255, 0.1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            justifyContent: "center",
          }}
        >
          
          <img src={logo} alt="Logo" className="master-logo" />
         
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleAddCustomerClick}
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Customer
            </button>
          </li>
          
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleAddCasting}
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Casting/Melting
            </button>
          </li>
        
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleAddFiling}
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Filing
            </button>
          </li>
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleAddSetting} 
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Setting
            </button>
          </li>
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleAddBuffing}
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Buffing
            </button>
          </li>
          
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleAddItemsClick}
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Items
            </button>
          </li>
          <li style={{ marginRight: "20px" }}>
            <button
              onClick={handleStockClick}
              className="nav-button"
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a33768")}
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Purchase Stock
            </button>
          </li>
        </ul>
      </nav>
      {showCustomerDetails && <MasterCustomer />}
      {showCastingDetails && <MasterGoldsmith />}
      {showFilingDetails && <MasterFiling/>}
      {showAddItemsDetails && <MasterAddItems/>}
      {showSettingDetails && <MasterSetting/>}
      {showBuffingDetails && <MasterBuffing/>}
      {showPurchaseDetails && <MasterPurchaseStock/>}
      
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#b8326e",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          position: "absolute",
          top: "15px", 
          right: "15px", 
          cursor: "pointer",
          fontWeight: "bold",
          fontSize:"1rem",
         
        }}
      >
        <LogoutIcon />
      </button>
    </div>
  );
};

export default Master;
