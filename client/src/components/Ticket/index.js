import React from "react";
import TicketFromTo from "../TicketFromTo";
import { Grid, Paper, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

function Ticket({ flight, cabinClass, onClick }) {

  const from = flight.from;
  const to = flight.to;
  const departureDate = flight.departureTime;
  const arrivalDate = flight.arrivalTime;
  let price = flight.price;

  if (cabinClass === "Eco")
  {
    price = flight.priceEco;
  }
  else if (cabinClass === "Bus")
  {
    price = flight.priceBus;
  }
  else if (cabinClass === "First")
  {
    price = flight.priceFirst;
  }


  return (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      sx={{ mt: 5, alignItems: "center" }}>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "70%", height: "auto" }}>
        <Grid container direction='column' sx={{ mt: "2em", ml: "0.5em" }}>
          <TicketFromTo from={from} to={to} date={departureDate} duration={3} />
        </Grid>
        <Grid container direction='column' sx={{ mt: "1em", ml: "0.5em" }}>
          <TicketFromTo from={to} to={from} date={arrivalDate} duration={3} />
        </Grid>
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "28%", height: "20em" }}>
        <Grid
          container
          direction='column'
          sx={{ textAlign: "center", gap: "2em", mt: "3em" }}>
          <Typography variant='h4' sx={{ color: "secondary.main" }}>
            Price :
          </Typography>
          <Typography variant='h4'>{price}$</Typography>
          <Link to="booking/214214" replace={true} state={{flight:flight, cabinClass: cabinClass}}>
            <Button
              variant='contained'
              endIcon={<SendIcon />}
              sx={{ width: "27%", placeSelf: "center" }}>
              Book
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Ticket;
