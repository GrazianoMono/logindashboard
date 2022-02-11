import '../scss/App.scss';
import React, { useReducer, useState } from 'react';
import Login from '../components/Login';
import Dashboard from './Dashboard';

function App() {
	const loginReducer = (state, action) => {
		switch (action.type) {
			case 'success':
				return { logged: true };
			case 'incorrect':
				console.log('Suca e io non ti loggo perché hai sbagliato');
				return { logged: false };
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
			{logged.logged && <Dashboard />}
		</div>
	);
}

export default App;
