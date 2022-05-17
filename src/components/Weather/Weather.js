import axios from "axios";
import React, { useEffect, useState } from "react";
import "./weather.css";

export const Weather = () => {
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [weather, setWeather] = useState("");
	const [weatherIcon, setWeatherIcon] = useState("");
	const [temp, setTemp] = useState(0);
	const [city, setCity] = useState("");

	const getPostion = (position) => {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	};

	const getWeatherData = async () => {
		try {
			window.navigator.geolocation.getCurrentPosition(getPostion);
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=64ed8b40eaf1c9ef02f1aefa8691fc16&units=metric`
			);
			setTemp(response.data.main.temp);
			setCity(response.data.name);
			setWeather(response.data.weather[0].description);
			setWeatherIcon(response.data.weather[0].icon);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getWeatherData();
	}, [latitude, setLatitude, getWeatherData]);

	return (
		<>
			<div className="weather-container">
				<img
					src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
					alt="weather-icon"
					className="weather-icon"
				/>
				<p className="weather-desc">{weather}</p>
				<p className="weather-temp">{temp.toFixed(0, 2)}°C</p>
				<p className="weather-place">{city}</p>
			</div>
		</>
	);
};
