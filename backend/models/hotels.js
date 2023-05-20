const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  price_start: {
    type: String,
    required: true
  },
  price_end: {
    type: String,
    required: true
  },
})

const Hotel = mongoose.model('hotels', HotelSchema);

module.exports = Hotel;