import { Grid } from "@mui/material";
import React from "react";
import data from "./../../assets/plan.json";

const day = new Date().getDay();

const ToDo = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>Today is {data[day]["name"]} & Plan are : </Grid>
      <Grid item>PRIMARY : {data[day]["primary"]}</Grid>
      <Grid item>SECONDARY : {data[day]["secondary"]}</Grid>
    </Grid>
  );
};

export default ToDo;
