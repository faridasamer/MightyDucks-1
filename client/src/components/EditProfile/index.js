import React from 'react'
import { useState } from "react";
import { Grid, Avatar, Button, TextField } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { LocalizationProvider, DatePicker } from "@mui/lab";
import moment from "moment";
import DateAdapter from "@mui/lab/AdapterMoment";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import UpdateUserModal from "./../UpdateUserModal";

function EditProfile() {
    
    const location = useLocation();

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(moment());
    const [homeAddress, setHomeAddress] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [openEdit, setOpenEdit] = React.useState(false);
  React.useEffect(() => {
      console.log("Edit Profile");
      axios.post("http://localhost:8000/user/getUserByID", {
            _id: location.state._id
          })
          .then((res) => {
              if(res.data){
                setUsername(res.data.Username);
                setEmail(res.data.Email);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName)
                setPassportNumber(res.data.passportNumber)
                setDateOfBirth(res.data.dateOfBirth)
                setHomeAddress(res.data.homeAddress)
                setCountryCode(res.data.countryCode)
              }
          })
          .catch((err) => {
            console.log(err)
          });
        },[location])
        
    
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    //handle
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
        };
        const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        };
        const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
        };
        const handleChangeLastName = (event) => {
        setLastName(event.target.value);
        };
        const handleChangePassportNumber = (event) => {
        setPassportNumber(event.target.value);
        };
        const handleDateOfBirth = (newValue) => {
        setDateOfBirth(moment.utc(moment.utc(newValue).format()));
        };
        const handleChangeHomeAddress = (event) => {
        setHomeAddress(event.target.value);
        };
        const handleChangeCountryCode = (event) => {
        setCountryCode(event.target.value);
        };
    return (
        
     <Grid container 
     direction="column"  
     justifyContent="center"
     alignItems="center"
     sx={{width:"100%", mt: 10}}>
        <LocalizationProvider dateAdapter={DateAdapter}>
        <Avatar sx={{ bgcolor: "primary.main", width: 55, height: 55, mb:10, mt:2 }}>{firstName && (firstName).charAt(0)+(lastName).charAt(0)}</Avatar>
        <Grid container 
        direction="column"  
        justifyContent="left"
        alignItems="left"
        rowSpacing={3}>
            <Grid container sx={{ml: 40, mb: 5}}><PersonOutlineOutlinedIcon sx={{mr: 1, mt:2}}/>
            <TextField id="standard-basic" label="Username" 
            value={Username} onChange={handleChangeUsername} variant="standard" size="small" 
            sx={{mr:2, width: "17%" }} />
            <TextField id="ostandard-basic" label="First Name" 
            value={firstName} onChange={handleChangeFirstName} variant="standard" size="small" 
            sx={{mr:2, width: "17%" }}/>
            <TextField id="standard-basic" label="Last Name" 
            value={lastName} onChange={handleChangeLastName} variant="standard" size="small" 
            sx={{width: "17%" }} /></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><EmailOutlinedIcon sx={{mr: 1, mt:2}}/>
            <TextField id="standard-basic" label="Email" 
            value={Email} onChange={handleChangeEmail} variant="standard" size="small" 
            sx={{width: "17%"}} /></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><ContactPageOutlinedIcon sx={{mr: 1, mt:2}}/>
            <TextField id="standard-basic" label="Passport Number" 
            value={passportNumber} onChange={handleChangePassportNumber} variant="standard" size="small" 
            sx={{ width: "17%" }}/></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><DateRangeOutlinedIcon sx={{mr: 1, mt:1.75}}/>
            <DatePicker label="Date of Birth" value={dateOfBirth} onChange={handleDateOfBirth}
            renderInput={(params) => (
                <TextField {...params} sx={{ width: "17%"}} variant="standard" />
            )}
            sx={{ width: "17%" }}
            /></Grid>
            <Grid container sx={{ml: 40, mb: 5}}><HomeOutlinedIcon sx={{mr: 1, mt:2}}/>
            <TextField id="standard-basic" label="Address" 
            value={homeAddress} onChange={handleChangeHomeAddress} variant="standard" size="small" 
            sx={{ width: "17%" }} /></Grid>
            <Grid container sx={{ml: 40, mb: 2}}><PublicOutlinedIcon sx={{mr: 1, mt:2}}/>
            <TextField id="standard-basic" label="Country" 
            value={countryCode} onChange={handleChangeCountryCode} variant="standard" size="small" 
            sx={{ width: "17%" }} /></Grid>
        </Grid>
        <Button variant="contained" size="small" onClick={() => {
                        handleOpenEdit();
                      }}>SAVE CHANGES</Button>
        </LocalizationProvider>
        <UpdateUserModal
        openEdit={openEdit}
        handleCloseEdit={handleCloseEdit}
        newUsername = {Username}
        newEmail = {Email}
        newFirst = {firstName}
        newLast = {lastName}
        newPassport = {passportNumber}
        newDob = {dateOfBirth}
        newHome = {homeAddress}
        newCountry = {countryCode}
        _id = {location.state._id}
      />
     </Grid>
    )
}

export default EditProfile
