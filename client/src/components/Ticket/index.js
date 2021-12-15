import React from "react";
import TicketFromTo from "../TicketFromTo";
import { Grid, Paper, Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Ticket({ flightFrom, FlightTo }) {
  return (
    <Grid container direction='row' wrap='nowrap'>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "70%", height: "20em" }}>
        <Grid container direction='column' sx={{ mt: "2em", ml: "0.5em" }}>
          <TicketFromTo />
        </Grid>
        <Grid container direction='column' sx={{ mt: "1em", ml: "0.5em" }}>
          <TicketFromTo />
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
            Starting From:
          </Typography>
          <Typography variant='h4'>323$</Typography>
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            sx={{ width: "27%", placeSelf: "center" }}>
            Select
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Ticket;
