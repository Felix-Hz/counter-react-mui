// ------- IMPORTS ---------
import React, { useState, useContext } from "react";
import { Divider, Stack, Box, Button } from "../../mui";
import CountContext from "../../context/CountContext";

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
    <Stack direction="row">
      <Button onClick={() => decrement()}>-</Button>
      {value}
      <Button onClick={() => increment()}>+</Button>
    </Stack>
  );
};

export default Counter;
