import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminMenu from './Admin_menu'

const EditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    nic: '',
    email: '',
    password: '',
    role: ''
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/users/${id}`);
      setUserData(response.data.user);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/users/${id}`, userData);
      alert('User details updated successfully!');
      // Handle success or navigate back to user list
      navigate('/users');
      console.log(userData); // Navigate back to the User List page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const isUserRole = userData.role === 'user';

  return (
    <div>
        <AdminMenu/>
        <div className='adminContainer'>
        <h2>Edit User Details</h2>
      <div class='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="fname" value={userData.fname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" name="lname" value={userData.lname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="nic">NIC:</label>
          <input type="text" name="nic" value={userData.nic} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        {!isUserRole && ( // Render password input only if the role is not 'user'
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
              </div>
            )}
        <div>

        <label htmlFor="password">Role:</label>
          <input type="text" name="role" value={userData.role}  disabled/>
        </div><br/><br/>
        <button type="submit" class='submit'>Update</button>
      </form>
      </div>
        </div>
    </div>
  );
};

export default EditForm;
