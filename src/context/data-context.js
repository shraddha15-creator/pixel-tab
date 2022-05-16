import { useState, createContext, useContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [isOldUser, setIsOldUser] = useState(false);

	const nameChangeHandler = (e) => {
		setUserName(e.target.value);
	};

	useEffect(() => {
		const user = localStorage.getItem("userName");
		setIsOldUser(user);
	}, [isOldUser]);

	return (
		<DataContext.Provider
			value={{
				userName,
				isOldUser,
				setIsOldUser,
				setUserName,
				nameChangeHandler,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useData = () => useContext(DataContext);
