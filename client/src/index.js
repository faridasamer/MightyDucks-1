import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/Login";
import { Box } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <Box sx={{m:-1, overflowX:"hidden"}} >
      <ThemeProvider theme={theme}>
        <Navbar />
          <AdminDashboard />
      </ThemeProvider>
    </Box>
  </React.StrictMode>,
  document.getElementById("root")
);
