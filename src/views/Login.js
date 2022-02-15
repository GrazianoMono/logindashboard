import React, { useState, useEffect } from 'react';
import '../scss/Login.scss';
import useAuth from '../hooks/useAuth';
import FormField from '../components/molecules/FormField';
import { useNavigate } from 'react-router';

function Login() {
	const navigate = useNavigate();
	const { handleSubmit, error, isLogged } = useAuth();
	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const onChangeField = (name, value) => {
		setForm({
			...form,
			[name]: value
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();

		handleSubmit(form);
	}

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, []);

	return (
		<form
			className="login-form"
			onSubmit={onSubmit}>
				<FormField
					label="E-mail"
					type="email"
					name="email"
					value={form.email}
					onChange={onChangeField}
					required
				/>
				<FormField label="Password" type="password" name="password" value={form.password} onChange={onChangeField} required />
				<FormField label="Login" type="submit" />
				{!!error && <p style={{ color: 'red' }}>{error}</p>}
		</form>
	);
}

export default Login;
