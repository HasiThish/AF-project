const mongoose = require('mongoose');

const heritagePlaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description1: {
    type: String,
    required: false
  },
  description2: {
    type: String,
    required: false
  },
  description3: {
    type: String,
    required: false
  },
  filename1: String,
  imagePath1: String,
  filename2: String,
  imagePath2: String,
  filename3: String,
  imagePath3: String,
  filename4: String,
  imagePath4: String,
})

const HeritagePlace = mongoose.model('HeritagePlace', heritagePlaceSchema);

module.exports = HeritagePlace;