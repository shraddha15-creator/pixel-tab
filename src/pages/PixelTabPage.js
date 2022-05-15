import React from "react";
import Focus from "../components/FocusForToday/Focus";
import GreetUser from "../components/GreetUser/GreetUser";
import Links from "../components/Links/Links";
import Quote from "../components/Quote/Quote";
import Settings from "../components/Settings/Settings";
import Time from "../components/Time/Time";
import Todo from "../components/Todo/Todo";
import Weather from "../components/Weather/Weather";

const PixelTabPage = () => {
	return (
		<>
			<div className="landingImg-container overlay-container">
				<div className="main-container overlay ">
					<Links />
					<Weather />
					<Time />
					<GreetUser />
					<Focus />
					<Quote />
					<Settings />
					<Todo />
				</div>
			</div>
		</>
	);
};

export default PixelTabPage;
