import React from "react";
import { Grid, Paper, Typography, Divider , Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Icon from '@mui/material/Icon';import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { grid, } from "@mui/system";
import TicketFromTo from "../../components/TicketFromTo";
function index() {
    return (
        <Grid container direction='column' wrap='nowrap' marginLeft="12em" marginTop="5em" width='80%'>
        <Grid container direction='row' wrap='nowrap'>
       
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "70%", height: "25em" }}>
         <Typography variant='h6' sx={{color: "#000000", textAlign: "left", gap: "2em", fontweight:"5px",  ml:"2em",mt:"0.5em" , fontSize:"1.5em"}}>
           Flight Number: 27765
          </Typography>
        <Grid container direction='column' sx={{ mt: "1em", ml: "0.5em" }}>
          <TicketFromTo />
        </Grid>
        <Grid container direction='column' sx={{ mt: "1em", ml: "0.5em" }}>
          <TicketFromTo />
        </Grid>
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "28%", height: "25em" }}>
        <Grid
          container
          direction='column'
          sx={{ textAlign: "center", gap: "2em", mt: "3em" }}>
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            sx={{ width: "40%", placeSelf: "center" , mt:"8.5em"}}>
            View Flight
          </Button>
        </Grid>
      </Paper>
    </Grid>
   
    </Grid>
    )
}

export default index
