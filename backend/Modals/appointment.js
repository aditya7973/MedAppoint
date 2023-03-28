const mongoose = require('mongoose')
const {Schema} = mongoose
const AppointmentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Name:{
        type:String,

    },
    phone_number:{
        type:Number
    },
    problem:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now
    },
    Email:{
        type:String
    },
    Desease:{
        type:String
    },
    Date_of_Appointment:{
        type:Date
    },
     gender:{
        type:String

}

})
module.exports=mongoose.model("Appointment", AppointmentSchema)