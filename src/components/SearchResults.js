import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { GET_VIDEOS_BY_SEARCHQUERY } from "../config";
import VideoCard from "./VideoCard";

const SearchResults = () => {
	const [searchParams] = useSearchParams();
	const [videos, setVideos] = useState([]);

	const searchQuery = searchParams.get("q");

	useEffect(() => {
		async function getVideos() {
			const res = await fetch(GET_VIDEOS_BY_SEARCHQUERY + searchQuery);
			const data = await res.json();
			console.log(data.items);
			setVideos(data.items);
		}
		getVideos();
	}, [searchQuery]);

	return (
		<div className="m-10 col-span-10">
			{videos.length < 1 ? (
				<h1>loading</h1>
			) : (
				videos.map((video) => (
					<Link
						to={"/watch?v=" + video.id.videoId}
						key={video.id.videoId}
					>
						<VideoCard video={video} />
					</Link>
				))
			)}
		</div>
	);
};

export default SearchResults;
