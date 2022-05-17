import React, { useState, useEffect } from "react";
import { GreetUser } from "../GreetUser/GreetUser";
import "./time.css";

export const Time = () => {
	const [currTime, setCurrTime] = useState("");

	useEffect(() => {
		setTimeout(() => {
			const currentDate = new Date();
			const time = currentDate.toLocaleTimeString("en-GB");
			setCurrTime(time);
		}, 1000);
	}, []);
	const currentHour = currTime.slice(0, 2);

	return (
		<>
			<h1 className="time">{currTime.slice(0, 5)}</h1>
			<GreetUser currentHour={currentHour} />
		</>
	);
};
