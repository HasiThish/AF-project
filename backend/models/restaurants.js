const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    res_id:{
        type:Number,
        required:true
    },
    res_name:{
        type:String,
        required:true
    },
    res_phone:{
        type:Number,
        required:true
    },
    res_province:{
        type:String,
        required:true
    },
    res_district:{
        type:String,
        required:true
    },
    res_city:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Restaurant',restaurantSchema);

//const Restaurant = mongoose.model('Restaurant',restaurantSchema);
//module.exports = Restaurant;