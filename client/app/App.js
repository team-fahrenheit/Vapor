import React from "react";
import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import theme from "../features/MUI-Theme/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../features/footer/Footer";

const App = () => {
	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<div>
					<Navbar />
					<AppRoutes />
					<Footer />
				</div>
			</ThemeProvider>
		</React.StrictMode>
	);
};

export default App;
