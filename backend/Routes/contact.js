const mongoose= require('mongoose')
const express = require('express')
const router = express.Router();
const Contact = require('../Modals/ContactUs');
const fetchUser = require('../Middleware/fetchUser');
const User = require('../Modals/User')

// router to post a message 
router.post("/Message", async (req,res)=>{
try{
  const alreadymessage = await Contact.findOne({Email:req.body.Email,Name:req.body.Name})

  if(alreadymessage){
    return res.status(404).json({error:"You Had Already Message Me"})
  }
 
    const message = await Contact.create({
        Name : req.body.Name,
        Message:req.body.Message,
        Email:req.body.Email,
        phone_numer:req.body.phone_numer


    })

    if(!message){
        return res.status(404).json('Please Try Again')
    }
    res.json({success:"success"})
}
catch(error){
    res.status(500).json(error.message)
    console.log(error.message)
}
})
//router to get all message
router.get("/GetAllMessages", async (req,res)=>{
    try{
      const AllMessages = await Contact.find().sort({date:-1})
    if(!AllMessages){
            return res.status(404).json("No Message Found")
        }
        res.json({AllMessages:AllMessages})
    }
    catch(error){
        res.status(500).json(error.message)
        console.log(error.message)
    }
    })
    //router to delete all messages
router.delete("/delete/:id",fetchUser,async(req,res)=>{
    try{
        let user = await User.findById(req.user.id)
        if(user.email !== "rohitdr098@gmail.com"){
            return res.status(404).json({ error: "Your cannot Access the information! You are not a admin" })
        }
        const Messages = await Contact.findById(req.params.id)
      if(!Messages){
              return res.status(404).json("No Message Found")
          }
   const deletemessage = await Contact.findByIdAndDelete(req.params.id)

          res.json("successfully deleted the message")
      }
      catch(error){
          res.status(500).json(error.message)
          console.log(error.message)
      } 
})

module.exports= router