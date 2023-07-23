import React from "react";

function Button(props) {
	return (
		<div>
			<button onClick={props.greet} className='btn'>
				{props.text}
			</button>
			<hr />
		</div>
	);
}

export default Button;
