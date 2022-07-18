import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, toggleCounter, increase } from "./counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
	const count = useSelector((state) => state.counter.counter);
	const dispatch = useDispatch();

	const incrementHandler = () => dispatch(increment());

	const decrementHandler = () => dispatch(decrement());

	const incrementByFiveHandler = () => dispatch(increase(5));

	const toggleCounterHandler = () => dispatch(toggleCounter());

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
