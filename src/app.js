const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = require("./models/subscribers");

app.get("/subscribers", async (req, res) => {
  const subscribers = await connection.find();
  res.send(subscribers);
});

app.get("/subscribers/names", async (req, res) => {
  const subscribers = await connection.find(
    {},
    { name: 1, subscribedChannel: 1, _id: 0 }
  );
  console.log(subscribers);
  res.json(subscribers);
});

app.get("/subscribers/:id", (req, res) => {
  const id = req.params.id;
  connection
    .find({ _id: id }, { _id: 0, name: 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: error.message });
    });
  // if(subscribers===undefined)
  // {
  //     res.status(400).send({message: error.message});
  //     return;
  // }
  // console.log(subscribers);
});

// Your code goes here

module.exports = app;
