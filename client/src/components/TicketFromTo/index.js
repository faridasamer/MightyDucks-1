import React from 'react'
import { Grid, Typography, Divider } from "@mui/material";
import { AirplanemodeActive,FlightTakeoff, FlightLand, Opacity } from "@mui/icons-material/";

function FlightFromTo({flightFrom,FlightTo}) {
    return (
      <Grid
        container
        direction='row'
        spacing={3}
        sx={{ width: "100%" }}
        wrap='nowrap'>
        <Grid
          item
          direction='column'
          sx={{ width: "20%", textAlign: "center", height:"9em" }}>
          <FlightTakeoff sx={{ fontSize: "3em", color: "primary.main" }} />
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 600, fontSize: "1.2em" }}>
            15:10
          </Typography>
          <Typography
            variant='subtitle2'
            sx={{ fontWeight: 600, fontSize: "1.2em", opacity: 0.38 }}>
            CAI
          </Typography>
        </Grid>
        <Grid
          item
          direction='column'
          wrap='nowrap'
          sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 600, fontSize: "1.2em", opacity: 0.38, position:"relative", top:"1.3em" }}>
            4 Hours
          </Typography>
          <Grid container direction='row'>
            <Divider
              orientation='horizontal'
              flexItem
              sx={{
                width: "90%",
                alignSelf: "start",
                mt: "1.4em",
                borderBottom: "solid 4px",
              }}
            />
            <AirplanemodeActive
              sx={{
                transform: "rotate(90deg)",
                fontSize: "3em",
                color: "primary.main",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          direction='column'
          sx={{ width: "20%", textAlign: "center" }}>
          <FlightLand sx={{ fontSize: "3em", color: "primary.main" }} />
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 600, fontSize: "1.2em" }}>
            19:10
          </Typography>
          <Typography
            variant='subtitle2'
            sx={{ fontWeight: 600, fontSize: "1.2em", opacity: 0.38 }}>
            BER
          </Typography>
        </Grid>
      </Grid>
    );
}

export default FlightFromTo
