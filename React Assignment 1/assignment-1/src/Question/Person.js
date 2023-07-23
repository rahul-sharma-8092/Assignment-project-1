import React from "react";

function Person(props) {
	return (
		<div>
			<p className='que1'>
				Hello I'm <span>{props.name}</span> and my age is: <span>{props.age}</span>
			</p>
			<hr />
		</div>
	);
}

export default Person;
