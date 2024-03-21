const VideoCard = ({ video }) => {
	const { snippet, statistics } = video;

	return (
		<div className="w-80 m-2">
			<img
				className="rounded-xl"
				src={snippet.thumbnails.medium.url}
			/>
			<div className="mt-2">
				<h2 className="font-semibold">{snippet.title}</h2>
				<p className="text-gray-600 text-sm">{snippet.channelTitle}</p>
				{statistics && (
					<p className="text-gray-600 text-sm">
						{statistics.viewCount} views
					</p>
				)}
			</div>
		</div>
	);
};

export default VideoCard;
