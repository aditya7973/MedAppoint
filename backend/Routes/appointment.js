
const express = require('express')
const router = express.Router();
const User = require('../Modals/User.js')
const fetchUser = require('../Middleware/fetchUser.js');

const Appointment = require('../Modals/appointment.js');
//router for adding appoitment data
router.post("/Booking",fetchUser, async (req,res)=>{
    try{
      const alreadappointment = await Appointment.findOne({email:req.body.email})

      if(alreadappointment){
        return res.status(404).json({error:"You Had Already Booked the Appoitment"})
      }
   
    const {name,
      time,
        email,
        date_of_appointment,
        problem,
        gender,
        phone_number} = req.body
        const newappointment =new Appointment({
            name,
         
            email,
            time,
            date_of_appointment,
            problem,
            gender,
            phone_number,
            user:req.user.id
           
        })
        const appoitmentsaved = await newappointment.save()
       
    
        if(!appoitmentsaved){
            return res.status(404).json('Please Try Again')
        }
        res.json("Your Appointment is Successfully Booked With us !")
    }
    catch(error){
        res.status(500).json(error.message)
        console.log(error.message)
    }
    })

    //router for getting all the appointements
router.get("/AllApointment",fetchUser, async (req,res)=>{
    try{
   
     const allapointment = await Appointment.find()

    
        if(!allapointment){
            return res.status(404).json('You Have not Any appointment With us.')
        }
        res.json({allapointment:allapointment,totalappointment:allapointment.length})
    }
    catch(error){
        res.status(500).json(error.message)
        console.log(error.message)
    }
    })

       //router to delete appointment by id
router.delete("/delete/:id",fetchUser,async(req,res)=>{
    try{
       
        const appointements = await Appointment.findById(req.params.id)
        
      if(!appointements){
              return res.status(404).json("No Appointment Found")
          }
        if(appointements.user != req.user.id){
            return res.status(404).json({ error: "Your cannot Access the information! You are not a admin" })
        }
       
   const deleteappointment = await appointements.deleteMany({_id:req.params.id})

          res.json("successfully deleted the appointment")
     }
      catch(error){
          res.status(500).json(error.message)
          console.log(error.message)
      } 
})
module.exports =router;

