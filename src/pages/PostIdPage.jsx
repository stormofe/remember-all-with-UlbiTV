import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "./../hooks/useFetching";

function PostIdPage() {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});
	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response.data);
	});
	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);
	return (
		<div>
			<h1>Post page ID: {params.id}</h1>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h3>
						{post.id} {post.title}
					</h3>
					<div>{post.body}</div>
				</>
			)}
			<h2 style={{ marginTop: 20 }}>Comments: </h2>
			{isComLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map((comm) => (
						<div key={comm.id} style={{ marginTop: 15 }}>
							<h5>{comm.email}</h5>
							<div>{comm.body}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default PostIdPage;
