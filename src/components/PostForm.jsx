import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {
	const [post, setPost] = useState({
		title: "",
		body: "",
	});
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = { id: Date.now(), ...post };
		create(newPost);
		setPost({ title: "", body: "" });
	};
	return (
		<form>
			{/*Управляемый компонент*/}
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type='text'
				placeholder='Name of project'
			/>
			<MyInput
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				type='text'
				placeholder='Description'
			/>
			{/*Неуправляемый компонент*/}
			{/*<MyInput ref={bodyInputRef} type='text' placeholder='Description' />*/}
			<MyButton onClick={addNewPost}>Add post</MyButton>
		</form>
	);
}

export default PostForm;
