import React, { useState } from "react";
import { useData } from "../../context/data-context";
import "./focus.css";

export const Focus = () => {
	const { todaysFocus, setTodaysFocus } = useData();
	const [focusInput, setFocusInput] = useState("");
	const [isFocusCompleted, setFocusCompleted] = useState(false);

	const focusChangeHandler = (e) => {
		setFocusInput(e.target.value);
	};

	const inputFocus = () => {
		setTodaysFocus(focusInput);
		localStorage.setItem("focus", focusInput);
	};

	const focusCompleteHandle = () => {
		setFocusCompleted((prev) => !prev);
	};

	return (
		<>
			<p className="whats-focus">What is your main focus for today?</p>
			<input
				type="text"
				className={`user-name-input name-input ${todaysFocus && "hidden"}`}
				onChange={focusChangeHandler}
				value={focusInput}
				onKeyPress={(e) => e.key === "Enter" && inputFocus()}
			/>
			<div className={`${!todaysFocus && "hidden"}`}>
				<div className="TODAY">{todaysFocus && "TODAY"}</div>

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
						className={`whats-focus-checkbox ${!todaysFocus && "hidden"} `}
					/>

					{todaysFocus}
				</label>
			</div>
		</>
	);
};
