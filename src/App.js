import React, { useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "Java", body: "WWWWWW" },
		{ id: 2, title: "aa", body: "RRRR" },
		{ id: 3, title: "Phyton", body: "NNNNNNN" },
	]);

	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}
		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
	}, [filter.query, sortedPosts]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className='App'>
			<MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
				Add post
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<hr style={{ margin: "15px 0px" }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List of posts"} />
		</div>
	);
}

export default App;
