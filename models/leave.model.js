const { Int32 } = require('mongodb');
const mongoose = require('mongoose')

const Leave= mongoose.Schema({
    userName:{
        type:String,
    },
    leaveType:{
        type:String,
    },
    startDate:{
        type:String,
        required:true,
    },
    endDate:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        default:""
    },
    reason:{
        type:String,
        default:''
    },
    leaveStatus:{
        type:String,
        default:""
    },
    userId:{
        type:String,
        default:""
    },
    
},
{
    timestamps:true,
})

const LeaveSchema = mongoose.model('Leave', Leave);


module.exports = LeaveSchema