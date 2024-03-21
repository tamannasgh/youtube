import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoMdMic } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import Logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/Slices/appSlice";
import { cacheResults } from "../utils/Slices/searchResultsCacheSlice";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_SUGGESTIONS } from "../config";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(true);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const searchResultsCache = useSelector((store) => store.searchResultsCache);

	const handleToggle = () => {
		dispatch(toggleSidebar());
	};

	const handleInputEnter = () => {
		const path = `/results?q=${searchQuery}`;
		navigate(path);
	};

	useEffect(() => {
		async function getSearchSuggestions() {
			if (searchResultsCache[searchQuery]) {
				//if we have results in cache just set suggestions equal to that don't need to send req
				setSuggestions(searchResultsCache[searchQuery]);
				return;
			}

			const res = await fetch(SEARCH_SUGGESTIONS + searchQuery);
			const data = await res.json();
			setSuggestions(data[1]);
			dispatch(cacheResults({ [searchQuery]: data[1] })); //caching the results {query: [...array of results]}
		}

		const timer = setTimeout(getSearchSuggestions, 200);

		return () => {
			clearTimeout(timer); //if the diff between 2 req is < 200ms then it will just clear that req as user don't need suggestions, skipping some events knows as debouncing.
		};
	}, [searchQuery]);

	return (
		<header className="grid grid-flow-col p-2 place-content-between place-items-center">
			<div className="flex ml-7">
				<RxHamburgerMenu
					className="cursor-pointer mr-5"
					size={25}
					title="menu"
					onClick={handleToggle}
				/>
				<Link to="/">
					<img
						src={Logo}
						alt="logo"
						className="h-6 cursor-pointer"
					/>
				</Link>
			</div>

			<div className="relative">
				<div className="flex">
					<input
						type="text"
						className="border border-gray-300 px-4 w-[35rem] rounded-l-full"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={(e) => setShowSuggestions(true)}
						onBlur={
							(e) =>
								setTimeout(() => setShowSuggestions(false), 500)
							//In order to run the click event of li i should have the suggestions div on page, 200 mili sec delay is enough to reach the statement but let just do it 500 ms to be on safe side
						}
						onKeyDown={(e) => {
							if (e.code === "Enter") {
								handleInputEnter();
								setShowSuggestions(false);
							}
						}}
					/>
					<button
						className="cursor-pointer px-4 bg-gray-100 border border-gray-300 rounded-r-full"
						onClick={handleInputEnter}
					>
						<IoSearchOutline size={20} />
					</button>
					<button className="cursor-pointer bg-gray-100 shadow p-3 rounded-full ml-3">
						<IoMdMic size={20} />
					</button>
				</div>

				{suggestions.length > 0 && showSuggestions && (
					<ul className="absolute bg-white w-[35rem] py-4 drop-shadow-lg rounded-2xl">
						{suggestions.map((suggestion, index) => (
							<Link
								key={index}
								to={"/results?q=" + suggestion}
							>
								<li
									className="p-2 px-7 hover:bg-slate-100 cursor-pointer"
									onClick={() => {
										setSearchQuery(suggestion);
									}}
								>
									{suggestion}
								</li>
							</Link>
						))}
					</ul>
				)}
			</div>

			<div className="flex">
				<SiYoutubeshorts
					size={25}
					className="mr-5 cursor-pointer"
				/>
				<IoMdNotificationsOutline
					size={27}
					className="mr-5 cursor-pointer"
				/>
				<BiSolidUserCircle
					size={27}
					className="mr-10 cursor-pointer"
				/>
			</div>
		</header>
	);
};

export default Header;
