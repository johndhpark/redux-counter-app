import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			console.log(state.counter);
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		toggleCounter: (state) => {
			state.counter = !state.counter;
		},
		increase: (state, action) => {
			state.counter = state.counter + action.payload;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
