const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehicleName: { type: String, required: true },
    vehicleType: { type: String, required: true },
    passengers: { type: String, required: true },
    perDayKm: { type: String, required: true },
    vTermsAndCond: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    nic: { type: String, required: true },
    image: { type: String, required: true },

    
}, {
    timestamps: true,
})
const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports= Vehicle;
