import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { MOST_POPULAR_VIDEOS } from "../config";
import { Link } from "react-router-dom";

const VideosContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function getVideos() {
			const req = await fetch(MOST_POPULAR_VIDEOS);
			const data = await req.json();
			setVideos(data.items);
		}
		getVideos();
	}, []);

	if (videos.length < 1) {
		return <h1>loading...</h1>;
	}

	return (
		<div className="flex flex-wrap ">
			{videos.map((video) => (
				<Link
					to={"/watch?v=" + video.id}
					key={video.id}
				>
					<VideoCard video={video} />
				</Link>
			))}
		</div>
	);
};

export default VideosContainer;
