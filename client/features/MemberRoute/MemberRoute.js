import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, NavLink } from "react-router-dom";
import {
  Button,
  CssBaseline,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AllProducts from "../allProducts/allProducts";
import Infographic from "../AdminRoute/Infographic/Infographic";

const theme = createTheme();

export default function MemberRoute() {
  const user = useSelector((state) => state.auth.me);

  return (
    <div>
      {user.userType === "Member" ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            {/* member stuff regardless of route */}
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Welcome, {user.firstName + " " + user.lastName}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  {user.userType} of Vapor
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <NavLink to="/AllProducts">
                    <Button variant="contained">See Products</Button>
                  </NavLink>
                  <NavLink to="/MyAccount">
                    <Button variant="contained">My Account</Button>
                  </NavLink>
                </Stack>
              </Container>
            </Box>
            {/* End of member stuff regardless of route */}
            <Routes>
              <Route path="/login" element={<AllProducts />} />
              <Route path="/AllProducts" element={<AllProducts />} />
              <Route path="/MyAccount" element={<Infographic />} />
            </Routes>
            <Container sx={{ py: 8 }} maxWidth="md"></Container>
          </main>
        </ThemeProvider>
      ) : (
        <p> u are not a member :O</p>
      )}
    </div>
  );
}
