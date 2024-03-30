const mongoose = require('mongoose')

const Login= mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please enter a username"],
    },
    password:{
        type:String,
        required:[true, "Please enter a password"],
    },
},
{
    timestamps:true,
})

const LoginSchema = mongoose.model('Login', Login);


module.exports = LoginSchema