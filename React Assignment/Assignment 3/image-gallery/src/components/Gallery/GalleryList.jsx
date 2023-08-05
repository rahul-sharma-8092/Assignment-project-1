import { useEffect, useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import axios from "axios";

function GalleryList() {
	const [imageData, setImageData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// Download All photos
	const imgUrl = "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20";

	const downloadImage = async (url) => {
		try {
			const response = await axios.get(url);
			const results = response.data.photos; // Stored array of 20 photo
			setIsLoading(false);
			const ImageResult = results.map((photo) => {
				return {
					id: photo.id,
					title: photo.title,
					image: photo.url,
				};
			});
			setImageData([...ImageResult]);
		} catch (error) {
			setIsLoading(false);
			alert(error.message);
		}
	};

	useEffect(() => {
		downloadImage(imgUrl);
	}, [setImageData, isLoading]);

	return (
		<div className="w-full flex flex-wrap items-start justify-between gap-y-10">
			{isLoading ? (
				<div className="mx-auto text-6xl font-bold tracking-widest text-red-600">
					Loading...
				</div>
			) : (
				imageData.map((p) => {
					return <ImageCard key={p.id} image={p.image} id={p.id} />;
				})
			)}
		</div>
	);
}

export default GalleryList;
