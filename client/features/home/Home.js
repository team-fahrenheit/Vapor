import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
	const firstname = useSelector((state) => state.auth.me.firstname);

	return (
		<div>
			<h3>Welcome, {firstname}</h3>
		</div>
	);
};

export default Home;
