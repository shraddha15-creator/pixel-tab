import React from "react";
import "./focus.css";

const Focus = () => {
	return (
		<>
			<p className="whats-focus">What is your main focus for today?</p>
			<input type="text" className="user-name-input name-input" />
			<label>
				<input type="checkbox" className="whats-focus-checkbox" /> Project
			</label>
		</>
	);
};

export default Focus;
