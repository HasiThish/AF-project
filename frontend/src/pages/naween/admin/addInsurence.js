import React, { useState, useEffect } from "react";

import axios from 'axios';

import "../../../styles/naween/form.css";



function AddInsurence() {
  const [insurenceName, setinsurenceName] = useState("");
  const [insurenceType, setinsurenceType] = useState("");
  const [howManyYears, sethowManyYears] = useState("");
  const [cOptions, setcOptions] = useState("");
  const [exAndCond, setexAndCond] = useState("");
  const [termsAndCond, settermsAndCond] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("insurenceName", insurenceName);
    formData.append("insurenceType", insurenceType);
    formData.append("howManyYears", howManyYears);
    formData.append("cOptions", cOptions);
    formData.append("exAndCond", exAndCond);
    formData.append("termsAndCond", termsAndCond);
    if (image) {
        formData.append("image", image);
      }
      try {
        const res = await axios.post("http://localhost:8090/insurance/add", formData);
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
            <div className="b-image">

            </div>
            <div className="container01">

                <form onSubmit={handleSubmit}>

                    <div  className="form-floating3  mb-6">
                    <label for="insurenceName">Insurence Name</label> <br/>
                    <input  className="form-control"
                    type="text" name="insurenceName" placeholder="enter insurence name" required
                    onChange={(e) =>{ setinsurenceName(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating3  mb-3">
                    <label for="insurenceType">Insurence Type</label> <br/>
                    <select className="form-control"
                     name="insurenceType"  required
                    onChange={(e) =>{ setinsurenceType(e.target.value);}}>
                      <option value="Health ">Health insurance</option>
                      <option value="Life ">Life insurance</option>
                      <option value="Motor ">Motor insurance</option>
                      <option value="Property ">Property insurance</option>
                      <option value="Travel ">Travel insurance</option>
                      <option value="Business ">Business insurance</option>
                      <option value="Marine ">Marine insurance</option>
                    </select> <br/>
                    </div>

                   <div className="form-floating3  mb-3">
                    <label for="howManyYears">How Many Years Valid</label> <br/>
                    <select className="form-control"
                     name="howManyYears"  required
                    onChange={(e) =>{ sethowManyYears(e.target.value);}}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="8">8</option>
                    </select> <br/>
                    </div>

                    <div className="form-floating3  mb-3">
                    <label for="cOptions">Coverage Options</label> <br/>
                    <select className="form-control"
                     name="cOptions"  required
                    onChange={(e) =>{ setcOptions(e.target.value);}}>
                      <option value="Comprehensive ">Comprehensive coverage</option>
                      <option value="Third-party">Third-party liability coverage</option>
                      <option value="Personal">Personal accident coverage</option>
                      <option value="FireAndPerils">Fire and perils coverag</option>
                      <option value="TheifAndBurglary">Burglary and theft coverage</option>
                      <option value="Travel">Travel insurance coverage</option>
                      <option value="Business">Business interruption coverage</option>
                    </select> <br/>
                    </div>

                    <div className="form-floating3 mb-3">
                    <label for="exAndCond">Exclusions and Conditions</label> <br/>
                    <input className="form-control"
                    type="text" name="exAndCond" placeholder="enter exclusions and conditions" required
                    onChange={(e) =>{ setexAndCond(e.target.value);}}>
                    </input> <br/>
                    </div>

                    <div className="form-floating3  mb-3">
                    <label for="termsAndCond">Terms and Conditions</label> <br/>
                    <input className="form-control"
                    type="text" name="termsAndCond" placeholder="enter terms and conditions" required
                    onChange={(e) =>{ settermsAndCond(e.target.value);}}>
                    </input> <br/>
                    </div>

                   
                       
                 <div className="form-floating3 mb-3">
                    <label htmlFor="image">Upload Image</label> <br/>
                    <input className="form-control"
                     type="file"
                     name="image"
                     accept="image/*"
                     onChange={handleImageChange } />
                    </div> 

                    <button className="btnsubmit3" type="submit" name="addInsurence">Add Insurence</button>



                </form>

            </div>
        </div>
       
        </>
        
    )
    
}
export default AddInsurence;