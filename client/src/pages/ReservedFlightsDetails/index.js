import React from "react";
import CancelFlightModal from "../../components/CancelFlightModal";
import axios from "axios";
import moment from "moment";
import { Grid, Paper, Typography, Divider, Button, CircularProgress } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import formatDate from "../../API/formatDate";




function FlightDetails() {
  const location = useLocation();


  const { flight, userID } = location.state;
  const [baggage, setBaggage] = React.useState(0);
  const [seats, setSeats] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [bookingNumber, setBookingNumber] = React.useState(0);
  const [fullClass, setFullClass] = React.useState("");
  const [user, setUser] = React.useState({});
  const [openCancel, setOpenCancel] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const handleOpenCancel = () => setOpenCancel(true);
  const handleCloseCancel = () => setOpenCancel(false);
  const from = flight.from;
  const to = flight.to;
  let departureDate = flight.departureTime;
  let arrivalDate = flight.arrivalTime;
  let duration = flight.duration;
  


  React.useEffect(() => {
    axios.post(`http://localhost:8000/user/getUserByID`, {
      _id: userID
    }).then(res => {
      const curFlights = res.data.flights;
      setUser(res.data);
      for (let curFlight in curFlights) {
        if (user.flights[curFlight].flightNumber === flight.flightNumber) {
          setBaggage(user.flights[curFlight].baggage);
          setSeats(user.flights[curFlight].seat.map((seat) => <>{seat+ " "}</>));
          setPrice(user.flights[curFlight].price);
          setBookingNumber(user.flights[curFlight].bookingNumber);

          let cabinClass=user.flights[curFlight].class

          if (cabinClass === "Eco") {
            setFullClass("Economy");
          } else if (cabinClass === "Bus") {
            setFullClass("Business");
          } else if (cabinClass === "First") {
            setFullClass("First Class");
          }
          
           setLoading(false);
        }
      }
     
    }).catch(err => {
      console.log(err);
    }
    )
  }, [user]);

    if (loading) {
      return (
        <Grid container direction='column' justify='center' alignItems='center'>
          <CircularProgress
            size={100}
            style={{ alignSelf: "center", marginTop: "20%" }}
          />
        </Grid>
      );
    }
    return (
      <Grid container direction='row' wrap='nowrap' sx={{ mt: 10 }}>
        <Grid
          container
          direction='column'
          wrap='nowrap'
          marginLeft='3em'
          width='180%'>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "7em", backgroundColor: "#327089" }}>
            <Grid container direction='row'>
              <Typography
                variant='h5'
                sx={{
                  color: "#ffffff",
                  textAlign: "left",
                  gap: "2em",
                  mt: "1em",
                  ml: "1em",
                }}>
                {from}
              </Typography>
              <ArrowRightAltIcon
                sx={{
                  fontSize: "5em",
                  color: "#ffffff",
                }}
              />
              <Typography
                variant='h5'
                sx={{
                  color: "#ffffff",
                  textAlign: "right",
                  gap: "2em",
                  mt: "1em",
                }}>
                {to}
              </Typography>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h5'
                  sx={{
                    fontSize: "0.75em",
                    color: "#d3d3d3",
                    textAlign: "left",
                    gap: "2em",
                    mt: "-0.5em",
                    ml: "2em",
                  }}>
                  {formatDate(departureDate)} - {formatDate(arrivalDate)}, round
                  trip ticket
                </Typography>
              </Grid>
              <Typography
                variant='h5'
                sx={{
                  fontSize: "1.75em",
                  color: "#ffffff",
                  ml: "25em",
                  mt: "1.25em",
                }}>
                RESERVED
              </Typography>
            </Grid>
          </Paper>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "3em" }}>
            <Typography
              variant='h6'
              sx={{
                fontSize: "1em",
                color: "#000000",
                textAlign: "left",
                gap: "2em",
                mt: "0.75em",
                ml: "1.5em",
              }}>
              Confirmation number: {bookingNumber}
            </Typography>
          </Paper>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "3em", backgroundColor: "#327089" }}>
            <Grid container direction='row' wrap='nowrap'>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1em",
                  color: "#ffffff",
                  textAlign: "left",
                  gap: "2em",
                  mt: "0.75em",
                  ml: "1.5em",
                }}>
                {formatDate(departureDate)}
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "0.85em",
                  color: "#d3d3d3",
                  textAlign: "left",
                  gap: "2em",
                  mt: "1.1em",
                  ml: "1.5em",
                }}>
                Departure, non-stop
              </Typography>
            </Grid>
          </Paper>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "11em" }}>
            <Grid container direction='row' wrap='nowrap'>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "1em",
                    color: "#000000",
                    textAlign: "left",
                    gap: "2em",
                    mt: "0.75em",
                    ml: "1.5em",
                  }}>
                  {from}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "0.85em",
                    color: "#636363",
                    textAlign: "left",
                    gap: "2em",
                    mt: "1.1em",
                    ml: "1.9em",
                  }}>
                  {formatDate(departureDate).slice(11, 20)}
                </Typography>
              </Grid>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "1em",
                    color: "#000000",
                    textAlign: "left",
                    gap: "2em",
                    mt: "0.75em",
                    ml: "2.5em",
                  }}>
                  {to}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "0.85em",
                    color: "#636363",
                    textAlign: "left",
                    gap: "2em",
                    mt: "1.1em",
                    ml: "2.9em",
                  }}>
                  {formatDate(moment(departureDate).add(3, "h")).slice(11, 20)}
                </Typography>
              </Grid>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "1em",
                    color: "#000000",
                    textAlign: "left",
                    gap: "2em",
                    mt: "0.75em",
                    ml: "5em",
                  }}>
                  Flight duration: {duration} Hours
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction='column' wrap='nowrap'>
              <Divider
                orientation='horizontal'
                flexItem
                sx={{
                  opacity: "30%",
                  mt: "1.4em",
                  borderBottom: "solid 2.5px",
                  ml: "2em",
                  mr: "2em",
                }}
              />
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1em",
                  color: "#000000",
                  textAlign: "left",
                  gap: "2em",
                  mt: "1.3em",
                  ml: "1.5em",
                }}>
                {fullClass} | Seat Number(seats): {seats} | {baggage} Bag(s) |
                23KG/Bag
              </Typography>
            </Grid>
          </Paper>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "3em", backgroundColor: "#327089" }}>
            <Grid container direction='row' wrap='nowrap'>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1em",
                  color: "#ffffff",
                  textAlign: "left",
                  gap: "2em",
                  mt: "0.75em",
                  ml: "1.5em",
                }}>
                {formatDate(departureDate)}
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "0.85em",
                  color: "#d3d3d3",
                  textAlign: "left",
                  gap: "2em",
                  mt: "1.1em",
                  ml: "1.5em",
                }}>
                Return, non-stop
              </Typography>
            </Grid>
          </Paper>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "11em" }}>
            <Grid container direction='row' wrap='nowrap'>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "1em",
                    color: "#000000",
                    textAlign: "left",
                    gap: "2em",
                    mt: "0.75em",
                    ml: "1.5em",
                  }}>
                  {to}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "0.85em",
                    color: "#636363",
                    textAlign: "left",
                    gap: "2em",
                    mt: "1.1em",
                    ml: "1.9em",
                  }}>
                  {formatDate(departureDate).slice(11, 20)}
                </Typography>
              </Grid>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "1em",
                    color: "#000000",
                    textAlign: "left",
                    gap: "2em",
                    mt: "0.75em",
                    ml: "2.5em",
                  }}>
                  {from}
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "0.85em",
                    color: "#636363",
                    textAlign: "left",
                    gap: "2em",
                    mt: "1.1em",
                    ml: "2.9em",
                  }}>
                  {formatDate(moment(departureDate).add(3, "h")).slice(11, 22)}
                </Typography>
              </Grid>
              <Grid container direction='column' wrap='nowrap'>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: "1em",
                    color: "#000000",
                    textAlign: "left",
                    gap: "2em",
                    mt: "0.75em",
                    ml: "5em",
                  }}>
                  Flight duration: {duration} Hours
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction='column' wrap='nowrap'>
              <Divider
                orientation='horizontal'
                flexItem
                sx={{
                  opacity: "30%",
                  mt: "1.4em",
                  borderBottom: "solid 2.5px",
                  ml: "2em",
                  mr: "2em",
                }}
              />
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1em",
                  color: "#000000",
                  textAlign: "left",
                  gap: "2em",
                  mt: "1.3em",
                  ml: "1.5em",
                }}>
                {fullClass} | Seat number: {seats} | {baggage} Bag(s) | 23KG/Bag
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid
          container
          direction='column'
          wrap='nowrap'
          //  sx={{ ml: 20, mr:20, mt: 10}}
        >
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "3em", backgroundColor: "#327089" }}>
            <Grid container direction='row' wrap='nowrap'>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1em",
                  color: "#ffffff",
                  textAlign: "left",
                  gap: "2em",
                  mt: "0.75em",
                  ml: "1.5em",
                }}>
                Price Summary
              </Typography>
            </Grid>
          </Paper>
          <Paper
            elevation={24}
            variant='outlined'
            sx={{ width: "90%", height: "12em" }}>
            <Grid container direction='column' wrap='nowrap'>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1.5em",
                  color: "#000000",
                  textAlign: "left",
                  gap: "2em",
                  mt: "0.75em",
                  ml: "1.5em",
                }}>
                {seats.length === 1 ? "1 Ticket" : seats.length + " Tickets"}
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "1.2em",
                  color: "#636363",
                  textAlign: "left",
                  gap: "2em",
                  mt: "1em",
                  ml: "1.9em",
                }}>
                Flight fee: {price * seats.length}$
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontSize: "0.7em",
                  color: "#C8655D",
                  textAlign: "left",
                  gap: "2em",
                  mt: "3em",
                  ml: "1.9em",
                }}>
                *All prices are in USD. <br />
                *Taxes and Fees are included.
              </Typography>
            </Grid>
          </Paper>
          <Button
            variant='contained'
            sx={{
              width: "40%",
              backgroundColor: "#C8655D",
              fontSize: "1em",
              mt: "2em",
            }}
            onClick={() => {
              handleOpenCancel();
            }}>
            Cancel Flight
          </Button>
          <CancelFlightModal
            OpenCancel={openCancel}
            handleCloseCancel={handleCloseCancel}
            flight={flight}
            user={user}
            seats={seats}
          />
        </Grid>
      </Grid>
    );
}

export default FlightDetails;
