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
  imgmain: {
    type: String,
    required: true
  },
  img1: {
    type: String,
    required: false
  },
  img2: {
    type: String,
    required: false
  },
  img3: {
    type: String,
    required: false
  }
}, {
  // Tell Mongoose to transform the schema into a JSON object that replaces the 
  // local file path with a publicly accessible URL based on the server configuration.
  toJSON: {
    transform: function (doc, ret) {
      ret.imgmain = `/images/${ret.imgmain}`;
      ret.img1 = ret.img1 ? `/images/${ret.img1}` : null;
      ret.img2 = ret.img2 ? `/images/${ret.img2}` : null;
      ret.img3 = ret.img3 ? `/images/${ret.img3}` : null;
      return ret;
    }
  }
});

const HeritagePlace = mongoose.model('HeritagePlace', heritagePlaceSchema);

module.exports = HeritagePlace;
