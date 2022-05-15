import React from "react";
import "./weather.css";

const Weather = () => {
	return (
		<>
			<div className="weather-container">
				<span className="weather-temp">
					<i class="fas fa-temperature-high icon"></i>
					<p>35°</p>
				</span>
				<p className="weather-place">India</p>
			</div>
		</>
	);
};

export default Weather;
