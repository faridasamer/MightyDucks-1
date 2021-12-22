import React, {useState, useEffect} from 'react'
import { Grid, Button } from "@mui/material";
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {toast} from "react-toastify";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import ConfirmFlightModal from '../../components/ConfirmBookingModal';

function ViewSeats({_id, flight, classCabin, N, price, baggage}) {
  const [first, setFirst] = useState(flight.seats.filter((seat)=>{return seat.seatType.toLowerCase()==="first"}));
  const [economy, setEconomy] = useState(flight.seats.filter((seat)=>{return seat.seatType.toLowerCase()==="eco"}));
  const [business, setBusiness] = useState(flight.seats.filter((seat)=>{return seat.seatType.toLowerCase()==="bus"}));
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState([]);
  const [isBook, setBook] = useState(false);
  const [isConfirm, setConfirm] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
    setConfirm(false);
    console.log(isConfirm)
  }
  // const [count, setCount] = useState(0);
  let user;
  var f=[[]];
  var e=[[]];
  var b=[[]];

  const handleSemiConfirm = () => { 
setOpenConfirm(true);
  }
 
  const handleConfirm = () => {
    if(selected.length<N){
      toast.warn('Not enough seats selected', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
    else {
      axios
        .post("http://localhost:8000/user/addFlight", {
            _id:_id,
            flightNumber: flight.flightNumber,
            price: price*selected.length,
            baggage,
            seats:selected,
            bookingNumber: Date.now(),
            class:classCabin==="Eco"?"Economy":classCabin==="Bus"?"Business":"First"
          })
          .then(function (response) {
            console.log(response);
            toast.success('Booking Successful', {
              position: toast.POSITION.BOTTOM_RIGHT
            }) 
            setTimeout(function () {
              setBook(true);
            }, 2000);
          })
          .catch(function (error) {
            if(error)
            toast.warn('You have already booked this flight', {
              position: toast.POSITION.BOTTOM_RIGHT
            })
                        setTimeout(function () {
                          setBook(true);
                        }, 2000);
          });
    }
  }
  const handleClick=(seat)=>{
    if(selected.includes(seat.seatNumber)){
      const x = selected.filter((s)=>{
        return s!==seat.seatNumber;
      })
      setSelected(x);
    }
    else if(seat.reserved){  
      toast.error('Seat already taken', {
      position: toast.POSITION.BOTTOM_RIGHT
    })

    }
    else if(selected.length===N){
      toast.warn('You have selected the maximum number of seats', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
    else{
      const x = selected.concat([seat.seatNumber]);
      setSelected(x);
    }
    
  }

  function func() {
   
  if(!done){
  for(let i=0; i<first.length; i+=8){
    let y=[];
    for(let j=0; j<8; j++){
      if(i+j<first.length){
        y.push(first[i+j]);}
      else{
        break;
      }

    }
    f.push(y);
    
  }
  setFirst(f);

 

  for(let i=0; i<business.length; i+=8){
    let y=[];
    for(let j=0; j<8; j++){
      if(i+j<business.length){
        y.push(business[i+j]);}
      else{
        break;
      }

    }
    b.push(y);
  }
  setBusiness(b);

  for(let i=0; i<economy.length; i+=8){
    let y=[];
    for(let j=0; j<8; j++){
      if(i+j<economy.length){
        y.push(economy[i+j]);}
      else{
        break;
      }

    }
    e.push(y);
  }
  setEconomy(e);
  setDone(true);

}}
useEffect(() => {
  func();
  console.log(classCabin);
})
  if (isBook)
    return <Navigate to="/user" replace={true} state={{userID:_id}} />

    return (
      <Grid style={{ margin: "10em" }} container direction='column'>
        {classCabin === "First" && <Grid item>First Seats</Grid>}
        <Grid container direction='column'>
          {done &&
            classCabin === "First" &&
            first.map((seatArray) => {
              var count = 0;
              return (
                <Grid container direction='row'>
                  {" "}
                  {seatArray.map((seat) => {
                    if (count === 4) {
                      count = 0;
                      return (
                        <>
                          <Grid item>
                            <CheckBoxOutlineBlankIcon fontSize='large' />
                          </Grid>
                          <Grid onClick={() => handleClick(seat)} item>
                            {seat.reserved ? (
                              <AirlineSeatReclineExtraIcon
                                color='error'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            ) : selected.includes(seat.seatNumber) ? (
                              <AirlineSeatReclineExtraIcon
                                color='primary'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            ) : (
                              <AirlineSeatReclineExtraIcon
                                color='success'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            )}
                          </Grid>
                        </>
                      );
                    }
                    count++;
                    return (
                      <Grid onClick={() => handleClick(seat)} item>
                        {seat.reserved ? (
                          <AirlineSeatReclineExtraIcon
                            color='error'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        ) : selected.includes(seat.seatNumber) ? (
                          <AirlineSeatReclineExtraIcon
                            color='primary'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        ) : (
                          <AirlineSeatReclineExtraIcon
                            color='success'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
        </Grid>
        {classCabin === "Bus" && <Grid item>Business Seats</Grid>}
        <Grid container direction='column'>
          {done &&
            classCabin === "Bus" &&
            business.map((seatArray) => {
              var count = 0;
              return (
                <Grid container direction='row'>
                  {" "}
                  {seatArray.map((seat) => {
                    if (count === 4) {
                      count = 0;
                      return (
                        <>
                          <Grid item>
                            <CheckBoxOutlineBlankIcon fontSize='large' />
                          </Grid>
                          <Grid onClick={() => handleClick(seat)} item>
                            {seat.reserved ? (
                              <AirlineSeatReclineExtraIcon
                                color='error'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            ) : selected.includes(seat.seatNumber) ? (
                              <AirlineSeatReclineExtraIcon
                                color='primary'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            ) : (
                              <AirlineSeatReclineExtraIcon
                                color='success'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            )}
                          </Grid>
                        </>
                      );
                    }
                    count++;
                    return (
                      <Grid onClick={() => handleClick(seat)} item>
                        {seat.reserved ? (
                          <AirlineSeatReclineNormalIcon
                            color='error'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        ) : selected.includes(seat.seatNumber) ? (
                          <AirlineSeatReclineExtraIcon
                            color='primary'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        ) : (
                          <AirlineSeatReclineExtraIcon
                            color='success'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
        </Grid>
        {classCabin === "Eco" && <Grid item>Economy Seats</Grid>}
        <Grid container direction='column'>
          {done &&
            classCabin === "Eco" &&
            economy.map((seatArray) => {
              var count = 0;
              return (
                <Grid container direction='row'>
                  {" "}
                  {seatArray.map((seat) => {
                    if (count === 4) {
                      count = 0;
                      return (
                        <>
                          <Grid item>
                            <CheckBoxOutlineBlankIcon fontSize='large' />
                          </Grid>
                          <Grid onClick={() => handleClick(seat)} item>
                            {seat.reserved ? (
                              <AirlineSeatReclineExtraIcon
                                color='error'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            ) : selected.includes(seat.seatNumber) ? (
                              <AirlineSeatReclineExtraIcon
                                color='primary'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            ) : (
                              <AirlineSeatReclineExtraIcon
                                color='success'
                                fontSize='large'
                                id={seat.seatNumber}
                              />
                            )}
                          </Grid>
                        </>
                      );
                    }
                    count++;
                    return (
                      <Grid onClick={() => handleClick(seat)} item>
                        {seat.reserved ? (
                          <AirlineSeatReclineNormalIcon
                            color='error'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        ) : selected.includes(seat.seatNumber) ? (
                          <AirlineSeatReclineExtraIcon
                            color='primary'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        ) : (
                          <AirlineSeatReclineExtraIcon
                            color='success'
                            fontSize='large'
                            id={seat.seatNumber}
                          />
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
        </Grid>
        <Grid item>
          <Button onClick={handleSemiConfirm} variant='contained'>
            Confirm Selection
          </Button>
        </Grid>
        <ConfirmFlightModal
          openConfirm={openConfirm}
          handleCloseConfirm={handleCloseConfirm}
          setConfirmed={setConfirm}
          handleCon={handleConfirm}
        />
      </Grid>
    );
}

export default ViewSeats
