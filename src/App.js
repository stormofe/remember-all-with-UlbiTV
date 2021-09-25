import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "Java", body: "WWWWWW" },
		{ id: 2, title: "aa", body: "RRRR" },
		{ id: 3, title: "Phyton", body: "NNNNNNN" },
	]);

	const [selectedSort, setSelectedSort] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	function getSortedPosts() {
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}
		return posts;
	}

	const sortedPosts = getSortedPosts();

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	};
	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{ margin: "15px 0px" }} />
			<div>
				<MyInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search' />
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue='Sort by:'
					options={[
						{ value: "title", name: "by name" },
						{ value: "body", name: "by description" },
					]}
				/>
			</div>

			{posts.length ? (
				<PostList remove={removePost} posts={sortedPosts} title={"List of posts"} />
			) : (
				<h1 style={{ textAlign: "center" }}>Posts are not found!</h1>
			)}
			<Counter />
			<Counter />
			<Counter />
			<Counter />
			<Counter />
		</div>
	);
}

export default App;
