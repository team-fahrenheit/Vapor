import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LogInSignUp = () => {
  return (
    <Box>
      <Link to="/login">
        <Button style={{ color: "rgba(232,230,230,0.54)" }}>Log In</Button>
      </Link>
      <Link to="/signup">
        <Button style={{ color: "rgba(232,230,230,0.54)" }}>Sign Up</Button>
      </Link>
    </Box>
  );
};

export default LogInSignUp;
