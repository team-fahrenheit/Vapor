import React, { useState } from "react";
import {
  Box,
  Link as LinkMui,
  TextField,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import iconTwitter from "../../../public/img/iconTwitter.png";
import iconTictok from "../../../public/img/iconsTiktok.png";
import iconInstagram from "../../../public/img/iconsInstagram.png";
import iconFacebook from "../../../public/img/iconsFacebook.png";
import { color } from "@mui/system";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    //would add to newsletter
  };

  return (
    <Box
      sx={{
        mt: 1.5,
        p: 0.5,
        backgroundColor: "#a4a4a4",
        color: "primary.main",
        fontWeight: "medium",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "auto",
        color: "secondary.main",
      }}
    >
      <Box id="footer-left-side">
        <Box
          id="logo-title-container"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 80,
                width: 80,
              }}
              alt="placeholder logo"
              src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            />
          </Link>
          <Typography fontWeight="bold" fontSize="20px">
            Vapor
          </Typography>
        </Box>

        <Box id="footer-links" sx={{ display: "flex", gap: 3, m: 4 }}>
          <LinkMui href="#" underline="hover" sx={{ color: "secondary.main" }}>
            FAQ
          </LinkMui>
          <LinkMui href="#" underline="hover" sx={{ color: "secondary.main" }}>
            Refund Policy
          </LinkMui>
          <LinkMui href="#" underline="hover" sx={{ color: "secondary.main" }}>
            Careers
          </LinkMui>
          <LinkMui href="#" underline="hover" sx={{ color: "secondary.main" }}>
            Feedback
          </LinkMui>
          <LinkMui href="#" underline="hover" sx={{ color: "secondary.main" }}>
            Privacy Policy
          </LinkMui>
        </Box>
      </Box>
      <Box
        id="footer-right-side"
        sx={{
          m: 0,
        }}
      >
        <p>Stay Connected</p>

        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="signupEmail"
            size="small"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="outlined" edge="end" type="submit">
                    Sign Up
                  </Button>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </form>

        <Box id="social-media-icons">
          <a href="https://www.facebook.com/">
            <img src={iconFacebook} alt="Black facebook logo" />
          </a>
          <a href="https://twitter.com/">
            <img src={iconTwitter} alt="Black twitter logo" />
          </a>
          <a href="https://www.tiktok.com/en/">
            <img src={iconTictok} alt="Black Tiktok logo" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={iconInstagram} alt="Black instagram logo" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
