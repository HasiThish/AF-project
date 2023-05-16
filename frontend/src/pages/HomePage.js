import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import AdminHome from './AdminHome';
import UserHome from './UserHome';
import HeritagePlaces from './view_places';

function HomePage() {
  const [role, setRole] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const { data } = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      setRole(data.role);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setRole('');
  };

  let content;

  switch (role) {
    case 'admin':
      content = <AdminHome handleLogout={handleLogout} />;
      break;
    case 'user':
      content = <UserHome handleLogout={handleLogout} />;
      break;
    default:
      content = <Login handleLogin={handleLogin} />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default HomePage;
