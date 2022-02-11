import '../scss/App.scss';
import React, { useEffect, useReducer, useState } from 'react';
import Login from '../components/Login';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';

function App() {
	const loginReducer = (state, action) => {
		switch (action.type) {
			case 'cookieSuccess':
				console.log('Cookie valido');
				return { logged: true };
			case 'success':
				Cookies.set('logged', 'success', { expires: 2 });
				return { logged: true };
			case 'incorrect':
				return { logged: false, showError: true };
			default:
				return state;
		}
	};

	const [logged, dispatch] = useReducer(loginReducer, { logged: false });

	const handleSubmit = (e) => {
		if (password === '123456' && email === 'guest@mono.studio')
			dispatch({ type: 'success' });
		else dispatch({ type: 'incorrect' });
		e.preventDefault();
	};

	const [password, setPassword] = useState('');
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const [email, setEmail] = useState('');
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	useEffect(() => {
		const cookie = Cookies.get('logged');
		console.log(cookie === 'success');
		if (cookie === 'success') dispatch({ type: 'cookieSuccess' });
	}, []);

	return (
		<div className="App">
			{!logged.logged && (
				<Login
					handleSubmit={handleSubmit}
					handleEmailChange={handleEmailChange}
					handlePasswordChange={handlePasswordChange}
					password={password}
					email={email}
				/>
			)}
			{!logged.logged && logged.showError && (
				<p className="error">Credenziali errate, riprova!</p>
			)}
			{logged.logged && <Dashboard />}
		</div>
	);
}

export default App;
