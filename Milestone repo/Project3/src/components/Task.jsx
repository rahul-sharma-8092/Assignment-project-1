import { useState } from "react";

function Task(props) {
	const [status, setStatus] = useState(false);

	return (
		<div className='w-[330px] min-h-[300px]  bg-[#24273d] my-5  rounded-lg p-5 flex flex-col justify-between'>
			<div>
				<h1 className='text-2xl font-bold mb-3'>
					{props.id + 1}. {props.todoData.item}
				</h1>
				<span className='text-lg text-gray-400'>{props.todoData.time}</span>
			</div>
			<p className='text-xl'>
				Status:{" "}
				{status ? (
					<span className='text-green-500'>Completed</span>
				) : (
					<span className='text-red-500'>Pending</span>
				)}
			</p>
			<div>
				<button
					onClick={() => setStatus(!status)}
					className='w-full py-2 bg-[#4d37f3] hover:bg-[#10d73f] duration-500 rounded-md my-2 font-semibold'
				>
					Update Status
				</button>
				<button
					onClick={() => {
						props.removeTodo(props.id);
					}}
					className='w-full py-2 bg-[#4d37f3] hover:bg-[#10d73f] duration-500 rounded-md my-2 font-semibold'
				>
					Remove
				</button>
			</div>
		</div>
	);
}

export default Task;
