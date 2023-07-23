import "./App.css";
import Person from "./Question/Person.js";
import Button from "./Question/Button.js";
import Header from "./Question/Header.js";
import List from "./Question/List.js";

const greet = () => {
	alert("I'm an onclick function");
};

function App() {
	return (
		<div className='App'>
			<Person name={"Rahul Kumar Sharma"} age={22} />
			<Button text={"Click me for Alert msg"} greet={greet} />
			<Header title={"This is a heading"} />
			<List items={["One", "Two", "Three", "Four", "Five"]} />
		</div>
	);
}

export default App;
