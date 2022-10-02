import React from "react";
import { Stack, Box, Button, Typography } from "../../mui";

import ReactLogo from "../../assets/react-icon.png";
import MUILogo from "../../assets/mui.png";
import RouterLogo from "../../assets/router.png";
import LightningEmoji from "../../assets/lightning.png";

const About = () => {
  return (
    <Box sx={{ height: "80.1vh" }}>
      <Box sx={{ ml: "40px", display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            backdropFilter: "blur(150px)",
            p: "20px",
            m: "20px 0 0 0",
            color: "#ffffffff",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            display: "table",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          Infinity - Timeless Counter
        </Typography>
      </Box>
      <Stack spacing={1} sx={{ m: "60px 0 0 0" }}>
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
              style={{ maxHeight: "30px" }}
            />
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#ffffffff",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            Este es el primer elemento. Agrego un poco de texto simplemente para ver como queda.
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
              style={{ maxHeight: "30px" }}
            />
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#ffffffff",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            Este es el segundo elemento. Agrego un poco de texto simplemente para ver como queda.
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
              style={{ maxHeight: "30px" }}
            />
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#ffffffff",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            Este es el tercer elemento. Agrego un poco de texto simplemente para ver como queda.
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ ml: "40px", display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            backdropFilter: "blur(150px)",
            p: "20px",
            m: "35px 0 0 0",
            color: "#ffffffff",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            display: "table",
            borderRadius: "15px",
            mb: "30px",
          }}
        >
          Technologies
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          padding: "12px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          mb: "60px"
        }}
        spacing={24}
      >
        <Stack sx={{ padding: "12px", maxWidth: "25%" }} spacing={3}>
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
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#ffffffff",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
        <Stack sx={{ padding: "12px", maxWidth: "25%" }} spacing={3}>
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
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#ffffffff",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
        <Stack sx={{ padding: "12px", maxWidth: "25%" }} spacing={3}>
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
              src={RouterLogo}
              alt="react-router-logo"
              className="react-router-logo"
              style={{ maxHeight: "50px", ml: "auto", mr: "auto" }}
            />
          </Box>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#ffffffff",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
