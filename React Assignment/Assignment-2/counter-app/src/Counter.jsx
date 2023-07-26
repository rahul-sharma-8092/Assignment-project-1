import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className='container'>
			<div className='wrapper'>
				<div>{count}</div>
				<button onClick={() => setCount(count - 1)}>Decrement</button>
				<button onClick={() => setCount(count + 1)}>Increment</button>
			</div>
		</div>
	);
}

export default Counter;
