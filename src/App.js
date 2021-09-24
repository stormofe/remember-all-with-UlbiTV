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

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	//const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault();
		//console.log(title);
		//console.log(bodyInputRef.current.value);

		const newPost = {
			id: Date.now(),
			title,
			body,
		};
		//console.log(newPost);
		setPosts([...posts, newPost]);
		setTitle("");
		setBody("");
	};

	return (
		<div className='App'>
			<form>
				{/*Управляемый компонент*/}
				<MyInput value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Name of project' />
				<MyInput value={body} onChange={(e) => setBody(e.target.value)} type='text' placeholder='Description' />
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
