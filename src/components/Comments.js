import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Comment = ({ comment }) => {
	return (
		<>
			<div className="flex mb-3">
				<div>
					<BiSolidUserCircle
						size={37}
						className="mr-3"
					/>
				</div>
				<ul>
					<li className="font-semibold">{comment.username}</li>
					<li className="text-gray-600 mt-[-3px]">
						- {comment.comment}
					</li>
				</ul>
			</div>
			<div className="ml-7 border-l border-gray-400">
				{comment.replies.map((reply) => (
					<Comment
						key={reply.id}
						comment={reply}
					/>
				))}
			</div>
		</>
	);
};

const Comments = () => {
	const comments = [
		{
			id: 1,
			username: "Tamanna Sharma",
			comment: "this is amazing!",
			replies: [
				{
					id: 34,
					username: "Ishika Sharma",
					comment: "it surely is!",
					replies: [
						{
							id: 56,
							comment: "u watched it?!",
							username: "Sanjay Sharma",
							replies: [
								{
									id: 90,
									username: "Sanjana Sharma",
									comment: "yoo i did!!",
									replies: [],
								},
							],
						},
						{
							id: 88,
							username: "Vanshika Sharma",
							comment: "100!",
							replies: [],
						},
						{
							id: 987,
							username: "Kanishka Sharma",
							comment: "i love how people appreciate this.",
							replies: [],
						},
					],
				},
				{
					id: 675,
					username: "Aadhya Sharma",
					comment:
						"tbh i wasn't going to watch it, my goodness i did.",
					replies: [
						{
							id: 345,
							username: "Abhilash Sharma",
							comment: "same here damnn..",
							replies: [],
						},
					],
				},
			],
		},
		{
			id: 43,
			username: "Tannu",
			comment: "this is what i expected!",
			replies: [
				{
					id: 876,
					username: "Ishu",
					comment: "expected? how long you know about this channel?",
					replies: [
						{
							id: 31,
							username: "Kitty",
							comment: "almost 5 years..time goes like wind",
							replies: [
								{
									id: 13,
									username: "Vanshu",
									comment: "seriously...",
									replies: [],
								},
							],
						},
					],
				},
			],
		},
		{
			id: 17,
			username: "Addu",
			comment: "seriously...this made my day.",
			replies: [
				{
					id: 15,
					username: "Abhu",
					comment: "happy for you!",
					replies: [],
				},
			],
		},
		{
			id: 2,
			username: "Radha",
			comment: "hope to get more from you!",
			replies: [
				{
					id: 6,
					username: "Krishna",
					comment: "we will get i bet",
					replies: [
						{
							id: 9,
							username: "Ram",
							comment: "hey it sounds like rhyme...",
							replies: [],
						},
					],
				},
			],
		},
		{
			id: 10,
			username: "Sita",
			comment: "Noice!",
			replies: [],
		},
		{
			id: 95,
			username: "Shiv",
			comment: "you got this bro.. you are getting reach, congo!!!",
			replies: [
				{
					id: 17,
					username: "Paarvati",
					comment:
						"i was eagerly wanted to see this person getting fame, i am thankful for real!",
					replies: [],
				},
			],
		},
	];
	// console.log(comments);

	return (
		<div className="mt-7">
			{comments.map((comment) => (
				<Comment
					key={comment.id}
					comment={comment}
				/>
			))}
		</div>
	);
};

export default Comments;
