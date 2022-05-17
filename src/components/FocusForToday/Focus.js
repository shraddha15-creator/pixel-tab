import React, { useState } from "react";
import "./focus.css";

export const Focus = () => {
	const [focusInput, setFocusInput] = useState("");
	const [focus, setFocus] = useState("");
	const [isFocusCompleted, setFocusCompleted] = useState(false);

	const focusChangeHandler = (e) => {
		setFocusInput(e.target.value);
	};

	const inputFocus = () => {
		setFocus(focusInput);
		setFocusInput("");
	};

	const focusCompleteHandle = () => {
		setFocusCompleted((prev) => !prev);
	};

	return (
		<>
			<p className="whats-focus">What is your main focus for today?</p>
			<input
				type="text"
				className={`user-name-input name-input ${focus && "hidden"}`}
				onChange={focusChangeHandler}
				value={focusInput}
				onKeyPress={(e) => e.key === "Enter" && inputFocus()}
			/>
			<div className={`${!focus && "hidden"}`}>
				<label
					onClick={focusCompleteHandle}
					className={`focus ${
						isFocusCompleted ? "focus-completed" : "focus-notComplete"
					}`}
				>
					<input
						type="checkbox"
						checked={isFocusCompleted}
						onChange={focusCompleteHandle}
						className={`whats-focus-checkbox ${!focus && "hidden"} `}
					/>
					{focus}
				</label>
			</div>
		</>
	);
};
