import React from "react";

const Wrapper = props => (
	<div className="wrapper" id={props.id}>
		<div className={props.className} id={props.id}>
			{props.children}
		</div>
	</div>
);

export default Wrapper;
