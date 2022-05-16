import React from "react";
import "./weather.css";

export const Weather = () => {
	return (
		<>
			<div className="weather-container">
				<span className="weather-temp">
					<i className="fas fa-temperature-high icon"></i>
					<p>35°</p>
				</span>
				<p className="weather-place">India</p>
			</div>
		</>
	);
};
