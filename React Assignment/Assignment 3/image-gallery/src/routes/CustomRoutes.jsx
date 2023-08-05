import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "../components/Gallery/Gallery";
import ImageDetails from "../components/ImageDetails/ImageDetails";
import Header from "../components/Header/Header";

function CustomRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Header heading="My Gallery" />
						<Gallery />
					</>
				}
			/>
			<Route
				path="/image/:id"
				element={
					<>
						<Header heading="Image details" />
						<ImageDetails />
					</>
				}
			/>
		</Routes>
	);
}

export default CustomRoutes;
