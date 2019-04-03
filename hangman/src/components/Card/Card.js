import React from "react";

export const Card = props => {
	return (
		<div className="card" id="card-style">
			<h5 className="card-header">{props.header}</h5>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				{props.children}
			</div>
		</div>
	);
};

export default Card;
