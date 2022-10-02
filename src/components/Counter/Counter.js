// ------- IMPORTS --------- \\
import React, { useContext } from "react";

import {
  Stack,
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from "../../mui";
import CountContext from "../../context/CountContext";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// ------- KODE --------- \\

const Counter = ({}) => {
  const { value, setValue } = useContext(CountContext);

  const decrement = () => {
    if (value > 0) {
      setValue((count) => count - 1);
    }
  };

  const increment = () => {
    if (value >= 0 && value < 100) {
      setValue((count) => count + 1);
    }
  };

  return (
    <Box sx={{ height: "80vh" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        sx={{ position: "relative" }}
      >
        <CircularProgress
          variant="determinate"
          value={value}
          size={"35%"}
          sx={{
            mt: "50px",
            color: "#28d5ee",
            opacity: "0.6",
          }}
        />

        <Paper
          elevation={23}
          sx={{
            position: "absolute",
            top: "32%",
            left: "46%",
            m: "200px 750px",
            p: "25px",
            borderRadius: "25px",
            backgroundColor: "#1e2029",
          }}
        >
          <Stack justifyContent="space-evenly" alignItems="center">
            <Button
              onClick={() => increment()}
              sx={{ borderRadius: "150px", p: "16px", m: "0 16px" }}
            >
              <KeyboardArrowUpIcon
                style={{ color: "#28d5ee" }}
                fontSize="large"
              />
            </Button>
            <Typography
              variant="h2"
              sx={{ m: "16px 0" }}
              style={{ color: "#28d5ee" }}
            >
              {value}
            </Typography>
            <Button
              onClick={() => decrement()}
              sx={{ borderRadius: "150px", p: "16px", m: "0 16px" }}
            >
              <KeyboardArrowDownIcon
                style={{ color: "#28d5ee" }}
                fontSize="large"
              />
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Counter;
