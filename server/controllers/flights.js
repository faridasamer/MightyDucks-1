import express from 'express';
import mongoose from 'mongoose';

import flights from '../models/flights.js';

const router = express.Router();

export const addFlights= async(req, res) => {
  // console.log(req.body);
  const from = req.body.from;
  const to = req.body.to;
  const flightNumber =req.body.flightNumber;
  const arrivalTime = Date(req.body.arrivalTime);
  const departureTime = Date(req.body.departureTime);
  const seatsAvailableEco = Number(req.body.seatsAvailableEco);
  const seatsAvailableBus = Number(req.body.seatsAvailableBus);
  const seatsAvailableFirst = Number(req.body.seatsAvailableFirst);

  const newFlight = new flights({
    from:from,
    to:to,
    flightNumber:flightNumber,
    arrivalTime:arrivalTime,
    departureTime:departureTime,
    seatsAvailableEco:seatsAvailableEco,
    seatsAvailableBus:seatsAvailableBus,
    seatsAvailableFirst:seatsAvailableFirst,
  });

  newFlight.save()
    .then(() => res.json('Flight added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

export const updateFlight= async(req, res) => {
   
  flights.findById(req.body.id)

  .then(flights => {
      
      if(!flights){
          res.status(400).json('Please enter a flight' );}
      else
      if(flights==null){
          res.status(404).json('Flight not found ' );
      }
      else{
          var keys = [];
          

          for (var key in req.body) { 
              keys.push(key)}
         
          
         for (let i = 0; i < keys.length; i++) {
          if(keys[i] == "from"){
            flights.from = req.body.from;
          };
          if(keys[i] == "to"){
            flights.to = req.body.to;
          };
          if(keys[i] == "flightNumber"){
            flights.flightNumber = req.body.flightNumber;
          };
          if(keys[i] == "arrivalTime"){
            flights.arrivalTime = req.body.arrivalTime;
          };
          if(keys[i] == "departureTime"){
            flights.departureTime = req.body.departureTime;
          };
          if(keys[i] == "seatsAvailableEco"){
            flights.seatsAvailableEco = req.body.seatsAvailableEco;
          };
          if(keys[i] == "seatsAvailableBus"){
            flights.seatsAvailableBus = req.body.seatsAvailableBus;
          };
          if(keys[i] == "seatsAvailableFirst"){
            flights.seatsAvailableFirst = req.body.seatsAvailableFirst;
          };
         
      }
      flights.save()
      
      .then(() => {
         
          var updatedVlues="";
          
          for (var key in req.body) { 
              updatedVlues+=key + " ";
          }

              
          res.status(200).json("updated values: " + updatedVlues)
       
          })

          
      .catch(err => res.status(400).json('Error: ' + err));
  }
  
    })
    .catch(err => res.status(400).json('Error: ' + err));;
};



export const getFlights =  async(req, res) => { 
    const test = await flights.find()
      res.status(200).send(test);
}
