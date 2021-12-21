import React from 'react'
import axios from 'axios'
import { Grid, Typography } from '@mui/material'
import UserSearch from '../../components/UserSearch'
import SearchResults from '../../components/SearchResults';

function Home() {

    const [flights, setFlights] = React.useState(["empty"]);
    const [cabinClass, setCabinClass] = React.useState('');
    const [error, setError] = React.useState(false);

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
              setError(false);
          })
          .catch((err) => {
            setError(true);
          });
    }

    return (
        <Grid container sx={{ mt: 5, placeContent: "center" }} >
            {error && <Typography variant="h5" sx={{ color: "secondary.main"}}>Please Enter All Search Requirements</Typography>}
            <UserSearch search={handleSearch} />
            <SearchResults flights={flights} cabinClass={cabinClass} />
        </Grid>
    )
}

export default Home
