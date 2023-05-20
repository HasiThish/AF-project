import React, { useState, useEffect } from "react";
import axios from "axios";



function VehicleListAdmin() {
  const [vehicles, setinvehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchVehicle() {
      const response = await axios.get("http://localhost:8090/vehicle");
      setinvehicles(response.data);
    }
    fetchVehicle();
  }, []);

  
  // function handleDeleteVehicle(id) {
  //     axios.delete(`http://localhost:8090/vehicle/${id}`).then(() => {
        
  //       const updatedVehicle = vehicles.filter((vehicle) => vehicle._id !== id);
  //       setinvehicles(updatedVehicle);
  //        });
  //  }
  function handleDeleteVehicle(id) {
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
      <p>Are you sure you want to delete this vehicle?</p>
      <button id="delete-yes" style="background-color: red; color: white; margin-right: 1em;">Yes</button>
      <button id="delete-no" style="background-color: green; color: white;">No</button>
    `;
    document.body.appendChild(alertDiv);
  
    document.getElementById("delete-yes").addEventListener("click", () => {
      axios.delete(`http://localhost:8090/vehicle/${id}`).then(() => {
        const updatedVehicle = vehicles.filter((vehicle) => vehicle._id !== id);
        setinvehicles(updatedVehicle);
  
        const successAlert = document.createElement("div");
        successAlert.innerText = "Vehicle deleted!";
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
  

  function handleClickAddVehicle() {
    window.location.href = "/add-vehcile";
    
  }
  const [showTC, setShowTC] = useState({});

  const toggleTC = (id) => {
    setShowTC({ ...showTC, [id]: !showTC[id] });
  };
 
  const filteredVehicles = vehicles.filter((vehicle) =>
  vehicle.vehicleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
   
    <br/><br/>
    
    
    <div
     style={{ 
      margin: "0",
      color: "#080663",
      textAlign: "center",
      boxShadow: "2px 6px #080663"

      }}>
        <h1 >Vehicle Details</h1>
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
          onClick={handleClickAddVehicle}
        >
          + Add Vehicle
        </button>
      </div>
      <br />
      <table style={{ width: "95%", margin: "auto" }}>
        <thead style={{ backgroundColor: "#080663", height: "40px", textAlign: "center" }}>
          <tr
          style={{color: "white"}}
          >
            <th>Vehicle Name</th>
            <th>Vehicle Type</th>
            <th>Passengers</th>
            <th>Per Day (Km)</th>
            <th>Vehicle Terms And Cond</th>
            <th>Owner Name</th>
            <th>Owner Email</th>
            <th>Nic</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {filteredVehicles.map((vehicle) => (
            <tr
              key={vehicle._id}
              style={{ backgroundColor: "#F0FFFF", height: "40px"  }}
            >
              <td>{vehicle.vehicleName}</td>
              <td>{vehicle.vehicleType}</td>
              <td>{vehicle.passengers}</td>
              <td>{vehicle.perDayKm}</td>
              <td>
              {vehicle.vTermsAndCond
                .split(' ')
                .slice(0, 2)
                .join(' ')}
              {vehicle.vTermsAndCond.split(' ').length > 2 && (
                <>
                  {!showTC[vehicle._id] && (
                    <span
                      style={{ color: '#080663', cursor: 'pointer' }}
                      onClick={() => toggleTC(vehicle._id)}
                    >
                      ...Show More
                    </span>
                  )}
                  {showTC[vehicle._id] && (
                    <span
                      style={{ color: '#080663', cursor: 'pointer' }}
                      onClick={() => toggleTC(vehicle._id)}
                    >
                      ...Show Less
                    </span>
                  )}
                </>
              )}
            </td>
              <td>{vehicle.ownerName}</td>
              <td>{vehicle.ownerEmail}</td>
              <td>{vehicle.nic}</td>
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
                  onClick={() => handleDeleteVehicle(vehicle._id)}
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
    </>
  );
}

export default VehicleListAdmin;
