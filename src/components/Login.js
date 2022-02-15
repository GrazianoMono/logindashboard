import React from 'react';
import '../scss/Login.scss';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

function Login() {
	const { handleSubmit } = useAuth();

	const [password, setPassword] = useState('');
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const [email, setEmail] = useState('');
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<form
			className="login-form"
			onSubmit={(e) => {
				handleSubmit({ email: email, password: password });
				e.preventDefault();
			}}>
			<div className="form-field">
				<label className="form-field__label" htmlFor="email">
					E-mail
				</label>
				<input
					className="form-field__input"
					type="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
				/>
			</div>

			<div className="form-field">
				<label className="form-field__label" htmlFor="password">
					Password
				</label>
				<input
					className="form-field__input"
					type="password"
					name="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<div className="form-field form-field--centered">
				<input
					className="form-field__button"
					type="submit"
					value="Login"
				/>
			</div>
		</form>
	);
}

export default Login;
