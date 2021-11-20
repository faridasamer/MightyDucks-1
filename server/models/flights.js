import mongoose from 'mongoose';

const flightSchema = mongoose.Schema({
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    flightNumber: {
        type: String,
        unique: true,
        required: true 
    },
    arrivalTime: {
      type: Date,
      required: true
    },
    departureTime: {
      type: Date,
      required: true
    },
    seatsAvailableEco: {
      type: Number,
      required: true
    },
    seatsAvailableBus:  {
      type: Number,
      required: true
    },
    seatsAvailableFirst:  {
      type: Number,
      required: true
    }
})

var flights = mongoose.model('flights', flightSchema);

export default flights;