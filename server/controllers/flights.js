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

export const getFlights =  async(req, res) => { 
    const test = await flights.find()
      res.status(200).send(test);
}
