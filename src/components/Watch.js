import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/Slices/appSlice";
import { GET_VIDEO_BY_ID } from "../config";
import { useSearchParams } from "react-router-dom";
import SuggestionVideos from "./SuggestionVideos";
import Comments from "./Comments";
import LiveComments from "./LiveComments";

const Watch = () => {
	const dispatch = useDispatch();
	dispatch(closeSidebar());

	const [searchParams] = useSearchParams();
	// console.log(searchParams.get("v"));
	const videoId = searchParams.get("v");

	const [video, setVideo] = useState({});

	useEffect(() => {
		async function getVideo() {
			const req = await fetch(GET_VIDEO_BY_ID + videoId);
			const data = await req.json();
			// console.log(data);
			setVideo(data.items[0]);
		}
		getVideo();
		window.scrollTo(0, 0);
	}, [videoId]);

	return (
		<div className="p-5 px-20 col-span-10 grid grid-cols-11">
			<div className="mx-5 col-span-7">
				<iframe
					className="rounded-2xl"
					width="725"
					height="400"
					src={
						"https://www.youtube.com/embed/" +
						video.id +
						"?autoplay=1"
					}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<div>
					<Comments />
				</div>
			</div>

			<div className="col-span-4 ml-5">
				<div>
					<LiveComments />
				</div>
				{video.id ? (
					<SuggestionVideos categoryId={video.snippet.categoryId} />
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	);
};

export default Watch;
