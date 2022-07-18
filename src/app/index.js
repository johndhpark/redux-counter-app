import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/auth-slice";
import counterReducer from "../features/Counter/counter-slice";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;
