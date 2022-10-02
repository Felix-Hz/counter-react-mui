import React from "react";
import { Stack, Box, Button, Typography } from "../../mui";

import ReactLogo from "../../assets/react-icon.png";
import MUILogo from "../../assets/mui.png";
import LightningEmoji from "../../assets/lightning.png";

const About = () => {
  return (
    <Box sx={{ height: "80.1vh" }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ backdropFilter: "blur(150px)", pl: "40px", m: "60px 0 0 0" }}
      >
        Infinity - Timeless Counter
      </Typography>
      <Stack spacing={4} sx={{m: "30px 0"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pl: "60px",
            alignContent: "center",
            alignItems: "center",
            gap: "14px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box>
            <img
              src={LightningEmoji}
              alt="lightning-logo"
              className="lightning-logo"
              style={{ maxHeight: "20px" }}
            />
          </Box>
          <Typography variant="h5" gutterBottom>
            Este es el primer elemento.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pl: "60px",
            alignContent: "center",
            alignItems: "center",
            gap: "14px",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box>
            <img
              src={LightningEmoji}
              alt="lightning-logo"
              className="lightning-logo"
              style={{ maxHeight: "20px" }}
            />
          </Box>
          <Typography variant="h5" gutterBottom>
            Este es el segundo elemento.
          </Typography>
        </Box>
      </Stack>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ backdropFilter: "blur(150px)", pl: "40px" }}
      >
        Technologies used in this project
      </Typography>
      <Stack
        direction="row"
        sx={{
          padding: "12px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        spacing={24}
      >
        <Stack sx={{ padding: "12px" }} spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              padding: "30px",
              borderRadius: "120px",
              backgroundColor: "#1e2029",
              borderRadius: "90px",
              padding: "20px",
              maxWidth: "150px",
              ml: "auto",
              mr: "auto",
            }}
          >
            <img
              src={ReactLogo}
              alt="react-logo"
              className="react-logo"
              style={{ maxHeight: "50px", ml: "auto", mr: "auto" }}
            />
          </Box>
          <Typography variant="h6" gutterBottom>
            Abajo de react
          </Typography>
        </Stack>
        <Stack sx={{ padding: "12px" }} spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              padding: "30px",
              borderRadius: "120px",
              backgroundColor: "#1e2029",
              borderRadius: "90px",
              padding: "20px",
              maxWidth: "150px",
              ml: "auto",
              mr: "auto",
            }}
          >
            <img
              src={MUILogo}
              alt="mui-logo"
              className="mui-logo"
              style={{ maxHeight: "50px", ml: "auto", mr: "auto" }}
            />
          </Box>
          <Typography variant="h6" gutterBottom>
            Abajo de MUI
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
