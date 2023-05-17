import React, { useState } from "react";
import axios from 'axios';

import '../../styles/naween/select.css';

function InsurenceCardDetails({ insurence }) {
  const [status, setStatus] = useState(insurence.status);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  function handleApprove() {
    axios.put(`http://localhost:8090/insurance/${insurence._id}`, { status: 'approved', name: name, mobile: mobile, email: email  })
      .then(res => {
        setStatus('approved');
      })
      .catch(err => {
        console.log(err);
      });
  }
 

  // function handleClose() {
  //   // close the card details page
    
  // }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleMobileChange(e) {
    setMobile(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleClickInsurence(){
    window.location.href = "/insurence-list";
     }

  return (
    <>
    <div className="insurence-card-details">
      
      
      {/* <h3>{insurence.insurenceName}</h3>
      <p>Type: {insurence.insurenceType}</p>
      <p>Years: {insurence.howManyYears}</p>
      <p>Coverage Options: {insurence.cOptions}</p>
      <p>Exclusions and Conditions: {insurence.exAndCond}</p>
      <p>Terms and Conditions: {insurence.termsAndCond}</p>  */}
      <div className="container">
      
      <h3 >{insurence.insurenceName}</h3>
      
      <label 
      style={{ fontWeight: 'bold', marginBottom: '5px' }}
      htmlFor="name">Enter Name:</label><br/>
      <input placeholder="enter your name"
      style={{
        height: '30px',
        width: '100%',
        padding: '5px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
        marginBottom: '10px',
      }}
      type="text" id="name" value={name} onChange={handleNameChange} />

      <label 
      style={{ fontWeight: 'bold', marginBottom: '5px' }}
      htmlFor="mobile">Enter Mobile:</label>
      <input placeholder="enter your contact number"
      style={{
        height: '30px',
        width: '100%',
        padding: '5px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
        marginBottom: '10px',
      }}
      type="number" id="mobile" value={mobile} onChange={handleMobileChange} />

      <label 
      style={{ fontWeight: 'bold', marginBottom: '5px' }}
      htmlFor="email">Enter email:</label>
      <input placeholder="enter your email address"
      style={{
        height: '30px',
        width: '100%',
        padding: '5px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
        marginBottom: '10px',
      }}
      type="email" id="email" value={email} onChange={handleEmailChange} />
      

      {status === 'pending' && (
        <div>
          <button 
          style={{
            height: '30px',
            width: '100px',
            marginTop: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#080663',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleApprove}>Confirm</button>
          <button 
          style={{
            height: '30px',
            width: '100px',
            marginTop: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#080663',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleClickInsurence}>Cancel</button>
        </div>
      )}
      {status === 'approved' && (
        <p className="selected">Selected</p>
      )}
      </div>
      
      
    </div>
    <br/>
    </>
  );
}

export default InsurenceCardDetails;
