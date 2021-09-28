import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import MyInput from "./../components/UI/input/MyInput";

function Login() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem("auth", "true");
	};
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={login}>
				<MyInput type='text' placeholder='Enter login' />
				<MyInput type='password' placeholder='Enter password' />
				<MyButton>LOGIN</MyButton>
			</form>
		</div>
	);
}

export default Login;
