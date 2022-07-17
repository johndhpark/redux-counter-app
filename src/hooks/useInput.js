import { useState, useReducer } from "react";

const INIT_STATE = {
	value: "",
	isTouched: false,
};

const inputReducer = (state, action) => {
	switch (action.type) {
		case "SET_INPUT":
			return { ...state, value: action.payload };
		case "SET_TOUCHED":
			return { ...state, isTouched: true };
		case "RESET":
			return { ...INIT_STATE };
		default:
			return state;
	}
};

const useInput = (isValid) => {
	const [inputState, dispatchInputAction] = useReducer(
		inputReducer,
		INIT_STATE
	);
	const valueIsValid = isValid(inputState.value);
	const inputIsInValid = !valueIsValid && inputState.isTouched;

	const inputChangeHandler = (e) => {
		dispatchInputAction({ type: "SET_INPUT", payload: e.target.value });
	};

	const inputBlurHandler = () => {
		dispatchInputAction({ type: "SET_TOUCHED" });
	};

	const inputSubmitHandler = () => {
		dispatchInputAction({ type: "RESET" });
	};

	return [
		inputState.value,
		inputIsInValid,
		inputChangeHandler,
		inputBlurHandler,
		inputSubmitHandler,
	];
};

export default useInput;
