import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "./../components/UI/input/MyInput";

function Login() {
	return (
		<div>
			<h1>Login</h1>
			<form>
				<MyInput type='text' placeholder='Enter login' />
				<MyInput type='password' placeholder='Enter password' />
				<MyButton>LOGIN</MyButton>
			</form>
		</div>
	);
}

export default Login;
