import { Grid } from "@mui/material";
import React from "react";
import ToDo from "../../components/ToDo/ToDo";

const Main = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <ToDo />
      </Grid>
    </Grid>
  );
};

export default Main;
