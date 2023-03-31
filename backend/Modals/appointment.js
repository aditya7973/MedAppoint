const mongoose = require('mongoose')
const {Schema} = mongoose
const AppointmentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name:{
        type:String,

    },
    phone_number:{
        type:Number
    },
    problem:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    email:{
        type:String
    },
   
    date_of_appointment:{
        type:Date
    },
     gender:{
        type:String

},
time:{
    type:String
}

})
module.exports=mongoose.model("Appointment", AppointmentSchema)