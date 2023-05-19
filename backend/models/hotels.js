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
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  rating: {
    type: String,
    required: false
  },
  price_start: {
    type: String,
    required: false
  },
  price_end: {
    type: String,
    required: false
  },
})

const Hotel = mongoose.model('hotels', HotelSchema);

module.exports = Hotel;