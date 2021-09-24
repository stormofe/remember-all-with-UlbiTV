import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JS", body: "Description" },
		{ id: 2, title: "JS2", body: "Description" },
		{ id: 3, title: "JS3", body: "Description" },
	]);

	const [post, setPost] = useState({
		title: "",
		body: "",
	});

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = { id: Date.now(), ...post };
		setPosts([...posts, newPost]);
		setPost({ title: "", body: "" });
	};

	return (
		<div className='App'>
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
			<PostList posts={posts} title={"List of posts"} />
			<Counter />
			<Counter />
			<Counter />
			<Counter />
			<Counter />
		</div>
	);
}

export default App;
