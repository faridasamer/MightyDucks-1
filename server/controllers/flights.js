
import flights from "../models/flights.js";
import axios  from "axios";



export const addFlights = async (req, res) => {
  const from = req.body.from;
  const to = req.body.to;
  const flightNumber = req.body.flightNumber;
  const arrivalTime = Date(req.body.arrivalTime);
  const departureTime = Date(req.body.departureTime);
  const seatsAvailableEco = Number(req.body.seatsAvailableEco);
  const seatsAvailableBus = Number(req.body.seatsAvailableBus);
  const seatsAvailableFirst = Number(req.body.seatsAvailableFirst);
  const priceEco = Number(req.body.priceEco);
  const priceBus = Number(req.body.priceBus);
  const priceFirst = Number(req.body.priceFirst);
  const subscribers = [];

  const newFlight = new flights({
    from: from,
    to: to,
    flightNumber: flightNumber,
    arrivalTime: arrivalTime,
    departureTime: departureTime,
    seatsAvailableEco: seatsAvailableEco,
    seatsAvailableBus: seatsAvailableBus,
    seatsAvailableFirst: seatsAvailableFirst,
    priceEco: priceEco,
    priceBus: priceBus,
    priceFirst: priceFirst,
    subscribers: subscribers,
  });

  newFlight
    .save()
    .then(() => res.json("Flight added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const updateFlight = async (req, res) => {
  flights
    .findById(req.body._id)

    .then((flights) => {
      if (!flights) {
        res.status(400).json("Please enter a flight");
      } else if (flights == null) {
        res.status(404).json("Flight not found ");
      } else {
        var keys = [];

        for (var key in req.body) {
          keys.push(key);
        }

        for (let i = 0; i < keys.length; i++) {
          if (keys[i] === "from") {
            flights.from = req.body.from;
          }
          if (keys[i] === "to") {
            flights.to = req.body.to;
          }
          if (keys[i] === "flightNumber") {
            flights.flightNumber = req.body.flightNumber;
          }
          if (keys[i] === "arrivalTime") {
            flights.arrivalTime = req.body.arrivalTime;
          }
          if (keys[i] === "departureTime") {
            flights.departureTime = req.body.departureTime;
          }
          if (keys[i] === "seatsAvailableEco") {
            flights.seatsAvailableEco = req.body.seatsAvailableEco;
          }
          if (keys[i] === "seatsAvailableBus") {
            flights.seatsAvailableBus = req.body.seatsAvailableBus;
          }
          if (keys[i] === "seatsAvailableFirst") {
            flights.seatsAvailableFirst = req.body.seatsAvailableFirst;
          }
          if (keys[i] === "priceEco") {
            flights.priceEco = req.body.priceEco;
          }
          if (keys[i] === "priceBus") {
            flights.priceBus = req.body.priceBus;
          }
          if (keys[i] === "priceFirst") {
            flights.priceFirst = req.body.priceFirst;
          }
        }
        flights
          .save()

          .then(() => {
            var updatedValues = "";

            for (var key in req.body) {
              updatedValues += key + ", ";
            }
            updatedValues = updatedValues.slice(0, -2) + ".";
            updatedValues = updatedValues.slice(4);
            res.status(200).json("updated values: " + updatedValues)
          })

          .catch((err) => res.status(400).json("Error: " + err));
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getFlights = async (req, res) => {
  const test = await flights.find();
  res.status(200).send(test);
};

export const deleteFlight = async (req, res) => {
  if (req.body._id) {
    flights
      .findByIdAndRemove(req.body._id)
      .catch((err) => res.status(400).json("Invalid Flight!"))
      .then(() => res.json("Flight Removed!"));
  } else {
    res.status(400).json("Invalid Input!");
  }
};



export const searchFlights = async (req, res) => {
  if (req.body.from || req.body.to || req.body.flightNumber|| req.body.arrivalTime || req.body.departureTime|| req.body.seatsAvailableEco || req.body.seatsAvailableBus || req.body.seatsAvailableFirst || req.body._id || req.body.priceEco || req.body.priceBus || req.body.priceFirst) {
    if(req.body.flightNumber){
      req.body.flightNumber=req.body.flightNumber.toUpperCase();
      req.body.flightNumber= {'$regex' :  req.body.flightNumber, '$options' : 'i'};
  }
    if(req.body.from){
      req.body.from=req.body.from.toUpperCase();
      req.body.from= {'$regex' :  req.body.from, '$options' : 'i'};
    }
    if(req.body.to){
      req.body.to=req.body.to.toUpperCase();
      req.body.to= {'$regex' :  req.body.to, '$options' : 'i'};
    }
    const filteredFlights = await flights
      .find(req.body)
      .catch((err) => res.status(404).send("No flights found"));
    if (filteredFlights.length === 0) {
      res.status(404).send("No flights found");
      return;
    }
    res.status(200).send(filteredFlights);
    return;
  }else{
    res.status(400).json("Invalid Input!");
    return;
  }
};

export const subscribeFlight = async (req, res) => {
  const subscriber = JSON.stringify(req.body.subscriber);
  if (req.body._id && req.body.subscriber) {
    flights
      .findById(req.body._id)
      .then((flights) => {
        if (!flights) {
          res.status(400).json("Please enter a flight");
        } else if (flights == null) {
          res.status(404).json("Flight not found ");
        } else if (flights.subscribers.includes(subscriber)) {
            res.status(400).json("Already subscribed");
        }
        else {
          flights.subscribers.push(subscriber);
          console.log(flights.subscribers);
          axios({
            method: "get",
            url: "http://localhost:8000/mail/booking",
            headers: {},
            data: {
              email: req.body.email,
              name: req.body.name.firstName + " " + req.body.name.lastName,
              flightID: req.body.flightNumber,
              price: req.body.price,
            },
          });
            flights
              .save()
              .then(() => res.json("user added!"))
              .catch((err) => res.status(400).json("Error: " + err));
          }
      })
  } else {
    res.status(400).json("Invalid Input!");
  }
};

export const unsubscribeFlight = async (req, res) => {
  const subscriber = JSON.stringify(req.body.subscriber);
  if (req.body._id && req.body.subscriber) {
    flights
      .findById(req.body._id)
      .then((flights) => {
        if (!flights) {
          res.status(400).json("Please enter a flight");
        } else if (flights == null) {
          res.status(404).json("Flight not found ");
        } else if (!flights.subscribers.includes(subscriber)) {
          res.status(400).json("Not subscribed");
        } else {
          flights.subscribers.splice(flights.subscribers.indexOf(subscriber), 1);
                  axios({
                    method: "get",
                    url: "http://localhost:8000/mail/cancel",
                    headers: {},
                    data: {
                      email: req.body.email,
                      name:
                        req.body.name.firstName + " " + req.body.name.lastName,
                      flightID: req.body.flightNumber,
                      refund: req.body.price,
                    },
                  });
          flights
            .save()
            .then(() => res.json("user removed!"))
            .catch((err) => res.status(400).json("Error: " + err));
        }
      })
  } else {
    res.status(400).json("Invalid Input!");
  }
};

export const getFlight = async (req, res) => {
  if (req.body._id) {
    flights
      .findById(req.body._id)
      .then((flights) => {
        if (!flights) {
          res.status(400).json("Please enter a flight");
        } else if (flights == null) {
          res.status(404).json("Flight not found ");
        } else {
          res.status(200).json(flights);
        }
      })
  } else {
    res.status(400).json("Invalid Input!");
  }
}

export const getFlightByFlightNumber = async (req, res) => {
  if (req.body.flightNumber) {
    flights
      .findOne({ flightNumber: req.body.flightNumber })
      .then((flights) => {
        if (!flights) {
          res.status(410).json("Please enter a flight");
        } else if (flights == null) {
          res.status(404).json("Flight not found ");
        } else {
          res.status(200).json(flights);
        }
      })
  } else {
    res.status(400).json("Invalid Input!");
  }
}

