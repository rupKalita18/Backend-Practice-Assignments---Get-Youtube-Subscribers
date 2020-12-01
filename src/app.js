
const express = require('express');
const app = express();
const mongoose=require('mongoose');
const connection=require('./models/subscribers');




app.get('/subscribers',async(req,res)=>{
  const subscribers=await connection.find();
  res.send(subscribers);
})


app.get('/subscribers/names',async(req,res)=>{
    const subscribers=await connection.find({},{name:1,subscribedChannel:1,_id:0})
    console.log(subscribers);
   res.json(subscribers);
})

app.get('/subscribers/:id',async(req,res)=>{
    const id=req.params.id;
    const subscribers= await connection.find({_id:id}).catch((err)=>{
       res.status(400).send({message: "error.message"})
       
    });
    // if(subscribers===undefined)
    // {
    //     res.status(400).send({message: error.message});
    //     return;
    // }
    // console.log(subscribers);
    res.send(subscribers);
})



// Your code goes here





















module.exports = app;
