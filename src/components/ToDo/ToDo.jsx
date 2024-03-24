import { Grid, Typography } from "@mui/material";
import React from "react";
import data from "./../../assets/plan.json";
import "./ToDo.css";

const day = new Date().getDay();

console.log(day);

const ToDo = () => {
  return (
    <Grid container id="main">
      <Grid item id="day">
        <Typography variant="h2">{data[day]["name"]}</Typography>
      </Grid>
      <Grid item container id="primary-secondary">
        <Grid item id="primary">
          <Typography variant="h5">primary</Typography>
          <Typography variant="h4">{data[day]["primary"]}</Typography>
        </Grid>
        <Grid item id="secondary">
          <Typography variant="h5">secondary</Typography>
          <Typography variant="h4">{data[day]["secondary"]}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ToDo;
