import logo from "./assets/insta-logo.png";

function Signup(props) {
	return (
		<>
			<div className='container'>
				<img src={logo} width='250px' />
				<div className='input-cont'>
					<input autoComplete='off' type='text' name='name' placeholder='Full Name' />
					<input
						autoComplete='off'
						type='text'
						name='mobile'
						placeholder='Mobile number Or Email'
					/>
					<input autoComplete='off' type='text' name='username' placeholder='Username' />
					<input
						autoComplete='off'
						type='password'
						name='password'
						placeholder='Password'
					/>
					<button type='submit'>Sign up</button>
				</div>
				<p>OR</p>
				<div>
					have an account? <span onClick={() => props.setIsRegistered(true)}>Login</span>{" "}
				</div>
			</div>
		</>
	);
}

export default Signup;
