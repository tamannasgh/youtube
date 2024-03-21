import { createSlice } from "@reduxjs/toolkit";

const searchResultsCacheSlice = createSlice({
	name: "searchResultsCache",
	initialState: {},
	reducers: {
		cacheResults(state, action) {
			Object.assign(state, action.payload);
		},
	},
});

export const { cacheResults } = searchResultsCacheSlice.actions;
export default searchResultsCacheSlice.reducer;
