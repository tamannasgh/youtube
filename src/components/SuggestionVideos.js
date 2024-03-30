import React, { useEffect, useState } from "react";
import { GET_SUGGESTION_VIDEOES_BY_CATEGORY_ID } from "../config";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SuggestionVideos = ({ categoryId }) => {
	const [suggestionVideos, setsuggestionVideos] = useState([]);

	useEffect(() => {
		async function getSuggestionVideos() {
			const res = await fetch(
				GET_SUGGESTION_VIDEOES_BY_CATEGORY_ID + categoryId
			);
			const data = await res.json();
			// console.log(data);
			setsuggestionVideos(data.items);
		}
		getSuggestionVideos();
	}, []);

	if (suggestionVideos.length < 1) {
		return <h1>getting the videos...</h1>;
	}

	return (
		<div>
			{suggestionVideos.map((suggestionVideo) => (
				<Link
					to={"/watch?v=" + suggestionVideo.id.videoId}
					key={suggestionVideo.id.videoId}
				>
					<VideoCard video={suggestionVideo} />
				</Link>
			))}
		</div>
	);
};

export default SuggestionVideos;
