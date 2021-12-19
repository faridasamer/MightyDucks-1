import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import axios from "axios";


function CancelFlightModal({ user, handleCloseCancel, OpenCancel }) {

   //const _id = user._id;


  return (
    <Modal
      open={OpenCancel}
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