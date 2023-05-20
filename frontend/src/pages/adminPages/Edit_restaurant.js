import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditRestaurantForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [res_id, setId] = useState('');
    const [res_name, setName] = useState('');
    const [res_phone, setPhone] = useState('');
    const [res_province, setProvince] = useState('');
    const [res_district, setDistrict] = useState('');
    const [res_city, setCity] = useState('');


  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/restaurants/${id}`);
        const restaurantData = response.data;

        setId(restaurantData.res_id);
        setName(restaurantData.res_name);
        setPhone(restaurantData.res_phone);
        setProvince(restaurantData.res_province);
        setDistrict(restaurantData.res_district);
        setCity(restaurantData.res_city);



      } catch (error) {
        console.error('Error fetching restaurant:', error);
        // Handle error
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        res_id: res_id,
        res_name: res_name,
        res_phone: res_phone,
        res_province: res_province,
        res_district: res_district,
        res_city: res_city
        };

      await axios.put(`http://localhost:4000/api/restaurants/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      alert('Restaurant details updated successfully!');
      // Handle success or navigate back to user list
      navigate('/restaurantlist');
      
    } catch (error) {
      console.error('Error updating restaurant:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="res_name"
        value={res_name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="phone">Phone:</label>
      <input
            type="tel"
            id="res_phone"
            value={res_phone}
            onChange={(e) => setPhone(e.target.value)}
        />

      <label htmlFor="province">Province:</label>
      <textarea
        id="res_province"
        value={res_province}
        onChange={(e) => setProvince(e.target.value)}
      ></textarea>

      <label htmlFor="district">District:</label>
      <textarea
        id="res_district"
        value={res_district}
        onChange={(e) => setDistrict(e.target.value)}
      ></textarea>

    <label htmlFor="city">City:</label>
      <textarea
        id="res_city"
        value={res_city}
        onChange={(e) => setCity(e.target.value)}
      ></textarea>

<br/><br/>
      <button type="submit">Update Restaurant</button>
    </form>
  );
};

export default EditRestaurantForm;
