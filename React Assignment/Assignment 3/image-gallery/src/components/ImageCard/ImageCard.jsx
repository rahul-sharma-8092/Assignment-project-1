import { Link } from "react-router-dom";

function ImageCard({ image, id }) {
	return (
		<div className="w-full  rounded-lg overflow-hidden md:basis-[48%] lg:basis-[30%] duration-500 hover:shadow-lg hover:shadow-gray-600 cursor-pointer">
			<Link to={`/image/${id}`}>
				<img src={image} alt="Image" className="w-full rounded-lg" />
			</Link>
		</div>
	);
}

export default ImageCard;
