const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB database connection established successfully');
    return mongoose.connection.createIndexes();
  })
  .catch((err) => {
    //console.log('Error connecting to MongoDB:', err);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connection successfully!");
});



const insurance = require('./routes/insurance');
const vehicle = require('./routes/vehicle');



app.use('/insurance', insurance);
app.use('/vehicle', vehicle);


app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});
