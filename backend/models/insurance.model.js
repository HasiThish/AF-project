const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InsuranceSchema = new Schema({
    insurenceName: { type: String, required: true },
    insurenceType: { type: String, required: true },
    howManyYears: { type: String, required: true },
    cOptions: { type: String, required: true },
    exAndCond: { type: String, required: true },
    termsAndCond: { type: String, required: true },

    image: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'approved'],
        default: 'pending'
      },
      name: { type: String,required: true, default: 'pendings' },
      mobile: { type: String,required: true, default: 'pendings' },
      email: { type: String,required: true, default: 'pendings' },
}, {
    timestamps: true,
})
const Insurance = mongoose.model('insurance', InsuranceSchema);

module.exports= Insurance;


