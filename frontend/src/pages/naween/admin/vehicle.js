import React, { useState, useEffect } from "react";

import axios from 'axios';

import '../../../styles/naween/formV.css'

function AddVehicle() {
  const [vehicleName, setvehicleName] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const [passengers, setpassengers] = useState("");
  const [perDayKm, setperDayKm] = useState("");
  const [vTermsAndCond, setvTermsAndCond] = useState("");
  const [ownerName, setownerName] = useState("");
  const [ownerEmail, setownerEmail] = useState("");
  const [nic, setnic] = useState("");
  const [image, setImage] = useState(null);
  
const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("vehicleName", vehicleName);
    formData.append("vehicleType", vehicleType);
    formData.append("passengers", passengers);
    formData.append("perDayKm", perDayKm);
    formData.append("vTermsAndCond", vTermsAndCond);
    formData.append("ownerName", ownerName);
    formData.append("ownerEmail", ownerEmail);
    formData.append("nic", nic);
    if (image) {
        formData.append("image", image);
      }
      try {
        const res = await axios.post("http://localhost:8090/vehicle/add", formData);
        console.log(res.data);
        window.location.reload();
      } catch (err) {
        alert(err);
      }
  }
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };




    return(
        <>
       
        <div>
            <div className="b-imageV">
             
            </div>
            <div className="container">

                <form onSubmit={handleSubmit}>

                    <div className="form-floating2  mb-3">
                    <label for="vehicleName">Vehicle Name</label> <br/>
                    <input className="form-control"
                    type="text" name="vehicleName" placeholder="enter vehicleName" required
                    onChange={(e) =>{ setvehicleName(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="vehicleType">Vehicle Type</label> <br/>
                    <select className="form-control"
                     name="vehicleType"  required
                    onChange={(e) =>{ setvehicleType(e.target.value);}}>
                        <option value="Car">Car</option>
                        <option value="SUV">SUV</option>
                        <option value="Van">Van</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Bus">Bus</option>
                        <option value="Boat">Boat</option>
                        <option value="Bicycle">Bicycle</option>
                        <option value="Train">Train</option>
                        <option value="RV">RV </option>
                    </select> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="passengers">Passengers</label> <br/>
                    <input className="form-control"
                    type="number" name="passengers" placeholder="enter passengers" required
                    onChange={(e) =>{ setpassengers(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="perDayKm">Per Day (KM)</label> <br/>
                    <input className="form-control"
                    type="number" name="perDayKm" placeholder="enter perDayKm" required
                    onChange={(e) =>{ setperDayKm(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="vTermsAndCond">Vehicle Terms And Cond</label> <br/>
                    <input className="form-control"
                    type="text" name="vTermsAndCond" placeholder="enter vTermsAndCond" required
                    onChange={(e) =>{ setvTermsAndCond(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="ownerName">Owner Name</label> <br/>
                    <input className="form-control"
                    type="text" name="ownerName" placeholder="enter ownerName" required
                    onChange={(e) =>{ setownerName(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="ownerEmail">Owner Email</label> <br/>
                    <input className="form-control"
                    type="text" name="ownerEmail" placeholder="enter ownerEmail" required
                    onChange={(e) =>{ setownerEmail(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2  mb-3">
                    <label for="nic">Nic</label> <br/>
                    <input className="form-control"
                    type="text" name="ownerNnicame" placeholder="enter nic" required
                    onChange={(e) =>{ setnic(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating2 mb-3">
                    <label htmlFor="image">Upload Image</label> <br/>
                    <input className="form-control"
                     type="file"
                     name="image"
                     accept="image/*"
                     onChange={handleImageChange } />
                    </div> 


                    <button className="btnsubmit2"  type="submit" name="addVehicle">Add Vehicle</button>



                </form>

            </div>
        </div>
        
        </>
    )
    
}
export default AddVehicle;