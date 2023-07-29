import { useRef } from "react";

function Input(props) {
	const inputBox = useRef();
	return (
		<div className='mx-auto bg-white max-w-xl min-h-[80px] mb-3 rounded-2xl py-2 px-4 flex items-center justify-around'>
			<input
				ref={inputBox}
				type='text'
				placeholder='Add a new task...'
				className='w-[70%] p-2 text-xl font-semibold outline-none rounded'
			/>
			<button
				onClick={() => {
					props.handler(inputBox.current.value);
					inputBox.current.value = "";
				}}
				className='w-[25%] hover:bg-[#5c1870] p-2 text-xl font-semibold outline-none  text-white rounded-lg bg-[#9712c0] duration-500'
			>
				Add
			</button>
		</div>
	);
}

export default Input;
