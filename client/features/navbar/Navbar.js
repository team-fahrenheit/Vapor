import React, { useState } from "react";
import { logout } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogInSignUp from "./LogInSignUp";
import SearchBar from "./SearchBar";
import { clearSearch } from "../../app/store";
import { fetchAllProducts } from "../allProducts/allProductsSlice";
import { Box, Button, Menu, MenuItem, Link as LinkMui } from "@mui/material";
import CartPreview from "../cart/CartPreview";
import vaporlogo from "../../../public/img/vaporlogo.png";

const Navbar = () => {
  const dispatch = useDispatch();

  const [accountBtn, setAccountBtn] = useState(null);
  const open = Boolean(accountBtn);

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const handleOpen = (e) => {
    setAccountBtn(e.currentTarget);
  };

  const closeAccountBtn = () => {
    setAccountBtn(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAccountBtn(null);
  };

  const resetSearch = () => {
    dispatch(clearSearch());
    dispatch(fetchAllProducts({ search: "", page: 1 }));
  };

  return (
    <div id="back-to-top-anchor">
      <Box
        sx={{
          p: 0.5,
          backgroundColor: "primary.main",
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
          <NavLink to="/AllProducts" onClick={() => resetSearch()}>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 60,
              }}
              alt="Vapor Logo"
              src={vaporlogo}
            />
          </NavLink>
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
          <SearchBar />
          {isLoggedIn ? (
            <Box>
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
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
            <LogInSignUp />
          )}

          <CartPreview />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
