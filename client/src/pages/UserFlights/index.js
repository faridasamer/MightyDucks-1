import React from 'react'
import { useLocation } from "react-router-dom";
import { Grid, Typography, CircularProgress } from "@mui/material";
import Ticket from '../../components/ReservedFlights';
import axios from "axios";



function UserFlightView() {

      const location = useLocation();
      const _id = location.state._id;
      const [upcoming, setUpcoming] = React.useState({});
      const [past, setPast] = React.useState({});
    const [flights, setFlights] = React.useState({});
    const [noFlights, setNoflights] = React.useState(false);
    const [loading, setLoading] = React.useState(true);



      var pastFlights = [];
    var upcomingFlights = [];
    
    React.useEffect(() => {
                    if (flights.length === 0) {
                      setNoflights(true);
                    } else {
                      setNoflights(false);
                    }
        axios
          .post("http://localhost:8000/user/getFlights", {
            _id: _id,
          })
          .then((res) => {
            if (res.data) {
              res.data.map((flight) => {
                if (new Date(flight.departureTime) > new Date()) {
                  upcomingFlights.push(flight);
                } else if (new Date(flight.departureTime) < new Date()) {
                  pastFlights.push(flight);
                }
              });
            }
            setFlights(res.data);
            setUpcoming(upcomingFlights);
              setPast(pastFlights);
              setLoading(false);
              console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, []);
    
            if (flights[0] === "empty") {
              return <Grid></Grid>;
    }
    
    if (loading) {    
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <CircularProgress size={100} style={{ alignSelf: "center", marginTop: "20%" }} />
            </Grid>
        );
    }
    
    return (
      <Grid container direction='column' sx={{ width: "90%", alignItems: "center", mt: 10, ml: 15 }}>
        {noFlights && (
          <Typography variant='h5' sx={{ color: "secondary.main" }}>
            No Flights Found
          </Typography>
        )}
        <Typography variant='h5' sx={{ color: "secondary.main" }}>
          Upcoming Flights
        </Typography>
        {upcoming.map((flight, index) => {
          return <Ticket flight={flight} key={index} userID={_id} />;
        })}
        <Typography variant='h5' sx={{ color: "secondary.main", mt:5 }}>
          Past Flights
        </Typography>
        {past.map((flight, index) => {
          return <Ticket flight={flight} key={index} userID={_id} />;
        })}
      </Grid>
    );
}

export default UserFlightView
