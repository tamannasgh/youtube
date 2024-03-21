import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import searchResultsCacheSlice from "./Slices/searchResultsCacheSlice";

const store = configureStore({
	reducer: {
		app: appSlice,
		searchResultsCache: searchResultsCacheSlice,
	},
});

export default store;
