import React from 'react';
import AdminMenu from './Admin_menu'
import '../admin.css'
import HeritagePlaces from '../userPages/view_places';

function AdminHome({ handleLogout }) {
  return (
    <div>
      <AdminMenu />
      
      <div className='adminContainer'>
      <h1>Welcome!</h1>
        <HeritagePlaces/>
      </div>
    </div>
  );
}

export default AdminHome;
