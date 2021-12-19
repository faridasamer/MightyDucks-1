import React from "react";
import { useState } from "react";
import CancelFlightModal from "../../components/CancelFlightModal";

import { Grid, Paper, Typography, Divider,Button,Popover,Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Icon from '@mui/material/Icon';import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { grid, } from "@mui/system";




function index() {
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [OpenCancel, setOpenCancel] = React.useState(false);
    const handleOpenCancel = () => setOpenCancel(true);
    const handleCloseCancel = () => setOpenCancel(false);
    return (
        <Grid container direction='row' wrap='nowrap'>
            
        <Grid container direction='column' wrap='nowrap' marginLeft='3em' width='180%'>
        
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "90%", height: "7em", backgroundColor:"#327089"}}>
            <Grid
          container
          direction='row'>
          <Typography variant='h5' sx={{color: "#ffffff", textAlign: "left", gap: "2em", mt: "1em", ml:"1em" }}>
           Cairo
          </Typography>
          <ArrowRightAltIcon
           sx={{
            fontSize: "5em",
            color: "#ffffff",
          }}/>
          <Typography variant='h5' sx={{color: "#ffffff", textAlign: "right", gap: "2em", mt: "1em" }}>
            BERLIN(BER)
          </Typography>
          <Grid container direction='column' wrap='nowrap'>
          <Typography variant='h5' sx={{fontSize:"0.75em" ,color: "#d3d3d3", textAlign: "left", gap: "2em",mt: "-0.5em",ml:"2em"}}>
          December 20, 2021 - December 28, 2021, round trip ticket
          </Typography>
          </Grid>
          <Typography variant='h5' sx={{fontSize:"1.75em" ,color: "#ffffff" , ml:"25em",mt:"1.25em"}}>
          RESERVED
          </Typography>
         
          </Grid>
        
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "90%", height: "3em"}}>
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
             Confirmation number: 27756
          </Typography>
        
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "90%", height: "3em", backgroundColor:"#327089"}}>
            <Grid container direction='row' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#ffffff", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
             December 20,2021 
          </Typography>
          <Typography variant='h6' sx={{fontSize:"0.85em" ,color: "#d3d3d3", textAlign: "left", gap: "2em",mt: "1.1em",ml:"1.5em"}}>
          Departure, non-stop
          </Typography>
          </Grid>
        
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "90%", height: "11em"}}>
            <Grid container direction='row' wrap='nowrap' >
         <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
             Cairo 
          </Typography>
          <Typography variant='h6' sx={{fontSize:"0.85em" ,color: "#636363", textAlign: "left", gap: "2em",mt: "1.1em",ml:"1.9em"}}>
          15:30
          </Typography>
          
          </Grid>
          <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"2.5em"}}>
             Berlin  
          </Typography>
          <Typography variant='h6' sx={{fontSize:"0.85em" ,color: "#636363", textAlign: "left", gap: "2em",mt: "1.1em",ml:"2.9em"}}>
          18:30
          </Typography>
          </Grid>
          <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"5em"}}>
             Flight duration: 4 Hours
          </Typography>
          
          </Grid>
          </Grid>
          <Grid container direction='column' wrap='nowrap' >
          <Divider
              orientation='horizontal'
              flexItem
              sx={{
                opacity:"30%",
                mt: "1.4em",
                borderBottom: "solid 2.5px",
                ml:"2em",
                mr:"2em",
              }}
            />
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "1.3em",ml:"1.5em"}}>
             ECONOMY | Seat number: 18F
          </Typography>

          </Grid>
      </Paper>
      <Paper
          elevation={24}
          variant='outlined'
          sx={{ width: "90%", height: "3em", backgroundColor:"#327089"}}>
              <Grid container direction='row' wrap='nowrap' >
               <Typography variant='h6' sx={{fontSize:"1em" ,color: "#ffffff", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
               December 28,2021 
            </Typography>
            <Typography variant='h6' sx={{fontSize:"0.85em" ,color: "#d3d3d3", textAlign: "left", gap: "2em",mt: "1.1em",ml:"1.5em"}}>
            Return, non-stop
            </Typography>
            </Grid>
        
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "90%", height: "11em"}}>
            <Grid container direction='row' wrap='nowrap' >
         <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
             Berlin 
          </Typography>
          <Typography variant='h6' sx={{fontSize:"0.85em" ,color: "#636363", textAlign: "left", gap: "2em",mt: "1.1em",ml:"1.9em"}}>
          15:30
          </Typography>
          
          </Grid>
          <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"2.5em"}}>
             Cairo  
          </Typography>
          <Typography variant='h6' sx={{fontSize:"0.85em" ,color: "#636363", textAlign: "left", gap: "2em",mt: "1.1em",ml:"2.9em"}}>
          18:30
          </Typography>
          </Grid>
          <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"5em"}}>
             Flight duration: 4 Hours
          </Typography>
          
          </Grid>
          </Grid>
          <Grid container direction='column' wrap='nowrap' >
          <Divider
              orientation='horizontal'
              flexItem
              sx={{
                opacity:"30%",
                mt: "1.4em",
                borderBottom: "solid 2.5px",
                ml:"2em",
                mr:"2em",
              }}
            />
             <Typography variant='h6' sx={{fontSize:"1em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "1.3em",ml:"1.5em"}}>
             ECONOMY | Seat number: 16A
          </Typography>
          
          </Grid>
        
      </Paper>
     
         </Grid>
         <Grid container direction='column' wrap='nowrap'
        //  sx={{ ml: 20, mr:20, mt: 10}}
         >
         <Paper
          elevation={24}
          variant='outlined'
          sx={{ width: "90%", height: "3em", backgroundColor:"#327089"}}>
              <Grid container direction='row' wrap='nowrap' >
               <Typography variant='h6' sx={{fontSize:"1em" ,color: "#ffffff", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
               Price Summary
            </Typography>
            
            </Grid>
        
      </Paper>
      <Paper
        elevation={24}
        variant='outlined'
        sx={{ width: "90%", height: "12em"}}>
             <Grid container direction='column' wrap='nowrap' >
             <Typography variant='h6' sx={{fontSize:"1.5em" ,color: "#000000", textAlign: "left", gap: "2em",mt: "0.75em",ml:"1.5em"}}>
             1 Ticket
          </Typography>
          <Typography variant='h6' sx={{fontSize:"1.2em" ,color: "#636363", textAlign: "left", gap: "2em",mt: "1em",ml:"1.9em"}}>
          Flight fee: 250$
          </Typography>
          <Typography variant='h6' sx={{fontSize:"0.7em" ,color: "#C8655D", textAlign: "left", gap: "2em",mt: "3em",ml:"1.9em"}}>
          *All prices are in USD. <br />
          *Taxes and Fees are included.
          </Typography>
          
          
          </Grid>
          
         
      </Paper>
      
      {/* <Button variant="contained"  sx={{ width: "20%", backgroundColor:"#C8655D" , fontSize:"1em", mt:"2em"}} >cancel
      </Button>
      <Popover 
  anchorReference="anchorPosition"
  anchorPosition={{ top: 500, left: 1035 }}
  anchorOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
>
  The content of the Popover.
</Popover> */}
<Button variant="contained"  sx={{ width: "20%", backgroundColor:"#C8655D" , fontSize:"1em", mt:"2em"}}  onClick={() => {
                        handleOpenCancel();
                      }}>Cancel</Button>
        
        <CancelFlightModal
        OpenCancel={OpenCancel}
        handleCloseCancel={handleCloseCancel}
      />
      
      </Grid>
     
      </Grid>
    )
}

export default index
