import React, { useState, useEffect } from "react";
import axios from 'axios';
import InsurenceCardDetails from '../../pages/naween/insurenceCardDetails';
import '../../styles/naween/cardInsurence.css'



function InsurenceList() {
  const [insurences, setInsurences] = useState([]);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [selectedInsurence, setSelectedInsurence] = useState(null);

  function handleRequest(insurence) {
    setSelectedInsurence(insurence);
    setShowCardDetails(true);
  }

  function handleClose() {
    setShowCardDetails(false);
  }

  useEffect(() => {
    axios.get("http://localhost:8090/insurance")
    .then(res => {
      setInsurences(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
    
    <div >
    <div
     style={{ 
      margin: "0",
      color: "black",
      textAlign: "center",
      

      }}>
        <h1 >Choose Insurance</h1>
          </div>
    <div className="insurence-list">
      {insurences.map((insurence, index) => (
        <div className="insurence-card" key={index} style={{ 
          backgroundImage: `url(data:image/png;base64,${insurence.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          }}>
          <h1>{insurence.insurenceName}</h1>
          <p>Type: {insurence.insurenceType}</p> 
          <p>Years: {insurence.howManyYears}</p>
          <p>Coverage Options: {insurence.cOptions}</p>
          <p>Exclusions and Conditions: {insurence.exAndCond}</p>
          <p>Terms and Conditions: {insurence.termsAndCond}</p>
          {insurence.status === 'pending' && (
            <button className="request-button"
            onClick={() => handleRequest(insurence)}>Request</button>
          )}
          {insurence.status === 'approved' && (
            <p className="selected">Selected</p>
          )}
          <p>see more...</p>
        </div>
      ))}
      {showCardDetails && (
        <InsurenceCardDetails insurence={selectedInsurence} handleClose={handleClose} />
      )}
    </div>
    </div>
    </>
  );
}

export default InsurenceList;
