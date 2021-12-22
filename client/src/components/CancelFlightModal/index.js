import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";

function CancelFlightModal({ user, handleCloseCancel, OpenCancel, flight, seats }) {
    let navigate = useNavigate();
    const _id = user._id;
    let data = {
    _id : _id,
    flightNumber: flight.flightNumber,
    seats: seats
    }

  const handleDelete = () => {
    axios.post("http://localhost:8000/user/deleteFlight", data)
      .then(()=> {
          toast.success('Flight cancelled successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
          handleCloseCancel();
      })
      .catch((error) => {
        toast.error('An error occurred', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        handleCloseCancel();
        console.log(error);
      });
    setTimeout(() => {
      navigate("/user/flights", {replace : true, state: {_id: user._id}});
    }
      , 1000);
  
  };


  return (
    <Modal
      open = {OpenCancel}
      onClose={handleCloseCancel}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}>
        <Typography id='modal-modal-title' variant='h6' component='h2' sx={{ml:2}}>
             Are you sure you want to cancel this flight?
        </Typography>
        <Button
          onClick={handleDelete}
          variant='outlined'
          color='error'
          sx={{ m: 2 }}
          >
          Yes, I want to cancel
        </Button>
        <Button
          variant='outlined'
          color='success'
          sx={{ m: 2 }}
          onClick={handleCloseCancel}>
          Back
        </Button>
      </Box>
    </Modal>
  );
}

export default CancelFlightModal;