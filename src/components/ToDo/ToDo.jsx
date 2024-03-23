import { Grid, Typography } from "@mui/material";
import React from "react";
import data from "./../../assets/plan.json";
import "./ToDo.css";

const day = new Date().getDay();

const ToDo = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
      id="main"
    >
      <Grid item id="day">
        <Typography variant="h2">{data[day]["name"]}</Typography>
      </Grid>
      <Grid item container justifyContent={"space-evenly"}>
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
