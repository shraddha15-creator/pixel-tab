import React, { useEffect } from "react";
import { useData } from "../../context/data-context";
import { greetings } from "../../utils/greetings";
import "./greet.css";

export const GreetUser = ({ currentHour }) => {
	const { isOldUser, setIsOldUser } = useData();

	const greetUser = greetings(currentHour);

	useEffect(() => {
		const user = localStorage.getItem("userName");
		setIsOldUser(user);
	}, [setIsOldUser]);

	return (
		<>
			<p className="greet">
				{greetUser}, {isOldUser}!
			</p>
		</>
	);
};
