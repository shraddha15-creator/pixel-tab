import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import NextArrow from "../assets/next-arrow.gif";

const LandingPage = () => {
	return (
		<>
			<div className="landingImg-container overlay-container">
				<div className="overlay main-container">
					<p className="whats-name">Hello, What's your name?</p>
					<input type="text" className="user-name-input name-input" />
					<Link to={"/pixel-tab"} className="btn btn-continue">
						Continue
						<img src={NextArrow} alt="newt" className="next-arrow" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
