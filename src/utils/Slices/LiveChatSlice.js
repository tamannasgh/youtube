import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
	name: "liveChatSlice",
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage(state, action) {
			state.messages.splice(25, state.messages.length - 25);
			state.messages.unshift(...action.payload);
		},
	},
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
