import logo from "./assets/insta-logo.png";

function Login(props) {
	return (
		<>
			<div className='container'>
				<img src={logo} width='250px' />
				<div className='input-cont'>
					<input
						autoComplete='off'
						type='text'
						name='username'
						placeholder='Username Or email address Or Username'
					/>
					<input
						autoComplete='off'
						type='password'
						name='password'
						placeholder='Password'
					/>
					<button type='submit'>Log In</button>
				</div>
				<p>OR</p>
				<div>
					Don&apos;t have an account?{" "}
					<span onClick={() => props.setIsRegistered(false)}>Sign up</span>{" "}
				</div>
			</div>
		</>
	);
}

export default Login;
