import React, { useEffect } from "react";
import { useData } from "../../context/data-context";
import "./greet.css";

const GreetUser = () => {
	const { isOldUser, setIsOldUser } = useData();

	useEffect(() => {
		const user = localStorage.getItem("userName");
		setIsOldUser(user);
	}, [isOldUser]);

	return (
		<>
			<p className="greet">Good Morning, {isOldUser}!</p>
		</>
	);
};

export default GreetUser;
