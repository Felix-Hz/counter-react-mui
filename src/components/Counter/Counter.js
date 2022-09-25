// ------- IMPORTS ---------
import React, { useState, useContext } from "react";
import { Stack, Box, Button, Paper } from "../../mui";
import CountContext from "../../context/CountContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { borderRadius } from "@mui/system";

const Counter = ({ initial }) => {
  const { value, setValue } = useContext(CountContext);

  const decrement = () => {
    if (value > 0) {
      setValue((count) => count - 1);
    }
  };

  const increment = () => {
    if (value >= 0) {
      setValue((count) => count + 1);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ m: "200px 750px", p: "25px", borderRadius: "25px" }}
    >
      <Stack justifyContent="space-evenly" alignItems="center">
        <Button onClick={() => increment()} sx={{ borderRadius: "100px" }}>
          <KeyboardArrowUpIcon />
        </Button>
        {value}
        <Button onClick={() => decrement()} sx={{ borderRadius: "100px" }}>
          <KeyboardArrowDownIcon />
        </Button>
      </Stack>
    </Paper>
  );
};

export default Counter;
