import React from "react";
import { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";

//main components
import SearchFlight from "../../components/SearchFlight";
import AddFlight from "../../components/AddFlight";
import DisplayFlight from "../../components/DisplayFlight";

function AdminDashboard() {
  //States
  const [add, setAdd] = useState(false);
  const [display, setDisplay] = useState(true);
  const [search, setSearch] = useState(false);
  
  //component switch
  const handleChange = (input) => {
    if (input === "add") {
      setAdd(true);
      setSearch(false);
      setDisplay(false);
    } else if (input === "edit") {
      setAdd(false);
      setDisplay(false);
      setSearch(false);
    } else if (input === "display") {
      setAdd(false);
      setDisplay(true);
      setSearch(false);
    } else if (input === "remove") {
      setAdd(false);
      setDisplay(false);
      setSearch(false);
    } else if (input === "search") {
      setAdd(false);
      setDisplay(false);
      setSearch(true);
    }
  };


  return (
    <Grid direction='row' container>
      <Grid
        direction='column'
        lg={2}
        md={2}
        sm={1}
        sx={{
          mt: {
            xs: 10,
            md: 5,
            lg: 10,
          },
          gap: "1em",
        }}
        container>
        <Typography variant='h4' color='secondary' align='center'>
          Admin Dashboard
        </Typography>
        <Button onClick={() => handleChange("add")}>Add Flight</Button>
        <Button onClick={() => handleChange("display")}>Display Flights</Button>
        <Button onClick={() => handleChange("search")}>Search Flights</Button>
      </Grid>
      <Grid
        direction='column'
        lg={10}
        md={10}
        sm={11}
        sx={{
          mt: {
            xs: 10,
            md: 5,
            lg: 10,
          },
          gap: "1em",
        }}
        container>
        {add && <AddFlight />}
        {display && <DisplayFlight />}
        {search && <SearchFlight />}
      </Grid>
    </Grid>
  );
}

export default AdminDashboard;
