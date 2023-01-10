import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  TextField,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [accountBtn, setAccountBtn] = useState(null);
  const open = Boolean(accountBtn);

  const navigate = useNavigate();

  const handleOpen = (e) => {
    setAccountBtn(e.currentTarget);
  };

  const handleClose = () => {
    evt.preventDefault();
    console.log("hey look at me search");
  };

  const closeAccountBtn = () => {
    setAccountBtn(null);
  };

  return (
    <div>
      <Box
        sx={{
          mt: 1.5,
          p: 0.5,
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          borderRadius: "5px",
          color: "primary.main",
          fontWeight: "medium",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            fontSize: 18,
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 60,
              width: 60,
            }}
            alt="placeholder logo"
            src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          />
          <Link href="#">PC</Link>
          <Link href="#">PS5</Link>
          <Link href="#">Xbox One S</Link>
          <Link href="#">Nintendo Switch</Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mr: "10px",
          }}
        >
          <FormControl>
            <TextField
              required
              id="outlined-required"
              label="Search"
              size="small"
            ></TextField>
          </FormControl>

          <Button
            id="account-button"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpen}
          >
            Account
          </Button>
          <Menu
            id="account-menu"
            anchorEl={accountBtn}
            open={open}
            onClose={closeAccountBtn}
            MenuListProps={{
              "aria-labelledby": "account-button",
            }}
          >
            <MenuItem onClick={closeAccountBtn}>My Account</MenuItem>
            <MenuItem onClick={closeAccountBtn}>My Wishlist</MenuItem>
            <MenuItem onClick={closeAccountBtn}>Settings</MenuItem>
            <MenuItem onClick={closeAccountBtn}>Logout</MenuItem>
          </Menu>

          <IconButton aria-label="shopping-cart-button">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
