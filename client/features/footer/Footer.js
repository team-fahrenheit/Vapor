import React from "react";
import {
  Box,
  Link,
  FormControl,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 1.5,
        p: 0.5,
        backgroundColor: "#a4a4a4",
        borderRadius: "6px",
        color: "primary.main",
        fontWeight: "medium",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box id="footer-left-side">
        <Box
          id="logo-title-container"
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
            mt: 1,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 80,
              width: 80,
            }}
            alt="placeholder logo"
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          />
          <p>Vapor</p>
        </Box>

        <Box id="footer-links" sx={{ display: "flex", gap: 3, m: 4 }}>
          <Link href="#">FAQ</Link>
          <Link href="#">Refund Policy</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Feedback</Link>
          <Link href="#">Privacy Policy</Link>
        </Box>
      </Box>
      <Box id="footer-right-side">
        <p>Stay Connected</p>

        <FormControl>
          <TextField
            required
            id="outlined-required"
            label="Sign Up"
            size="small"
            sx={{
              pr: 0,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="outlined" edge="end">
                    Sign Up
                  </Button>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </FormControl>
        <Box id="social-media-icons">
          <img src="../../../public/img/icon-twitter.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
