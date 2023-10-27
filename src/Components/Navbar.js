import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';
import DataContext from '../Context/Context';

const Navbar = () => {
  const { loadingEffect } = useContext(DataContext);
  let currentPage = useLocation();
  currentPage = currentPage.pathname.substring(1);
  currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }

  return (
    <nav className='Nav'>
      <div className='titleWithNav'>
        <p className='logo'><Link to='/'>Democracy Roleplay</Link></p>
        <div className='responsiveNav'>
          <div className='burger-icon' onClick={toggleLinks}>
            { showLinks ? <FontAwesomeIcon className='faIcon' size='2x' icon={faX} /> : <FontAwesomeIcon size='2x' className='faIcon' icon={faBars} /> }
          </div>
        </div>
      </div>
      <ul id='ulNavbar' className={showLinks ? 'active' : 'inactive'}>
            <li className='active'><Link to='/' onClick={loadingEffect && toggleLinks} style={currentPage === 'Home' ? { color: '#3ca918' } : null}>Home</Link></li>
            <li className='active'><Link to='/Apply'  style={currentPage === 'Apply' ? { color: '#3ca918' } : null}>Apply Here</Link></li>
            <li className='active'><Link to='/ContactUs' style={currentPage === 'ContactUs' ? { color: '#3ca918' } : null}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
