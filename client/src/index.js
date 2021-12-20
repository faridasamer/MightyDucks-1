import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";

ReactDOM.render(
  <Router>
    <Box sx={{ m: -1, overflowX: "hidden" }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='admin' element={<AdminDashboard />} />
        </Routes>
      </ThemeProvider>
    </Box>
  </Router>,
  document.getElementById("root")
);