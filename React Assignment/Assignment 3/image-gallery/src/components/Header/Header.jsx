import { Link } from "react-router-dom";

function Header({ heading }) {
	return (
		<div className="w-full bg-indigo-200 py-1 mb-8 duration-500 hover:shadow-xl">
			<nav className="mx-auto bg-pink-200 w-3/4 py-2 border border-black rounded">
				<Link to="/">
					<h1 className="text-center text-3xl font-semibold tracking-widest">
						{heading}
					</h1>
				</Link>
			</nav>
		</div>
	);
}

export default Header;
