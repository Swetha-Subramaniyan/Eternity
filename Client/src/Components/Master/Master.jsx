// import React, { useState } from "react";
// import {Link, useNavigate } from "react-router-dom"; 
// import "./Master.css";
// import MasterCustomer from "./MasterCustomer";
// import MasterGoldsmith from "./MasterGoldsmith";
// import LogoutIcon from '@mui/icons-material/Logout';
// import MasterAddItems from "./MasterAddItems";
// import MasterSetting from "./MasterSetting";
// import MasterBuffing from "./MasterBuffing";
// import MasterFiling from "./MasterFiling";
// import logo from '../../assets/logo.jpg';
// import MasterPurchaseStock from "./MasterPurchaseStock";


// const Master = () => {
//   const [showCustomerDetails, setShowCustomerDetails] = useState(false);
//   const [showCastingDetails, setShowCastingDetails] = useState(false);
//   const [showFilingDetails,setShowFilingDetails] = useState(false);
//   const [showSettingDetails, setShowSettingDetails] = useState(false);
//   const [showBuffingDetails, setShowBuffingDetails] = useState(false);
//   const [showAddItemsDetails, setShowAddItemsDetails] = useState(false);
//   const [showPurchaseDetails,setShowPurchaseDetails] = useState(false)

//   const navigate = useNavigate(); 

//   const handleAddCustomerClick = () => {
//     setShowCustomerDetails(true);
//     setShowGoldsmithDetails(false);
//     setShowAddItemsDetails(false);
//     setShowSettingDetails(false)
//     setShowCastingDetails(false);
//     setShowFilingDetails(false);
//     setShowAddItemsDetails(false);
//     setShowPurchaseDetails(false);
//   };

//   const handleAddCasting = () => {
//     setShowCastingDetails(true);
//     setShowCustomerDetails(false);
//     setShowAddItemsDetails(false);
//     setShowSettingDetails(false)
//     setShowFilingDetails(false);
//     setShowBuffingDetails(false)
//     setShowAddItemsDetails(false);
//     setShowPurchaseDetails(false);
//   };

//   const handleAddFiling =()=>{
//     setShowFilingDetails(true);
//     setShowCastingDetails(false);
//     setShowCustomerDetails(false);
//     setShowAddItemsDetails(false);
//     setShowSettingDetails(false)
//     setShowAddItemsDetails(false);
//     setShowPurchaseDetails(false);

//   }

//   const handleAddSetting=()=>{
//     setShowSettingDetails(true)
//     setShowCustomerDetails(false);
//     setShowCastingDetails(false);
//     setShowFilingDetails(false);
//     setShowBuffingDetails(false)
//     setShowAddItemsDetails(false);
//     setShowPurchaseDetails(false);
//   }

//   const handleAddBuffing = ()=>{
//     setShowBuffingDetails(true)
//     setShowSettingDetails(false)
//     setShowCustomerDetails(false);
//     setShowGoldsmithDetails(false);
//     setShowFilingDetails(false);
//     setShowCastingDetails(false);
//     setShowAddItemsDetails(false);
//     setShowPurchaseDetails(false);
//   }

//   const handleAddItemsClick = () => {
//     setShowAddItemsDetails(true);
//     setShowCustomerDetails(false);
//     setShowGoldsmithDetails(false);
//     setShowBuffingDetails(false);
//     setShowSettingDetails(false)
//     setShowFilingDetails(false);
//     setShowCastingDetails(false);
//     setShowPurchaseDetails(false);
//   };

//   const handleStockClick = () => {
//     setShowPurchaseDetails(true)
//     setShowCustomerDetails(false);
//     setShowGoldsmithDetails(false);
//     setShowBuffingDetails(false);
//     setShowSettingDetails(false)
//     setShowFilingDetails(false);
//     setShowCastingDetails(false);
//   };


//   const handleLogout = () => {
 
//     navigate("/"); 
//   };

//   return (

    
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       <nav
//         style={{
//           background: "linear-gradient(90deg, #c1827e 0%, #b8326e 100%)",
//           background: "#DAA520",
//           padding: "13px",
//           color: "white",
//           boxShadow: "0 2px 4px rgba(255, 255, 255, 0.1)",
//         }}
//       >
//         <ul
//           style={{
//             listStyle: "none",
//             display: "flex",
//             margin: 0,
//             padding: 0,
//             justifyContent: "center",
//           }}
//         >
          
