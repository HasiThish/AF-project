import React, { useState } from 'react';
import '../add_restaurant.css';
import AdminMenu from './Admin_menu'
import '../admin.css'

function RestaurantForm() {
  const [res_id, setId] = useState('');
  const [res_name, setName] = useState('');
  const [res_phone, setPhone] = useState('');
  const [res_province, setProvince] = useState('');
  const [res_district, setDistrict] = useState('');
  const [res_city, setCity] = useState('');

    const handleProvinceChange = (event) => {
        setProvince(event.target.value);
    };

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'res_id') setId(value);
    else if (name === 'res_name') setName(value);
    else if (name === 'res_phone') setPhone(value);
    else if (name === 'res_province') setProvince(value);
    else if (name === 'res_district') setDistrict(value);
    else if (name === 'res_city') setCity(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = {
        res_id: res_id,
        res_name: res_name,
        res_phone: res_phone,
        res_province: res_province,
        res_district: res_district,
        res_city: res_city
    };

      fetch('http://localhost:4000/api/restaurants',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Restaurant add response:', data);
          alert('Restaurant has been added successfully!');

          // Reset form values
          setId('');
          setName('');
          setPhone('');
          setProvince('');
          setDistrict('');
          setCity('');

/*        setImage1(null);
          setImage2(null);
          setImage3(null);
          setImage4(null);
          setDisplayedImage1(null);
          setDisplayedImage2(null);
          setDisplayedImage3(null);
          setDisplayedImage4(null); */

        })
        .catch(error=>{
          console.error('Error adding restaurant:', error);
          alert('Failed to add the restaurant! Please try again.');
        });
  };

  return (
    <div>
      <AdminMenu />
      
      <div className='adminContainer'>
      
      <h1>Add Restaurant Details</h1>
        <div className="container">
          <form onSubmit={handleFormSubmit} >
            <div className="row">
              <div className="col-25">
                <label>
                  Id:
                  <div className="space-60"></div>
                  <input type="number" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" name="res_id" value={res_id} onChange={handleInputChange} placeholder="|Id" required/>
                </label>
                <label>
                  Name:
                  <div className="space-20"></div>
                  <input type="text" name="res_name" value={res_name} onChange={handleInputChange} placeholder="|Name" required/>
                </label>
                <label>
                  Phone:
                  <div className="space-30"></div>
                  <input type="tel" min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" name="res_phone" value={res_phone} onChange={handleInputChange} placeholder="|Phone" required/>                  
                </label>
                <label>
                  Province:
                  <select value={res_province} onChange={handleProvinceChange}>
                    <option value="Central">Central</option>
                    <option value="Eastern">Eastern</option>
                    <option value="North Central">North Central</option>
                    <option value="Northern">Northern</option>
                    <option value="North Western">North Western</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="Southern">Southern</option>
                    <option value="Uva">Uva</option>
                    <option value="Western">Western</option>
                </select>
                </label>
                <label>
                  District:
                  <select value={res_district} onChange={handleDistrictChange}>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                    <option value="Matara">Matara</option>
                    <option value="Monaragala">Monaragala</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Vavuniya">Vavuniya</option>                    
                </select>
                </label>
                <label>
                  City:
                  <input type="text" name="res_city" value={res_city} onChange={handleInputChange} placeholder="|City" required/>
                </label>
              </div>
              <br />
{/*               <div class="col-75">
                <label htmlFor="image1">Image 1:</label>
                <input type="file" name="image1" id="image1" accept="image/*" onChange={handleImage1Change} /><br />
                {displayedImage1 && <img src={displayedImage1} alt="Image 1" />}<br />

                <label htmlFor="image2">Image 2:</label>
                <input type="file" name="image2" id="image2" accept="image/*" onChange={handleImage2Change} /><br />
                {displayedImage2 && <img src={displayedImage2} alt="Image 1" />}<br />

                <label htmlFor="image3">Image 3:</label>
                <input type="file" name="image3" id="image3" accept="image/*" onChange={handleImage3Change} /><br />
                {displayedImage3 && <img src={displayedImage3} alt="Image 1" />}<br />

                <label htmlFor="image4">Image 4:</label>
                <input type="file" name="image4" id="image4" accept="image/*" onChange={handleImage4Change} /><br />
                {displayedImage4 && <img src={displayedImage4} alt="Image 1" />}<br />

              </div> */}
        
            </div>
            <br />
            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
    </div>
    </div>
    
  );
}

export default RestaurantForm;
