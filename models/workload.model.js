const mongoose = require('mongoose');

// Define the schema for the workload data
const workLoadSchema = new mongoose.Schema({
    day: {
        type: String,
    },
    date: {
        type: String,
    },
    period: {
        type: String,
    },
    class: {
        type: String,
    },
    sub: {
        type: String,
    },
    assign: {
        type: String,
    },
    userId: {
        type: String, // Assuming userId is a string
    },
    username: {
        type: String,
    },
    status: {
        type: String,
        default:"Pending"
    }
}, {
    timestamps: true
});

// Define the MongoDB model
const WorkLoad = mongoose.model('WorkLoad', workLoadSchema);

module.exports = WorkLoad;
