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

//naween
const vehicle = require('./routes/naween/vehicle');

app.use(cors());

app.use(bodyParser.json());

app.use(heritagesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

//naween
app.use('/vehicle', vehicle);

mongoose.connect('mongodb+srv://af-project:RmTMTlQYIMrIvgjF@af.dw8mxxg.mongodb.net/test', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});