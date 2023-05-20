import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import '../viewplaces.css';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/hotels');
      setHotels(response.data);
    } catch (error) {
      console.error('Error retrieving hotels:', error);
    }
  };

  const renderRatingStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];

    for (let i = 0; i < roundedRating; i++) {
      stars.push(<FaStar key={i} className="star" />);
    }

    return stars;
  };

  return (
    <div className="container">
      <h2>Hotels List</h2>
      <hr />
      <div className="card-grid">
        {hotels.map((hotel) => (
          <a href={`/hoteldetail/${hotel._id}`} key={hotel._id}>
            <div className="column">
              <div className="card">
                <div className="card-image">
                </div>
                <div className="card-content">
                  <h3 className="card-title"><u>{hotel.name}</u></h3>
                  <p className="card-location">Location : {hotel.location}</p>
                  <div className="card-details">
                    <p className="card-rating">
                      Ratings : {renderRatingStars(hotel.rating)}
                    </p>
                    <p className="card-price-range">
                      Price Range: Rs. {hotel.price_start} - Rs. {hotel.price_end}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
