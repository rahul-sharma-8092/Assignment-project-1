import { useState } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import TaskBox from "./components/TaskBox.jsx";

function App() {
	const [todo, setTodo] = useState([]);

	const addTodo = (item) => {
		setTodo([...todo, { item, time: new Date().toLocaleTimeString() }]);
	};

	const removeTodo = (id) => {
		const newTodo = todo.filter((ele, index) => {
			if (index !== id) {
				return true;
			} else {
				return false;
			}
		});
		setTodo(newTodo);
	};
	return (
		<div className='container w-full h-full min-h-screen bg-[#5c1870] py-8 px-[5%]'>
			<Input handler={addTodo} />
			<TaskBox todo={todo} removeTodo={removeTodo} />
		</div>
	);
}

export default App;
