const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    
    Profile_Image:{
    type:String,
    default:"UserImages/default.jpg"
    },
    username:{
type:String,


    },
    
   
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    OnLine:{
        type:Boolean,
        default:false
    },
    total_apponitment:{
        type:Number

    }
    




})
User = mongoose.model('User', userSchema)

module.exports = User