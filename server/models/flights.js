import mongoose from 'mongoose';

const flightSchema = mongoose.Schema({
    from: String,
    to: String,
    flightNumber: {
        type: String,
        unique: true 
      },
    arrivalTime: {type: Date},
    departureTime: {type: Date},
    seatsAvailableEco: Number,
    seatsAvailableBus: Number,
    seatsAvailableFirst: Number,
})

var flights = mongoose.model('flights', flightSchema);

export default flights;