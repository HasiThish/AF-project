import React, { useState, useEffect } from "react";
import axios from "axios";


import '../../../styles/naween/logo.css'

function InsurenceListAdmin() {
  const [insurences, setinsurences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchInsurence() {
      const response = await axios.get("http://localhost:8090/insurance");
      setinsurences(response.data);
    }
    fetchInsurence();
  }, []);

  
  // function handleDeleteInsurence(id) {
    
  //     axios.delete(`http://localhost:8090/insurance/${id}`).then(() => {
        
  //       const updatedInsurance = insurences.filter((insurence) => insurence._id !== id);
  //       setinsurences(updatedInsurance);
        
  //     });
  //   }
  function handleDeleteInsurence(id) {
    const alertDiv = document.createElement("div");
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.padding = "1em";
    alertDiv.style.background = "#333";
    alertDiv.style.color = "white";
    alertDiv.style.fontWeight = "bold";
    alertDiv.style.textAlign = "center";
    alertDiv.style.border = "2px solid black";
    alertDiv.style.borderRadius = "10px";
    alertDiv.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    alertDiv.innerHTML = `
      <p>Are you sure you want to delete this insurance?</p>
      <button id="delete-yes" style="background-color: red; color: white; margin-right: 1em;">Yes</button>
      <button id="delete-no" style="background-color: green; color: white;">No</button>
    `;
    document.body.appendChild(alertDiv);
  
    document.getElementById("delete-yes").addEventListener("click", () => {
      axios.delete(`http://localhost:8090/insurance/${id}`).then(() => {
        const updatedInsurance = insurences.filter((insurence) => insurence._id !== id);
        setinsurences(updatedInsurance);
  
        const successAlert = document.createElement("div");
        successAlert.innerText = "Insurance deleted!";
        successAlert.style.position = "fixed";
        successAlert.style.top = "50%";
        successAlert.style.left = "50%";
        successAlert.style.transform = "translate(-50%, -50%)";
        successAlert.style.padding = "1em";
        successAlert.style.background = "#333";
        successAlert.style.color = "white";
        successAlert.style.fontWeight = "bold";
        successAlert.style.textAlign = "center";
        successAlert.style.borderRadius = "10px";
        successAlert.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
        document.body.appendChild(successAlert);
  
        setTimeout(() => {
          successAlert.remove();
        }, 1000);
      });
  
      alertDiv.remove();
    });
  
    document.getElementById("delete-no").addEventListener("click", () => {
      alertDiv.remove();
    });
  }
  

  
  function handleClickAddInsurencet() {
    window.location.href = "/add-insurence";
    
  }

  const [showExCond, setShowExCond] = useState({});
  const [showTermsCond, setShowTermsCond] = useState({});

  const toggleExCond = (id) => {
    setShowExCond({ ...showExCond, [id]: !showExCond[id] });
  };

  const toggleTermsCond = (id) => {
    setShowTermsCond({ ...showTermsCond, [id]: !showTermsCond[id] });
  };
 
 
  const filteredInsurence = insurences.filter((insurence) =>
  insurence.insurenceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    
    <br/><br/>
    <div >
    
    <div
     style={{ 
      margin: "0",
      color: "#080663",
      textAlign: "center",
      boxShadow: "2px 6px #080663"
      }}>
        <h1 >Insurence Details</h1>
          </div>
      

      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
            height: "25px",
            borderRadius: "10px",
            border: "2px solid #080663",
          }}
        />
        <button
          style={{
            width: "10%",
            height: "30px",
            borderRadius: "10px",
            border: "2px solid #080663",
            backgroundColor: "#080663",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleClickAddInsurencet}
        >
          + Add Insurence
        </button>
      </div>
      <br />
      <table style={{ width: "95%", margin: "auto" }}>
        <thead style={{ backgroundColor: "#080663", height: "40px" ,textAlign: "center"}}>
          <tr
          style={{color: "white"}}
          >
            <th>Insurence Name</th>
            <th>Insurence Type</th>
            <th>How Many Years</th>
            <th>C Options</th>
            <th>EX And Cond</th>
            <th>Terms And Cond</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {filteredInsurence.map((insurence) => (
            <tr
              key={insurence._id}
              style={{ backgroundColor: "#F0FFFF", height: "40px"  }}
            >
              <td>{insurence.insurenceName}</td>
              <td>{insurence.insurenceType}</td>
              <td>{insurence.howManyYears}</td>
              <td>{insurence.cOptions}</td>
              <td>
              {insurence.exAndCond
                .split(' ')
                .slice(0, 2)
                .join(' ')}
              {insurence.exAndCond.split(' ').length > 2 && (
                <>
                  {!showExCond[insurence._id] && (
                    <span
                      style={{ color: '#080663', cursor: 'pointer' }}
                      onClick={() => toggleExCond(insurence._id)}
                    >
                      ...Show More
                    </span>
                  )}
                  {showExCond[insurence._id] && (
                    <span
                      style={{ color: '#080663', cursor: 'pointer' }}
                      onClick={() => toggleExCond(insurence._id)}
                    >
                      ...Show Less
                    </span>
                  )}
                </>
              )}
            </td>
            <td>
              {insurence.termsAndCond
                .split(' ')
                .slice(0, 2)
                .join(' ')}
              {insurence.termsAndCond.split(' ').length > 2 && (
                <>
                  {!showTermsCond[insurence._id] && (
                    <span
                      style={{ color: '#080663', cursor: 'pointer' }}
                      onClick={() => toggleTermsCond(insurence._id)}
                    >
                      ...Show More
                    </span>
                  )}
                  {showTermsCond[insurence._id] && (
                    <span
                      style={{ color: '#080663', cursor: 'pointer' }}
                      onClick={() => toggleTermsCond(insurence._id)}
                    >
                      ...Show Less
                    </span>
                  )}
                </>
              )}
            </td>
              <td
                style={{
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => handleDeleteInsurence(insurence._id)}
                  style={{
                    width: "80%",
                    height: "25px",
                    borderRadius: "10px",
                    border: "2px solid #FF3131",
                    backgroundColor: "#FF3131",
                    cursor: "pointer",
                    color: "white"
                  }}
                >
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    {/* <Footer/> */}
    </div>
    </>
  );
}

export default InsurenceListAdmin;
