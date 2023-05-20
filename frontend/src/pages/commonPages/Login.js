import React, { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import '../login.css'

function Login({ handleLogin }) { // add setAuthenticated as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setAuthenticated(true); // set authentication status to true
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}className='form1'>
          <h1>Log In Here!</h1>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div><br/><br/>
          <button type="submit" className='submit'>Login</button>
        </form>
      </div>
  );
}

export default Login;
