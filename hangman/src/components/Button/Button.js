import React from "react";

const Button = props => (
	<React.Fragment>
		<button type="button" className={props.className}>
			{props.text}
		</button>
	</React.Fragment>
);

export default Button;
