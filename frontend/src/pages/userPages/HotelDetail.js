import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import '../viewplaces.css';

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchHotel();
  }, []);

  const fetchHotel = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/hotels/${id}`);
      setHotel(response.data);
    } catch (error) {
      console.error('Error retrieving hotel:', error);
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

  if (!hotel) {
    return <div>Loading hotel details...</div>;
  }

  return (
    <div className="container">
      <h1 className='hotel-card'>Hotel Details</h1>
      <hr />
      <div className="card hotel-card">
        <div className="card-content">
          <h3 className="card-title"><u>{hotel.name}</u></h3>
          <p className="card-location">Location : {hotel.location}</p>
          <p className="card-rating">Ratings : {renderRatingStars(hotel.rating)}</p>
          <hr className="card-separator" />
          <div className="card-details">
            <p className="card-price-range">
              Starting Price for a room : Rs. {hotel.price_start}
            </p>
            <p className="card-price-range">
              Ending Price for a room : Rs. {hotel.price_end}
            </p>
          </div>
          <hr className="card-separator" />
          <p className="card-contact">Contact Number: {hotel.phone}</p>
          <hr className="card-separator" />
          <p>Description : </p>
          <p className="card-description">{hotel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
