import React, { useState } from "react";
import SettingElp from "../SettingsElp/SettingElp";
import "./settings.css";

export const Settings = () => {
	const [isEllpsisOpen, setIsEllipsisOpen] = useState(false);

	const settingsHandler = () => {
		setIsEllipsisOpen((prev) => !prev);
	};

	return (
		<>
			<div className="settings-container">
				<div onClick={settingsHandler}>
					{isEllpsisOpen && <SettingElp />}
					<i className="fas fa-cog icon"></i>
				</div>
			</div>
		</>
	);
};
