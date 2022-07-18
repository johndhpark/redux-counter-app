import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { authActions } from "./auth-slice";
import classes from "./Auth.module.css";

const isValidEmail = (email) =>
	/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

const isValidPassword = (password) => password.trim().length > 0;

const Auth = () => {
	const dispatch = useDispatch();

	const [
		emailInputValue,
		emailInputIsInValid,
		emailInputChangeHandler,
		emailInputBlurHander,
		emailInputSubmitHandler,
	] = useInput(isValidEmail);

	const [
		passwordInputValue,
		passwordInputIsInvalid,
		passwordInputChangeHandler,
		passwordInputBlurHandler,
		passwordInputSubmitHandler,
	] = useInput(isValidPassword);

	const formIsInvalid = emailInputIsInValid || passwordInputIsInvalid;

	const loginFormSubmitHandler = (e) => {
		e.preventDefault();

		if (formIsInvalid) {
			return;
		}

		dispatch(authActions.login());
		emailInputSubmitHandler();
		passwordInputSubmitHandler();
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={loginFormSubmitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">
							Email
							<input
								type="email"
								id="email"
								value={emailInputValue}
								onChange={emailInputChangeHandler}
								onBlur={emailInputBlurHander}
								autoComplete="username"
							/>
							{emailInputIsInValid && (
								<p className={classes["error-text"]}>Email is Invalid</p>
							)}
						</label>
					</div>
					<div className={classes.control}>
						<label htmlFor="password">
							Password
							<input
								type="password"
								id="password"
								autoComplete="current-password"
								value={passwordInputValue}
								onChange={passwordInputChangeHandler}
								onBlur={passwordInputBlurHandler}
							/>
							{passwordInputIsInvalid && (
								<p className={classes["error-text"]}>Password is Invalid</p>
							)}
						</label>
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
