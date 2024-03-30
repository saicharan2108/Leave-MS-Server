const mongoose = require('mongoose');

const WorkloadSchema = mongoose.Schema({
    id:{
        type:'String'
    },
    workload: {
        type: Array,
    }
}, {
    timestamps: true
});

const Workload = mongoose.model('Workload', WorkloadSchema);

module.exports = Workload;
