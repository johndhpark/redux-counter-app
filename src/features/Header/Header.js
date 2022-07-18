import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Auth/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
	const isAuthorized = useSelector((state) => state.auth.isAuthorized);
	const dispatch = useDispatch();

	const logOutClickHandler = () => dispatch(authActions.logout());

	let menuContent = null;

	if (isAuthorized) {
		menuContent = (
			<nav>
				<ul>
					<li>
						<a href="/">My Products</a>
					</li>
					<li>
						<a href="/">My Sales</a>
					</li>
					<li>
						<button onClick={logOutClickHandler}>Logout</button>
					</li>
				</ul>
			</nav>
		);
	}

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{menuContent}
		</header>
	);
};

export default Header;
