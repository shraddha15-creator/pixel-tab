import React from "react";
import "./links.css";

export const Links = () => {
	return (
		<>
			<div className="links-container">
				<div className="links-items">
					<i className="fab fa-github icon"></i>
					<span className="link-item-name">Github</span>
				</div>
				<div className="links-items">
					<i className="fab fa-discord icon"></i>
					<span className="link-item-name">Discord</span>
				</div>
				<div className="links-items">
					<i className="fab fa-youtube icon"></i>
					<span className="link-item-name">YouTube</span>
				</div>
			</div>
		</>
	);
};
