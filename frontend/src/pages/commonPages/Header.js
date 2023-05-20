import React, { useState } from 'react';
import '../header.css';
import logo from '../images/logo.jpeg';
import user from '../images/user.png'

function Header() {
  const [authenticated, setAuthenticated] = useState(true); // add state to keep track of authentication status

  
  const handleLogout = () => {
    setAuthenticated(false); // set authentication status to false on logout
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Website Logo" />
          <h1 className="title">Cultural Heritage Site</h1>
        </div>
        <div className="menu-container">
          <nav>
            <ul>
              <li><a href={'/'}>Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Discover</a></li>
              <li><a href={'/hotelsgrid'}>Hotels</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href={'/bookingslist'}>Reservations</a></li>
            </ul>
          </nav>
        </div>
        <div className="auth-container">
          {authenticated ? ( // display logout button if authenticated
            <>
              <button className="signin-btn" onClick={handleLogout}>Sign Out</button>
              <div className="profile-container">
                <img src={user} alt="Profile Image" />
              </div>
            </>
          ) : ( // display signin and signup buttons if not authenticated
            <>
              <a href={'/home'}><button className="signin-btn">Sign In</button></a>
              <a href={'/signup'}><button className="signup-btn">Sign Up</button></a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