//           <img src={logo} alt="Logo" className="master-logo" />
         
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleAddCustomerClick}
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#91720c")}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Customer
//             </button>
//           </li>
          
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleAddCasting}
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#91720c")}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Casting/Melting
//             </button>
//           </li>
        
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleAddFiling}
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.background='#ad8f2b ')}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Filing
//             </button>
//           </li>
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleAddSetting} 
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#91720c")}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Setting
//             </button>
//           </li>
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleAddBuffing}
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#91720c")}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Buffing
//             </button>
//           </li>
          
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleAddItemsClick}
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#91720c")}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Items
//             </button>
//           </li>
//           <li style={{ marginRight: "20px" }}>
//             <button
//               onClick={handleStockClick}
//               className="nav-button"
//               onMouseOver={(e) => (e.target.style.backgroundColor = "#91720c")}
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "transparent")
//               }
//             >
//               Purchase Stock
//             </button>
//           </li>
//         </ul>
//       </nav>
//       {showCustomerDetails && <MasterCustomer />}
//       {showCastingDetails && <MasterGoldsmith />}
//       {showFilingDetails && <MasterFiling/>}
//       {showAddItemsDetails && <MasterAddItems/>}
//       {showSettingDetails && <MasterSetting/>}
//       {showBuffingDetails && <MasterBuffing/>}
//       {showPurchaseDetails && <MasterPurchaseStock/>}
      
//       <button
//         onClick={handleLogout}
//         style={{
//           backgroundColor: "#b8326e",
//           background: "#DAA520",
//           color: "white",
//           border: "none",
//           padding: "8px 12px",
//           borderRadius: "4px",
//           position: "absolute",
//           top: "15px", 
//           right: "15px", 
//           cursor: "pointer",
//           fontWeight: "bold",
//           fontSize:"1rem",
         
//         }}
//       >
//         <LogoutIcon />
//       </button>
//       <Link to={'/mastercustomer'}> 
//       <div> jjj</div> </Link>
//     </div>
//   );
// };

// export default Master;









// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.jpg';
// import LogoutIcon from '@mui/icons-material/Logout';
// import './Master.css'; // Uses the same styles as Navbar.css

// const Master = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/");
//   }

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//       </div>

//       <ul className="nav-list"> 
//         <li className='nav-item'>
//           <a href="/customer" className='nav-link'>Master</a>
//         </li>
//         <li className='nav-item'>
//           <a href="/mastercustomer" className='nav-link'>Customer</a>
//         </li>
//         <li className='nav-item'>
//           <a href="/mastercasting" className='nav-link'>Casting/Melting</a>
//         </li>
//         <li className='nav-item'>
//           <a href="/masterfiling" className='nav-link'>Filing</a>
//         </li>
//         <li className='nav-item'>
//           <a href="/mastersetting" className='nav-link'>Setting</a>
//         </li>
//         <li className='nav-item'>
//           <a href="/masterbuffing" className='nav-link'>Buffing</a>
//         </li>
//         <li className='nav-item'>
//           <a href="masteritems" className='nav-link'>Items</a>
//         </li>
//         <li className='nav-item'>
//           <a href="masterpurchasestock" className='nav-link'>PStock</a>
//         </li>
//       </ul>

//       <div className="navbar-right">     
//         <button
//           onClick={handleLogout}
//           className="logout-button"
//           title="Logout"
//         >
//           <LogoutIcon />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Master;



import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import './Master.css';

const Master = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <ul className="nav-list"> 
        <li className='nav-item'>
          <a href="/customer" className={`nav-link ${isActive('/customer') ? 'active' : ''}`}>Masterr</a>
        </li>
        <li className='nav-item'>
          <a href="/mastercustomer" className={`nav-link ${isActive('/mastercustomer') ? 'active' : ''}`}>Customer</a>
        </li>
        <li className='nav-item'>
          <a href="/mastercasting" className={`nav-link ${isActive('/mastercasting') ? 'active' : ''}`}>Casting/Melting</a>
        </li>
        <li className='nav-item'>
          <a href="/masterfiling" className={`nav-link ${isActive('/masterfiling') ? 'active' : ''}`}>Filing</a>
        </li>
        <li className='nav-item'>
          <a href="/mastersetting" className={`nav-link ${isActive('/mastersetting') ? 'active' : ''}`}>Setting</a>
        </li>
        <li className='nav-item'>
          <a href="/masterbuffing" className={`nav-link ${isActive('/masterbuffing') ? 'active' : ''}`}>Buffing</a>
        </li>
        <li className='nav-item'>
          <a href="/masteritems" className={`nav-link ${isActive('/masteritems') ? 'active' : ''}`}>Items</a>
        </li>
        <li className='nav-item'>
          <a href="/masterpurchasestock" className={`nav-link ${isActive('/masterpurchasestock') ? 'active' : ''}`}>PStock</a>
        </li>
      </ul>

      <div className="navbar-right">     
        <button
          onClick={handleLogout}
          className="logout-button"
          title="Logout"
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

export default Master;
