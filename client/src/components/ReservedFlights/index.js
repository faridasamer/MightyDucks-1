import React from "react";
import { Grid, Paper , Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TicketFromTo from "../TicketFromTo";
import { Link } from "react-router-dom";

function ReservedFlight({ flight, passengerNo, userID }) {

  const from = flight.from;
 const to = flight.to;
 const departureDate = flight.departureTime;
  const arrivalDate = flight.arrivalTime;
  const duration = flight.duration;

  
  return (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      sx={{ mt: 5, alignItems: "center", placeContent:"center" }}>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "70%", height: "auto", textAlignLast:"center" }}>
        <Grid container direction='column' sx={{ mt: "2em", ml: "0.5em" }}>
          <TicketFromTo
            from={from}
            to={to}
            date={departureDate}
            duration={duration}
          />
        </Grid>
        <Grid container direction='column' sx={{ mt: "1em", ml: "0.5em" }}>
          <TicketFromTo
            from={to}
            to={from}
            date={arrivalDate}
            duration={duration}
          />
          <Link
            to='itinerary'
            state={{
              flight: flight,
              userID: userID,
            }}
          >
            <Button
              variant='contained'
              endIcon={<SendIcon />}
              sx={{ width: "27%", placeSelf: "center" }}>
              View Flight
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ReservedFlight
