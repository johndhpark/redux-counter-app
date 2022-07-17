import classes from "./Auth.module.css";
import useInput from "../hooks/useInput";

const isValidEmail = (email) =>
	/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

const isValidPassword = (password) => password.trim().length > 0;

const Auth = () => {
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

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (formIsInvalid) {
			console.log("form is invalid");
			return;
		}

		emailInputSubmitHandler();
		passwordInputSubmitHandler();
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={formSubmitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							value={emailInputValue}
							onChange={emailInputChangeHandler}
							onBlur={emailInputBlurHander}
						/>
						{emailInputIsInValid && <p>Email is Invalid</p>}
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={passwordInputValue}
							onChange={passwordInputChangeHandler}
							onBlur={passwordInputBlurHandler}
						/>
						{passwordInputIsInvalid && <p>Password is Invalid</p>}
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
