import { Grid } from "@mui/material";
import React from "react";
import ToDo from "../../components/ToDo/ToDo";
import TimeTable from "../../components/TimeTale/TimeTable";

const Main = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <ToDo />
      </Grid>
      <Grid item>
        <TimeTable />
      </Grid>
    </Grid>
  );
};

export default Main;
