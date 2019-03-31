// This component is used to group related content on the DOM.
import React from "react";

const Wrapper = props => {
	return (
		<div className={props.className} id={props.id}>
			{props.children}
		</div>
	);
};

export default Wrapper;
