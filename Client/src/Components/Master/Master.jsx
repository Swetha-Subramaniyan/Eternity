import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import './Master.css';
import HomeIcon from '@mui/icons-material/Home';

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
          <a href="/customer" className={`nav-link ${isActive('/customer') ? 'active' : ''}`}><HomeIcon/> </a>
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
        <li className='nav-item'> 
          <a href='/mastersupplier' className={`nav-link ${isActive('/mastersupplier') ? 'active' : ''}`}> Supplier </a>
        </li>
        <li className='nav-item'> 
          <a href='/masterjewel' className={`nav-link ${isActive('/masterjewel') ? 'active' : ''}`}> Jewel Stock </a>
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
