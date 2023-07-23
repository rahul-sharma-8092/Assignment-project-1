import React from "react";

function List(props) {
	const items = props.items;
	return (
		<div>
			<ul className='list'>
				<li>{items[0]}</li>
				<li>{items[1]}</li>
				<li>{items[2]}</li>
				<li>{items[3]}</li>
				<li>{items[4]}</li>
			</ul>
			<hr />
		</div>
	);
}

export default List;
