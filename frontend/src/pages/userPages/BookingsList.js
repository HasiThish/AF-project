import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingsList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error retrieving bookings:', error);
    }
  };

  return (
    <div className="booking-list-container">
      <h1>Bookings List</h1>
      <table className="booking-table" border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Hotel Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.username}</td>
              <td>{booking.mobile}</td>
              <td>{booking.hotel_name}</td>
              <td>{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingsList;
