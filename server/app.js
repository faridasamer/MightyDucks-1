import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import flightRoutes from './routes/flight.js';




var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/flight', flightRoutes);


// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
const MongoURI = 'mongodb+srv://mightyDucks:BadassMightyDucks@airportschema.3tfyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;


//App variables
const port = process.env.PORT || "8000";


mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
