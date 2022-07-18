import { createSlice } from "@reduxjs/toolkit";

const INIT_AUTH_STATE = { isAuthorized: false };

const authSlice = createSlice({
	name: "auth",
	initialState: INIT_AUTH_STATE,
	reducers: {
		login: (state) => {
			state.isAuthorized = true;
		},
		logout: (state) => {
			state.isAuthorized = false;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
