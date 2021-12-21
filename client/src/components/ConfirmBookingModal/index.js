import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure();
function ConfirmFlightModal({ user, flight, cabin, price, baggage, handleCloseConfirm, openConfirm, tickets }) {
  const _id = user._id;
  let data = {
    _id : _id,
    flightNumber: flight.flightNumber,
    price: price,
    baggage: baggage,
    seat: "F16",
    bookingNumber: JSON.stringify(Date.now()),
    class: cabin,
    tickets: tickets
  }
  console.log(data)
  const handleConfirm = () => {
    axios.post("http://localhost:8000/user/addFlight", data)
      .then(()=> {
          toast.success('Flight booked successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
          handleCloseConfirm();
      })
      .catch((error) => {
        toast.error('An error occurred', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        handleCloseConfirm();
        console.log(error);
      });
  };


  return (
    <Modal
      open={openConfirm}
      onClose={handleCloseConfirm}
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
             Are you sure you want to Book this flight?
        </Typography>
        <Button
          variant='outlined'
          color='success'
          sx={{ m: 2 }}
          onClick={handleConfirm}
          >
          Yes
        </Button>
        <Button
          variant='outlined'
          color='error'
          sx={{ m: 2 }}
          onClick={handleCloseConfirm}>
          No
        </Button>
      </Box>
    </Modal>
  );
}

export default ConfirmFlightModal;