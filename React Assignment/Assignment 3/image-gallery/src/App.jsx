import "./App.css";
import Header from "./components/Header/Header.jsx";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
	return (
		<div className="bg-indigo-200 min-h-screen">
			<CustomRoutes />
		</div>
	);
}

export default App;
