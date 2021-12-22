import React from 'react'
import axios from 'axios'
import { Grid, Typography } from '@mui/material'
import UserSearch from '../../components/UserSearch'
import SearchResults from '../../components/SearchResults';
import { useLocation } from "react-router-dom";
function Home() {
    const Location = useLocation();
    const [flights, setFlights] = React.useState(["empty"]);
    const [cabinClass, setCabinClass] = React.useState('');
    const [error, setError] = React.useState(false);
    const [passengerNo, setPassengerNo] = React.useState(0);
    const handleSearch = (Class, passengers, arrivalDate, departureDate, from, to) => {

        axios
          .post("http://localhost:8000/user/searchFlights", {
            arrivalDate: arrivalDate,
            departureDate: departureDate,
            passengers: passengers,
            class: Class,
            from: from,
            to: to,
          })
          .then((res) => {
              setFlights(res.data);
              setCabinClass(Class);
              setPassengerNo(passengers);
              setError(false);
          })
          .catch((err) => {
            setError(true);
          });
    }

    return (
        <Grid container sx={{ mt: 5, placeContent: "center" }} >
            {error && <Typography variant="h5" sx={{ color: "secondary.main"}}>Please Enter All Search Requirements</Typography>}
            <UserSearch search={handleSearch} user = {Location.state.user}/>
            <SearchResults flights={flights} user = {Location.state.user} cabinClass={cabinClass} passengerNo={passengerNo}/>
        </Grid>
    )
}

export default Home
