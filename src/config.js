export const API_KEY = "AIzaSyAtQQjfkgrrBYlVSwDnUBcpDU9L8gn9MEU";

export const MOST_POPULAR_VIDEOS =
	"https://www.googleapis.com/youtube/v3/videos?part=player,snippet,id,statistics&chart=mostPopular&maxResults=50&regionCode=in&key=" +
	API_KEY;

export const GET_VIDEO_BY_ID =
	"https://www.googleapis.com/youtube/v3/videos?key=" +
	API_KEY +
	"&part=snippet,id,statistics&id=";

export const SEARCH_SUGGESTIONS =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const GET_VIDEOS_BY_SEARCHQUERY =
	"https://www.googleapis.com/youtube/v3/search?key=" +
	API_KEY +
	"&part=snippet&maxResults=30&q=";

export const GET_SUGGESTION_VIDEOES_BY_CATEGORY_ID =
	"https://www.googleapis.com/youtube/v3/search?key=" +
	API_KEY +
	"&part=snippet&type=video&maxResults=30&videoCategoryId=";
