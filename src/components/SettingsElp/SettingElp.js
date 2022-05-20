import React from "react";
import "./settingsElp.css";

const SettingElp = () => {
	const removeUserHandler = () => {
		localStorage.removeItem("userName");
		window.location.reload();
	};
	return (
		<div className="setting-ellp" onClick={removeUserHandler}>
			Remove User
			<i class="fas fa-user-times"></i>
		</div>
	);
};

export default SettingElp;
