import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

function Dashboard() {
	const { isLogged } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLogged) {
			navigate('/login');
		}
	}, []);

	return <div>Benvenuto Guest di Mono</div>;
}

export default Dashboard;
