import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Link as LinkMui,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [accountBtn, setAccountBtn] = useState(null);
  const open = Boolean(accountBtn);
  const handleOpen = (e) => {
    setAccountBtn(e.currentTarget);
  };

  const closeAccountBtn = () => {
    setAccountBtn(null);
  };

  const handleClose = () => {
    evt.preventDefault();
    console.log("hey look at me search");
  };

  return (
    <div>
      <Box
        sx={{
          mt: 1.5,
          p: 0.5,
          backgroundColor: "primary.main",
          borderRadius: "5px",
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
          <LinkMui href="#" sx={{ color: "text.secondary" }}>
            PC
          </LinkMui>
          <LinkMui href="#" sx={{ color: "text.secondary" }}>
            PS5
          </LinkMui>
          <LinkMui href="#" sx={{ color: "text.secondary" }}>
            Xbox One S
          </LinkMui>
          <LinkMui href="#" sx={{ color: "text.secondary" }}>
            Nintendo Switch
          </LinkMui>
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
              id="search-field"
              label="Search"
              size="small"
              color="text"
            ></TextField>
          </FormControl>

          <Button
            id="account-button"
            sx={{
              color: "text.secondary",
            }}
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
            <ShoppingCartIcon style={{ color: "rgba(232,230,230,0.54)" }} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
