import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import searchResultsCacheSlice from "./Slices/searchResultsCacheSlice";
import liveChatSlice from "./Slices/LiveChatSlice";

const store = configureStore({
	reducer: {
		app: appSlice,
		searchResultsCache: searchResultsCacheSlice,
		liveChat: liveChatSlice,
	},
});

export default store;
