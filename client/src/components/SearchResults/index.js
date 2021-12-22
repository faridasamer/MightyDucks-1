import React from 'react'
import { Grid,Typography } from "@mui/material";
import  Ticket  from "../Ticket";

function SearchResults({ flights, cabinClass, passengerNo, user }) {

    const [noFlights,setNoflights] = React.useState(false);

    React.useEffect(() => {
        if (flights.length === 0) {
            setNoflights(true);
        }
        else {
            setNoflights(false);
        }
    }, [flights]);

    if (flights[0] === "empty") {
        return <Grid></Grid>
    }

    return (
        <Grid container sx={{ width: "90%", placeContent: "center", mt:5 }}>
            {noFlights && <Typography variant="h5" sx={{ color: "secondary.main" }}>No Flights Found</Typography>}
            {flights.map((flight, index) => {
                return (
                    <Ticket flight={flight} cabinClass={cabinClass} key={index} passengerNo={passengerNo} user={user}/>
                )
            })}
        </Grid>
    )
}

export default SearchResults
