import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import rows from "./../../assets/plan.json";

function TimeTable() {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>DAYS</TableCell>
            <TableCell>PRIMARY</TableCell>
            <TableCell>SECONDARY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(rows).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.primary}</TableCell>
              <TableCell>{row.secondary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TimeTable;
