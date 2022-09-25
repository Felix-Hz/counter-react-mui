import React, { useContext } from "react";
import { Divider, Stack, Box, Button } from "../../mui";
import { Link } from "react-router-dom";
import Logo from "../../infinite.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CountContext from "../../context/CountContext";

const Navbar = () => {
  const { value, setValue } = useContext(CountContext);
  const reset = () => {
    setValue(0);
  };
  return (
    <Stack justifyContent="space-between" alignItems="center" direction="row">
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
      <Button p={2}>
        <AutorenewIcon fontSize="large" onClick={() => reset()} />
      </Button>
    </Stack>
  );
};

export default Navbar;
