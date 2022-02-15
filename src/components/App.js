import '../scss/App.scss';
import React, { useEffect } from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

function App() {
	const navigate = useNavigate();
	const { isLogged } = useAuth();

	useEffect(() => {
		if (!isLogged) navigate('/login');
	}, []);

	return (
		<div className="App">
			<Dashboard />
		</div>
	);
}

export default App;
