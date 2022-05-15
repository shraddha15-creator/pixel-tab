import React from "react";
import "./links.css";

const Links = () => {
	return (
		<>
			<div className="links-container">
				<div className="links-items">
					<i class="fab fa-github icon"></i>
					<span className="link-item-name">Github</span>
				</div>
				<div className="links-items">
					<i class="fab fa-discord icon"></i>
					<span className="link-item-name">Discord</span>
				</div>
				<div className="links-items">
					<i class="fab fa-youtube icon"></i>
					<span className="link-item-name">YouTube</span>
				</div>
			</div>
		</>
	);
};

export default Links;
