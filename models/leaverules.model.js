const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
    designation: {
        type: String,
        required: true,
        unique: true
    },
    totalCasual: {
        type: Number,
    },
    totalEarn: {
        type: Number,
    },
    totalMedical: {
        type: Number,
    },
    totalMaternity: {
        type: Number,
    },
    totalSpecialCasual: {
        type: Number,
    }
});

const Designations = mongoose.model('Designation', designationSchema);

module.exports = Designations;
