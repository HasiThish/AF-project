import React from 'react';
import '../styles/admin_menubar.css';

function VerticalMenu() {
  return (
    <ul class="menu">
      <li><a class="active" href={'/adminHome'}>Dashboard</a></li>
      <li><a  href={'/heritagelist'}>Heritage Places</a></li>
      <li><a href="#news">Users</a></li>
      <li><a href="#contact">Hotels</a></li>
      <li><a href="#about">Insurances</a></li>
    </ul>
  );
}

export default VerticalMenu;
