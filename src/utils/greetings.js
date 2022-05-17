export const greetings = (currentHour) => {
	if (currentHour >= 1 && currentHour < 12) {
		return "Good Morning";
	} else if (currentHour >= 12 && currentHour < 15) {
		return "Good Afternoon";
	} else if (currentHour >= 15 && currentHour < 17) {
		return "Good Evening";
	} else if (currentHour >= 17 && currentHour < 19) {
		return "Good Night";
	} else {
		return "Hello";
	}
};
