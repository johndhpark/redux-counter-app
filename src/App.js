import { useSelector } from "react-redux";
import Auth from "./features/Auth/Auth";
import Counter from "./features/Counter/Counter";
import Header from "./features/Header/Header";
import UserProfile from "./features/UserProfile/UserProfile";

function App() {
	const isAuthorized = useSelector((state) => state.auth.isAuthorized);

	return (
		<>
			<Header />
			{!isAuthorized && <Auth />}
			{isAuthorized && <UserProfile />}
			<Counter />
		</>
	);
}

export default App;
