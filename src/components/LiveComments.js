import React, { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { getRandomNum } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Slices/LiveChatSlice";

const LiveComment = ({ author, quote }) => {
	return (
		<div className="flex items-center m-2">
			<BiSolidUserCircle
				size={33}
				className="mr-2"
			/>
			<p className="mr-2 text-gray-600">{author.substring(0, 9)}</p>
			<p>{quote.substring(0, 15)}</p>
		</div>
	);
};

const LiveComments = () => {
	const dispatch = useDispatch();
	const liveComments = useSelector((store) => store.liveChat.messages);

	const [myComment, setMyComment] = useState("");

	useEffect(() => {
		async function getComments() {
			const res = await fetch(
				`https://dummyjson.com/quotes?limit=${getRandomNum(
					1,
					3
				)}&skip=${getRandomNum(0, 90)}`
			);
			const data = await res.json();
			// console.log(data);
			dispatch(addMessage(data.quotes));
		}
		const i = setInterval(getComments, 1000);

		return () => {
			clearInterval(i);
		};
	}, []);

	return (
		<div className="border rounded-lg h-[450px] mb-5 flex flex-col">
			<p className="border-b  p-3 px-7">Top chats</p>
			<div
				id="temp"
				className="px-4 flex flex-col-reverse flex-auto overflow-y-scroll "
			>
				{liveComments.map((comment, i) => (
					<LiveComment
						key={i}
						{...comment}
					/>
				))}
			</div>
			<div className="border">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const id = liveComments.length + 5;
						dispatch(
							addMessage([
								{
									id: id,
									author: "Tamanna",
									quote: myComment,
								},
							])
						);
						setMyComment("");
					}}
				>
					<input
						type="text"
						className="border p-2 px-5 w-5/6"
						placeholder="type..."
						value={myComment}
						onChange={(e) => setMyComment(e.target.value)}
					/>
					<input
						type="submit"
						value="Send"
						className="p-2 bg-blue-800 text-white rounded-e-md w-1/6 cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default LiveComments;
