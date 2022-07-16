import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
	const count = useSelector((state) => {
		return state.counter;
	});
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const incrementByFiveHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const toggleCounterHandler = () => {
		console.log("toggled");
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{count}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={incrementByFiveHandler}>Increase by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
