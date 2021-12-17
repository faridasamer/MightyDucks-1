import React from 'react'
import { Grid, Typography, Button } from '@mui/material';
import { Avatar} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

function UserProfile(user) {
    const {Username, Email, firstName, lastName, passportNumber, dateOfBirth, homeAddress, coutryCode} = user;
    return (
        <Grid container align="center">
     <Grid container 
     direction="column"  
     justifyContent="center"
     alignItems="center"
     sx={{width:"100%"}}>
         <Grid container
         direction="column"
         justifyContent="center"
         alignItems="center"
         rowSpacing={2}
         wrap="nowrap">
        <Grid item><Avatar sx={{ bgcolor: "primary.main", width: 55, height: 55 }}>FA</Avatar></Grid>
        <Grid item sx={{mb:10}}><Button variant="outlined" size="small">My Flights</Button></Grid>
        </Grid>
        <Grid container 
        direction="column"  
        justifyContent="left"
        alignItems="left"
        rowSpacing={3}>
            <Grid container sx={{ml: 40, mb: 5}}><PersonOutlineOutlinedIcon sx={{mr: 1}}/><Typography variant="body1" display="inline" color='primary.main' sx={{fontWeight: 500}}>Username: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>Farida12</Typography> 
            <Typography variant="body1" display="inline" color='primary.main' sx={{ml: 2, fontWeight: 500}}>First Name: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>Farida</Typography>
            <Typography variant="body1" display="inline" color='primary.main' sx={{ml: 2, fontWeight: 500}}>Last Name: </Typography><Typography display="inline" sx={{ml: 2}}>Aldesouky</Typography></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><EmailOutlinedIcon sx={{mr: 1}}/><Typography variant="body1" display="inline" color='primary.main' sx={{fontWeight: 500}}>Email: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>farida@gmail.com</Typography></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><ContactPageOutlinedIcon sx={{mr: 1}}/><Typography variant="body1" display="inline" color='primary.main' sx={{fontWeight: 500}}>Passport Number: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>12345</Typography></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><DateRangeOutlinedIcon sx={{mr: 1}}/><Typography variant="body1" display="inline" color='primary.main' sx={{fontWeight: 500}}>Date of Birth: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>2/2/2000</Typography></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><HomeOutlinedIcon sx={{mr: 1}}/><Typography variant="body1" display="inline" color='primary.main' sx={{fontWeight: 500}}>Address: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>5th Settlement</Typography></Grid>
            <Grid container sx={{ml: 40, mb: 2}}><PublicOutlinedIcon sx={{mr: 1}}/><Typography variant="body1" display="inline" color='primary.main' sx={{fontWeight: 500}}>Country: </Typography><Typography variant="body1" display="inline" sx={{ml: 2}}>Egypt</Typography></Grid>
        </Grid>
        <Button variant="contained" size="small">EDIT PROFILE</Button>
     </Grid>
     </Grid>
    )
}

export default UserProfile
