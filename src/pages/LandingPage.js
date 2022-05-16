import React from "react";
import NextArrow from "../assets/next-arrow.gif";
import { useData } from "../context/data-context";
import "./landing.css";

const LandingPage = () => {
	const { userName, nameChangeHandler, continueHandler } = useData();

	return (
		<>
			<div className="landingImg-container overlay-container">
				<div className="overlay main-container">
					<p className="whats-name">Hello, What's your name?</p>
					<input
						type="text"
						className="user-name-input name-input"
						value={userName}
						onChange={(e) => nameChangeHandler(e)}
					/>
					{userName && (
						<div className="btn btn-continue" onClick={continueHandler}>
							Continue
							<img src={NextArrow} alt="newt" className="next-arrow" />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default LandingPage;
