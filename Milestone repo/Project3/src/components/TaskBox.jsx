// import { useState } from "react";
import Task from "./Task";

function TaskBox(props) {
	const todo = props.todo.map((todoData, index) => {
		return (
			<Task key={index * 2} id={index} todoData={todoData} removeTodo={props.removeTodo} />
		);
	});
	return (
		<div className='w-full p-3 text-white flex flex-wrap items-center justify-between'>
			{todo}
		</div>
	);
}

export default TaskBox;
