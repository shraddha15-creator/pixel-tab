import axios from "axios";
import React, { useEffect, useState } from "react";
import "./quote.css";
export const Quote = () => {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	const getRandomQuote = async () => {
		try {
			const response = await axios.get(
				"https://goquotes-api.herokuapp.com/api/v1/random?count=1"
			);
			setQuote(response.data.quotes[0].text);
			setAuthor(response.data.quotes[0].author);
			console.log(response.data.quotes);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getRandomQuote();
	}, []);

	return (
		<>
			<div className="quote-and-author">
				<p className="quote">“{quote}”</p>
				<p className="quote-author">- {author}</p>
			</div>
		</>
	);
};
