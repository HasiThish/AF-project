import React, { useState } from 'react';
import axios from 'axios';

const RestaurantSearchPage = () => {
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const handleSearch = () => {
        //Make API call to backend with selectedDistrict.  
        axios.get(`http://localhost:4000/api/restaurants/district?district=${selectedDistrict}`)
        .then((response) => {
            setRestaurants(response.data);
            //Update the searchResults state with response data. 
        })
        .catch((error)=>{
            console.error('Error fetching search results:',error);
        });
    };

    return (
        <div>
            <div>
                <select value={selectedDistrict} onChange={handleDistrictChange}>
                    <option value="">Select a District</option>
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
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <table style={{border:'none'}}>
                    <tbody>
                        {restaurants.length > 0 && (
                            Array.from({
                                length: Math.ceil(restaurants.length / 5)}, (_, index) => (
                                    <tr key={index}>
                                        {restaurants.slice(index*5,(index*5)+5)
                                        .map((restaurant)=>(
                                            <td key={restaurant.res_id}>
                                                <div>
                                                    <h4>{restaurant.res_name}</h4>
                                                    <p>Phone: {restaurant.res_phone}</p>
                                                    {/* Render other restaurant info */}
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))
                        )}
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default RestaurantSearchPage;