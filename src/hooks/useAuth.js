import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const useAuth = () => {
	const navigate = useNavigate();
	const [isLogged, setIsLogged] = useState(Cookies.get('logged') === 'success');
	const [error, setError] = useState('');

	const handleSubmit = (data) => {
		setError('');
		if (data.email !== 'guest@mono.studio' || data.password !== '123456') {
			setError('Credentials not valid');
			return;
		}
		setIsLogged(true);
		Cookies.set('logged', 'success', { expires: 2 })
		navigate('/');
	};

	return { isLogged, handleSubmit, error };
};

export default useAuth;
