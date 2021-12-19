import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import { Box } from "@mui/material";
import ReservedFlightsDetails from "./pages/ReservedFlights";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <Navbar /> */}
      <Box sx={{ mt: "1em" }}>
        <ReservedFlightsDetails />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
