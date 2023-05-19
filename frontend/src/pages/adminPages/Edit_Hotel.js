import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminMenu from "./Admin_menu";
import "../admin.css";


const EditHotelForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [rating, setRating] = useState('');
  const [price_start, setPriceStart] = useState('');
  const [price_end, setPriceEnd] = useState('');
//find hotel by id
  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/hotels/${id}`);
        const hotelData = response.data;

        setName(hotelData.name);
        setLocation(hotelData.location);
        setDescription(hotelData.description);
        setPhone(hotelData.phone);
        setRating(hotelData.rating);
        setPriceStart(hotelData.price_start);
        setPriceEnd(hotelData.price_end);
      } catch (error) {
        console.error('Error fetching hotel:', error);
        // Handle error
      }
    };

    fetchHotel();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const requestData = {
        name,
        location,
        description,
        phone,
        rating,
        price_start,
        price_end,
      };
  
      await axios.put(`http://localhost:4000/api/hotels/${id}`, requestData);
      alert('Hotel details updated successfully!');
      // Handle success or navigate back to hotel list
      navigate('/hotelList');
    } catch (error) {
      console.error('Error updating hotel:', error);
      // Handle error
    }
  };
  

  return (
    <><div>
          <AdminMenu />
      </div><div className="hotelEditContainer">
      <h1>Edit Hotel Details</h1>
              <form onSubmit={handleSubmit} className="hotel-form">
                  <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-input" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="location">Location:</label>
                      <input
                          type="text"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="form-input" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="form-input"
                      ></textarea>
                  </div>

                  <div className="form-group">
                      <label htmlFor="phone">Contact Number:</label>
                      <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-input input-custom" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="rating">Rating:</label>
                      <select
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                          className="form-input"
                      >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                      </select>
                  </div>

                  <div className="form-group">
                      <label htmlFor="price_start">Starting Price:</label>
                      <input
                          type="number"
                          id="price_start"
                          value={price_start}
                          onChange={(e) => setPriceStart(e.target.value)}
                          className="form-input input-custom" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="price_end">Ending Price:</label>
                      <input
                          type="number"
                          id="price_end"
                          value={price_end}
                          onChange={(e) => setPriceEnd(e.target.value)}
                          className="form-input input-custom" />
                  </div>

                  <br /><br />
                  <button type="submit" className="submit-btn update-button">Update Hotel</button>
                  <br /><br />
              </form>
          </div></>

  );
};

export default EditHotelForm;
