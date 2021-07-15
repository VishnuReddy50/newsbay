import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/newsbay">
					<Home />
				</Route>
				<Route exact path="/search">
					<Search />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;