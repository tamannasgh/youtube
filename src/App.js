import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Watch from "./components/Watch";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SearchResults from "./components/SearchResults";

function App() {
	return (
		<Provider store={store}>
			<Header />
			<div className="grid grid-flow-col grid-cols-10">
				<Sidebar />
				<Outlet />
			</div>
		</Provider>
	);
}

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "watch",
				element: <Watch />,
			},
			{
				path: "results",
				element: <SearchResults />,
			},
		],
	},
]);

export default App;
