import React, {useState, useEffect} from 'react'
import { Grid, Button } from "@mui/material";
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import {toast} from "react-toastify";

function ViewSeats({flight, classCabin, N}) {
  const [first, setFirst] = useState(flight.seats.filter((seat)=>{return seat.seatType.toLowerCase()==="first"}));
  const [economy, setEconomy] = useState(flight.seats.filter((seat)=>{return seat.seatType.toLowerCase()==="economy"}));
  const [business, setBusiness] = useState(flight.seats.filter((seat)=>{return seat.seatType.toLowerCase()==="business"}));
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState([]);

  var f=[[]];
  var e=[[]];
  var b=[[]];
 
  const handleConfirm=()=>{
    if(selected.length<N){
      toast.warn('Not enough seats selected', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
    else{
      //proceed
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
  for(let i=0; i<first.length; i+=9){
    let y=[];
    for(let j=0; j<9; j++){
      if(i+j<first.length){
        y.push(first[i+j]);}
      else{
        break;
      }

    }
    f.push(y);
    
  }
  setFirst(f);

 

  for(let i=0; i<business.length; i+=9){
    let y=[];
    for(let j=0; j<9; j++){
      if(i+j<business.length){
        y.push(business[i+j]);}
      else{
        break;
      }

    }
    b.push(y);
  }
  setBusiness(b);

  for(let i=0; i<economy.length; i+=9){
    let y=[];
    for(let j=0; j<9; j++){
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
  
  //console.log(f);
  // console.log(e);
  // console.log(b); 
}}
useEffect(() => {
  func();
})

    return (
        <Grid container direction='column'>
          {classCabin==="First" && <Grid item>First Seats</Grid>}
          <Grid container direction='column'>
            {done && classCabin==="First" && first.map((seatArray)=>{
              return (<Grid container direction='row'> {seatArray.map((seat)=>{
                return (<Grid onClick={()=>handleClick(seat)} item>{seat.reserved?<AirlineSeatReclineExtraIcon color='error' fontSize="large" id={seat.seatNumber}/>: selected.includes(seat.seatNumber)?<AirlineSeatReclineExtraIcon color='primary' fontSize="large" id={seat.seatNumber}/>:<AirlineSeatReclineExtraIcon color='success' fontSize="large" id={seat.seatNumber}/>}</Grid>)
              })}</Grid>)
            })}
          </Grid>
          {classCabin==="Business" && <Grid item>Business Seats</Grid>}
          <Grid container direction='column'>
            {done && classCabin==="Business" && business.map((seatArray)=>{
              return (<Grid container direction='row'> {seatArray.map((seat)=>{
                return (<Grid onClick={()=>handleClick(seat)} item>{seat.reserved?<AirlineSeatReclineNormalIcon color='error' fontSize="large" id={seat.seatNumber}/>: selected.includes(seat.seatNumber)?<AirlineSeatReclineExtraIcon color='primary' fontSize="large" id={seat.seatNumber}/>:<AirlineSeatReclineExtraIcon color='success' fontSize="large" id={seat.seatNumber}/>}</Grid>)
              })}</Grid>)
            })}
          </Grid>
          {classCabin==="Economy" && <Grid item>Economy Seats</Grid>}
          <Grid container direction='column'>
            {done && classCabin==="Economy" && economy.map((seatArray)=>{
              return (<Grid container direction='row'> {seatArray.map((seat)=>{
                return (<Grid onClick={()=>handleClick(seat)} item>{seat.reserved?<AirlineSeatReclineNormalIcon color='error' fontSize="large" id={seat.seatNumber}/>: selected.includes(seat.seatNumber)?<AirlineSeatReclineExtraIcon color='primary' fontSize="large" id={seat.seatNumber}/>:<AirlineSeatReclineExtraIcon color='success' fontSize="large" id={seat.seatNumber}/>}</Grid>)
              })}</Grid>)
            })}
          </Grid>
          <Grid item><Button onClick={handleConfirm} variant='contained'>Confirm Selection</Button></Grid>
        </Grid>
    )
}

export default ViewSeats
