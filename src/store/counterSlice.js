import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

const counterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("counter/increment", (state) => {
			state.value++;
		})
		.addCase("counter/decrement", (state) => {
			state.value--;
		})
		.addCase("counter/increment_by_amount", (state, action) => {
			state.value += action.payload;
		});
});

export default counterReducer;
