import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Image deatils Page
function ImageDetails() {
	const [picDetails, setPicDetails] = useState({});
	const [isLoad, setIsLoad] = useState(true);

	let { id } = useParams();
	// URL of finding data of 1 image
	const imgURL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

	// downloadDetails function for fetch all the information from api
	const downloadDetails = async (url) => {
		try {
			const response = await axios.get(url); // get response from api
			const deatilsResult = response.data.photo; // Extract photo details from api
			setIsLoad(false);

			// store image title description and id
			const details = {
				image: deatilsResult.url,
				title: deatilsResult.title,
				description: deatilsResult.description,
				id: id,
			};

			// Save deatils in State variable
			setPicDetails(details);
		} catch (err) {
			setIsLoad(false);
			alert(err.message); // Error handling of axios
		}
	};

	// downloadDetails called by useState
	useEffect(() => {
		downloadDetails(imgURL);
	}, []);

	return (
		<section className="w-full px-[5%] pb-5">
			{isLoad ? (
				<div className="mx-auto text-center text-6xl font-bold tracking-widest text-red-600">
					Loading...
				</div>
			) : (
				<div className="mx-auto bg-[#042e5e] p-10 flex flex-col md:flex-row justify-between items-start rounded-md gap-10 md:gap-0">
					<div className="basis-[48%]   rounded-xl shadow-[0px_0px_10px] shadow-white overflow-hidden border-2 bg-pink-900">
						<img
							src={picDetails.image}
							alt="Image"
							className="rounded-xl duration-500 w-full hover:border-2 hover:border-black hover:scale-95"
						/>
					</div>
					<div className="basis-[48%] text-white">
						<h1 className="text-xl md:text-3xl font-bold tracking-wide mb-5 md:mb-10 leading-[45px] uppercase text-center md:text-left ">
							{picDetails.title}
						</h1>
						<p className="text-lg md:text-2xl text-justify">{picDetails.description}</p>
					</div>
				</div>
			)}
		</section>
	);
}

export default ImageDetails;
