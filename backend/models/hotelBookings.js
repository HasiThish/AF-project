const mongoose = require('mongoose');

const HotelBookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: false
  },
  hotel_name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
})

const HotelBooking = mongoose.model('hotelbokings', HotelBookingSchema);

module.exports = HotelBooking;