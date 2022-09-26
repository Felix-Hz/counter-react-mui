import React, { useContext } from "react";
import { Divider, Stack, Box, Button } from "../../mui";
import { Link } from "react-router-dom";
import Logo from "../../infinite.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CountContext from "../../context/CountContext";

const Navbar = () => {
  const { setValue } = useContext(CountContext);

  const reset = () => {
    setValue(0);
  };
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      sx={{ height: "10vh" }}
    >
      <Link to="/" id="logo">
        <Box>
          <img src={Logo} alt="infinity-logo" className="infinity-logo" />
        </Box>
      </Link>

      <Stack
        spacing={2}
        direction="row"
        divider={<Divider orientation="vertical" flexItem style={{ color: "#ffffffff" }} />}
        style={{ color: "#ffffffff" }}
      >
        <Link to="/about" relative="path" >
          About
        </Link>
        <Link to="/contact" relative="path" >
          Contact
        </Link>
      </Stack>
      <Button p={2} sx={{ borderRadius: "150px", p: "16px", m: "0 16px" }}>
        <AutorenewIcon
          fontSize="large"
          style={{ color: "#28d5ee" }}
          onClick={() => reset()}
        />
      </Button>
    </Stack>
  );
};

export default Navbar;
