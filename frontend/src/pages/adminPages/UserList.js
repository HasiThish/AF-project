import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../admin.css'
import '../heritagelist.css'
import Edit from '../images/edit.png'
import Delete from '../images/delete.jpeg'
import AdminMenu from './Admin_menu'

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    
    if(confirmDelete){
      try {
        await axios.delete(`http://localhost:4000/api/users/${userId}`);
        getUsers(); // Refresh user list
        alert('User deleted successfully!');
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }

  };

  return (
    <div>
      <AdminMenu />
      <div className='adminContainer'>
      <h2>User List</h2>
      <a href={'/addadmin'}><button className="signin-btn">Add An Admin</button></a><br/>
      <div>
            <table border={1}>
            
                <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                {users.map((user, index) =>(
                    <tr key={user._id} >
                        <td>{index + 1}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.nic}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td>
                            <a href={`/edit/${user._id}`}><button ><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}} />   </button></a>
                            <button onClick={() => handleDelete(user._id)}><img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></button>
                        </td>
                    </tr>
                ))}
                
            </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
