import express from 'express';
import mongoose from 'mongoose';
import user from '../models/user.js';


const router = express.Router();

export const addUser= async(req, res) => {
  // console.log(req.body);
  const Email = req.body.Email;
  const Username = req.body.Username;
  const homeAddress =req.body.homeAddress;
  const coutryCode =req.body.coutryCode;
  const passportNumber =req.body.passportNumber;
  const Password =req.body.Password;
  const Type =req.body.Type;
  const firstName =req.body.firstName;
  const lastName =req.body.lastName;
  const dateOfBirth = Date(req.body.dateOfBirth);
  const flightNumbers =req.body.flightNumbers;


  const newUser = new user({
    Email:Email,
    Username:Username,
    homeAddress:homeAddress,
    coutryCode:coutryCode,
    passportNumber:passportNumber,
    Password:Password,
    Type:Type,
    firstName:firstName,
    lastName:lastName,
    dateOfBirth:dateOfBirth,
    flightNumbers:flightNumbers
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

export const getUser =  async(req, res) => { 
    const test = await user.find()
      res.status(200).send(test);
}
