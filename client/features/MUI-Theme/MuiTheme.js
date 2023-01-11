import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#004e98",
    },
    secondary: {
      main: "#3a6ea5",
    },
    background: {
      default: "#ebebeb",
      paper: "#c0c0c0",
    },
    warning: {
      main: "#ff6700",
    },
    text: {
      secondary: "rgba(232,230,230,0.54)",
    },
  },
});

export default theme;
