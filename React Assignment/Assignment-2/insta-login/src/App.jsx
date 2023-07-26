import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";

function App() {
	const [isRegistered, setIsRegistered] = useState(true);
	return (
		<div className='App'>
			{isRegistered ? (
				<Login setIsRegistered={setIsRegistered} />
			) : (
				<Signup setIsRegistered={setIsRegistered} />
			)}
		</div>
	);
}

export default App;
