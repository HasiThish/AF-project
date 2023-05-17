import React, { useState, useEffect } from "react";
import axios from 'axios';
import jsPDF from "jspdf";
import "jspdf-autotable";



function ApprovedInsurances() {
  const [insurences, setInsurences] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/insurance/approved")
    .then(res => {
      setInsurences(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [
        [
          "Name",
          "Type",
          "Years",
          "Status",
          "Owner Name",
          "Mobile Number",
          "Email",
        ],
      ],
      body: insurences.map((insurence) => [
        insurence.insurenceName,
        insurence.insurenceType,
        insurence.howManyYears,
        insurence.status,
        insurence.name,
        insurence.mobile,
        insurence.email,
      ]),
    });
    doc.save("report.pdf");
  };


  return (
    <>
    
    <div >
    <div >
      <br/><br/><br/>
    <div
     style={{ 
      margin: "0",
      color: "#080663",
      textAlign: "center",
      boxShadow: "2px 6px #080663"
      

      }}>
        <h1 >Selected Insurances</h1>
          </div>
          <br/>
          <button
          style={{
            width: "10%",
            height: "25px",
            borderRadius: "10px",
            border: "2px solid #080663",
            backgroundColor: "white",
            cursor: "pointer",
            float: "right",
          }}
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
        <br/><br/>
      <table style={{ width: "95%", margin: "auto" }}>
        <thead style={{ backgroundColor: "#080663", height: "40px",textAlign: "center" }}>
          <tr style={{color: "white"}}>
            <th>Name</th>
            <th>Type</th>
            <th>Years</th>
            
            
            <th>Status</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {insurences.map((insurence, index) => (
            <tr key={index}
            style={{ backgroundColor: "#F0FFFF", height: "40px"  }}>
              <td>{insurence.insurenceName}</td>
              <td>{insurence.insurenceType}</td>
              <td>{insurence.howManyYears}</td>
              
             
              <td>{insurence.status}</td>
              <td>{insurence.name}</td>
              <td>{insurence.mobile}</td>
              <td>{insurence.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default ApprovedInsurances;
