import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
	const firstName = useSelector((state) => state.auth.me.firstName);

	return (
		<div>
			<h3>Welcome, {firstName}</h3>
		</div>
	);
};

export default Home;
