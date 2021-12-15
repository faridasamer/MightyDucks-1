import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Ticket from "./components/Ticket";
import { Box } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      <Box sx={{ mt: "1em" }}>
        <Ticket />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
