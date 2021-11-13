import express from 'express';
import mongoose from 'mongoose';

import flights from '../models/flights.js';

const router = express.Router();

export const getFlights =  async(req, res) => { 
    // const doc = {from:"EGY", to:"BER", flightNumber:"EGYBER6969", arrivalTime:"2019-06-11T00:00",departureTime:"2019-06-11T00:00", seatsAvailableEco: 20, seatsAvailableBus: 20, seatsAvailableFirst: 20};
    // const result = await flights.collection.insertOne(doc);
    // res.status(200).send(`data posted to DB: ${doc}`);
    const test = await flights.find()
      res.status(200).send(test);
}
