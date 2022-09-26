// ------- IMPORTS ---------
import React, { useState, useContext } from "react";
import { Stack, Box, Button, Paper, Typography } from "../../mui";
import CountContext from "../../context/CountContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    <Box sx={{ height: "60.4vh" }}>
      <Paper
        elevation={15}
        sx={{
          m: "200px 750px",
          p: "25px",
          borderRadius: "25px",
          backgroundColor: "#e556fe",
        }}
      >
        <Stack justifyContent="space-evenly" alignItems="center">
          <Button
            onClick={() => increment()}
            sx={{ borderRadius: "150px", p: "16px", m: "0 16px" }}
          >
            <KeyboardArrowUpIcon style={{ color: "#28d5ee" }} fontSize="large"/>
          </Button>
          <Typography variant="h2" sx={{ m: "16px 0" }}>
            {value}
          </Typography>
          <Button
            onClick={() => decrement()}
            sx={{ borderRadius: "150px", p: "16px", m: "0 16px" }}
          >
            <KeyboardArrowDownIcon style={{ color: "#28d5ee" }} fontSize="large"/>
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Counter;
