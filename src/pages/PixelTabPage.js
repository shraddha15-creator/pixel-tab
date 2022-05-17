import React from "react";
import {
	Focus,
	Links,
	Quote,
	Settings,
	Time,
	Todo,
	Weather,
} from "../components";

export const PixelTabPage = () => {
	return (
		<>
			<div className="landingImg-container overlay-container">
				<div className="main-container overlay ">
					{/* <Links /> */}
					<Weather />
					<Time />
					<Focus />
					<Quote />
					<Settings />
					{/* <Todo /> */}
				</div>
			</div>
		</>
	);
};
