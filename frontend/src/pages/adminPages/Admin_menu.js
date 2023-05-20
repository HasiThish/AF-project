import React from 'react';
import '../admin_menubar.css';
import { useLocation } from 'react-router-dom';

function VerticalMenu() {
  const location = useLocation();

  return (
    <ul class="menu">
      <li><a className={location.pathname === '/adminHome' ? 'active' : ''} href={'/adminHome'}>Dashboard</a></li>
      <li><a className={location.pathname === '/heritagelist' ? 'active' : ''} href={'/heritagelist'}>Heritage Places</a></li>
      <li><a className={location.pathname === '/users' ? 'active' : ''}href={'/users'}>Users</a></li>
      <li><a href="#contact">Hotels</a></li>
      <li><a href="#about">Insurances</a></li>
    </ul>
  );
}

export default VerticalMenu;
