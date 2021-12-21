import mongoose from 'mongoose';

const flightSchema = mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    flightNumber: {
      type: String,
      unique: true,
      required: true,
    },
    arrivalTime: {
      type: Date,
      required: true,
    },
    departureTime: {
      type: Date,
      required: true,
    },
    seatsAvailableEco: {
      type: Number,
      required: true,
    },
    seatsAvailableBus: {
      type: Number,
      required: true,
    },
    seatsAvailableFirst: {
      type: Number,
      required: true,
    },
    priceEco: {
      type: Number,
      required: true,
    },
    priceBus: {
      type: Number,
      required: true,
    },
    priceFirst: {
      type: Number,
      required: true,
    },
    subscribers: {
      type: Array,
      default: [],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    seats: {
      type: Array,
      default: [{ type: mongoose.Schema.Types.ObjectId, ref: "Seat" }],
      required: true,
    },
  },
  { versionKey: false }
);

const seatSchema = mongoose.Schema({
  seatNumber: {
    type: String,
    required: true,
  },
  seatType: {
    type: String,
    required: true,
  },
  reserved: {
    type: Boolean,
    default: false,
    required: true,
  }
});


export var flights = mongoose.model('flights', flightSchema);
export var seat = mongoose.model('seat', seatSchema);

export default flights;