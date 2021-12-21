import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/UserProfile";
import EditProfile from "./components/EditProfile";
import Booking from "./pages/BookingV";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./index.css";
import ViewSeats from "./pages/ViewSeats";

const cabin = "First"
const num = 2;
const flight = {seats: [{seatNumber:"A1", seatType:"first", reserved:true}, {seatNumber:"A2", seatType:"first", reserved:false}, {seatNumber:"A3", seatType:"first", reserved:false}, {seatNumber:"A4", seatType:"first", reserved:false}, {seatNumber:"A5", seatType:"first", reserved:false}, {seatNumber:"A6", seatType:"first", reserved:false}, {seatNumber:"A7", seatType:"first", reserved:false}, {seatNumber:"A3", seatType:"business", reserved:false}, {seatNumber:"A1", seatType:"business", reserved:false}, {seatNumber:"A1", seatType:"economy", reserved:false},{seatNumber:"A1", seatType:"economy", reserved:false} ]}
ReactDOM.render(
  <Router>
  <ToastContainer />
    <Box sx={{ m: -1, overflowX: "hidden" }}>
      <ThemeProvider theme={theme}>
        <ViewSeats N={num} classCabin={cabin} flight={flight}/>
      </ThemeProvider>
    </Box>
  </Router>,
  document.getElementById("root")
);