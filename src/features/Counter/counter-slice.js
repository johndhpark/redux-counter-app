import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		toggleCounter: (state) => {
			state.counter = !state.counter;
		},
		increase: (state, action) => {
			state.counter += action.payload;
		},
	},
});

export const { increment, decrement, toggleCounter, increase } =
	counterSlice.actions;

export default counterSlice.reducer;
