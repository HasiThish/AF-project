const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

//import routes
const heritagesRoutes = require('./routes/heritages_routes');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const restaurantsRoutes = require('./routes/restaurants_routes');


app.use(cors());

app.use(bodyParser.json());

app.use('/api/places',heritagesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/restaurants',restaurantsRoutes); 

mongoose.connect('mongodb+srv://af-project:RmTMTlQYIMrIvgjF@af.dw8mxxg.mongodb.net/test', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});