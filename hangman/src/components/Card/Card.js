import React from "react";

export const Card = props => (
	<div className="card" style={props.style}>
		<div className="card-body">
			<h5 className="card-title">{props.cardTitle}</h5>
			<h6 className="card-subtitle mb-2 text-muted">
				{props.cardSubtitle}
				<p className="card-text">{props.cardText}</p>
				{/* Button for Instructions goes here */}
				{/* Button for Reveal goes here */}
			</h6>
		</div>

		{/* <div className="card-header text-center">{props.header}</div>
		<div className="card-body">
			<p className="card-text">{props.text}</p>
			<a href={props.route} className="card-link">
				{props.link}
			</a>
		</div>
		{props.children} */}
	</div>
);
