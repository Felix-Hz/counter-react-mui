import React from "react";
import { Divider, Stack, Box } from "../../mui";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Stack spacing={2} direction="row">
      <Box>Image</Box>
      <Stack
        spacing={2}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Link to="/" relative="path">
          About
        </Link>
        <Link to="/" relative="path">
          Contact
        </Link>
      </Stack>
      <Box>Refresh Icon</Box>
    </Stack>
  );
}

export default Navbar;
