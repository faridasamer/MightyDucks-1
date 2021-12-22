import React from 'react'
import { Grid, Typography, Button, Avatar } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

function UserProfile(user) {
    const location = useLocation();
    const[userInfo, setUserInfo] = React.useState({})

    React.useEffect(() => {
    axios.post("http://localhost:8000/user/getUserByID", {
            _id: location.state.userID
          })
          .then((res) => {
              if(res.data){
                setUserInfo(res.data);
                console.log(res.data)
                console.log(userInfo)
              }}
          ).catch((error) => {
            console.log(error)
          })
  },[])
  
    return (
      <Grid container align='center' sx={{ mt: 10 }}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ width: "100%" }}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            rowSpacing={2}
            wrap='nowrap'>
            <Grid item>
              <Avatar sx={{ bgcolor: "primary.main", width: 55, height: 55 }}>
                {userInfo.firstName && (userInfo.firstName).charAt(0)+(userInfo.lastName).charAt(0)}
              </Avatar>
            </Grid>
            <Grid item sx={{ mb: 10 }}>
            <Link to={"itinerary"} state ={{ _id: location.state.userID}}>
              <Button variant='outlined' size='small'>
                My Flights
              </Button>
            </Link>
            </Grid>
          </Grid>
          <Grid
            container
            direction='column'
            justifyContent='left'
            alignItems='left'
            rowSpacing={3}>
            <Grid container sx={{ ml: 40, mb: 5 }}>
              <PersonOutlineOutlinedIcon sx={{ mr: 1 }} />
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ fontWeight: 500 }}>
                Username:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.Username}
              </Typography>
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ ml: 2, fontWeight: 500 }}>
                First Name:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.firstName}
              </Typography>
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ ml: 2, fontWeight: 500 }}>
                Last Name:{" "}
              </Typography>
              <Typography display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.lastName}
              </Typography>
            </Grid>
            <Grid container sx={{ ml: 40, mb: 5 }}>
              <EmailOutlinedIcon sx={{ mr: 1 }} />
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ fontWeight: 500 }}>
                Email:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.Email}
              </Typography>
            </Grid>
            <Grid container sx={{ ml: 40, mb: 5 }}>
              <ContactPageOutlinedIcon sx={{ mr: 1 }} />
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ fontWeight: 500 }}>
                Passport Number:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.passportNumber}
              </Typography>
            </Grid>
            <Grid container sx={{ ml: 40, mb: 5 }}>
              <DateRangeOutlinedIcon sx={{ mr: 1 }} />
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ fontWeight: 500 }}>
                Date of Birth:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && (userInfo.dateOfBirth).substring(0,10)}
              </Typography>
            </Grid>
            <Grid container sx={{ ml: 40, mb: 5 }}>
              <HomeOutlinedIcon sx={{ mr: 1 }} />
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ fontWeight: 500 }}>
                Address:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.homeAddress}
              </Typography>
            </Grid>
            <Grid container sx={{ ml: 40, mb: 2 }}>
              <PublicOutlinedIcon sx={{ mr: 1 }} />
              <Typography
                variant='body1'
                display='inline'
                color='primary.main'
                sx={{ fontWeight: 500 }}>
                Country:{" "}
              </Typography>
              <Typography variant='body1' display='inline' sx={{ ml: 2 }}>
                {userInfo.firstName && userInfo.countryCode}
              </Typography>
            </Grid>
          </Grid>
          <Link to={`/user/modify/${userInfo.firstName && userInfo.Username}`} state ={{ _id: location.state.userID}}>
            <Button variant='contained' size='small'>
              EDIT PROFILE
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
}

export default UserProfile
