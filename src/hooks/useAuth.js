import react from 'react';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useAuth = () => {
	const [isLogged, setIsLogged] = useState(false);

	const createCookie = () => {
		Cookies.set('logged', 'success', { expires: 2 });
	};

	const getCookie = () => {
		return Cookies.get('logged');
	};

	const handleSubmit = (data) => {
		if (data.email === 'guest@mono.studio' && data.password === '123456') {
			setIsLogged(true);
			createCookie();
		}
	};

	useEffect(() => {
		const cookie = getCookie();
		if (cookie === 'success') setIsLogged(true);
	}, []);

	return { isLogged, handleSubmit };
};

export default useAuth;
