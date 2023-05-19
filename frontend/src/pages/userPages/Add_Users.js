import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [nic, setNIC] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Set default value to 'user'

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/users', {
        fname,
        lname,
        nic,
        email,
        password,
        confirmPassword,
        role,
      });
      console.log(response.data);
      alert('User added successfully!');

          // Reset form values
          setFname('');
          setLname('');
          setNIC('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          
      // Handle success or redirect to user list
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div class='container'>
      <h1>Sign Up Here..</h1>
      <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        required
      />

      <label>Last Name:</label>
      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        required
      />

      <label>NIC:</label>
      <input
        type="text"
        value={nic}
        onChange={(e) => setNIC(e.target.value)}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {/* The role field will always have the value 'user' */}
      <input type="hidden" value="user" />
      <br/><br/>
      <button type="submit" className='submit'>Create User</button>
    </form>
    </div>
  );
};

export default CreateUserForm;
