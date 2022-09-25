import React from "react";
import { Divider, Stack, Box } from "../../mui";
import { Link } from "react-router-dom";
import Logo from "../../infinite.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function Navbar() {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      m="0 6"

    >
      <Link to="/" id="logo">
        <Box>
          <img src={Logo} alt="infinity-logo" className="infinity-logo" />
        </Box>
      </Link>

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
      <Box p={2} >
        <AutorenewIcon fontSize="large" />
      </Box>
    </Stack>
  );
}

export default Navbar;
