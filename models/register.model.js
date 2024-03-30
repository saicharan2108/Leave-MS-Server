const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please enter a username"],
    },
    gmail:{
        type:String,
        required:[true, "Please enter gmail"],
    },
    password:{
        type:String,
        required:[true, "Please enter a password"],
    },
    userId:{
        type:String,
        required:[true, "Please enter your id"],
    },
    position:{
        type:String,
        required:[true, "Please select a position"]
    }
}, {
    timestamps:true
});

const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register;
