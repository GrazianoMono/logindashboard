import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/Login.scss';

function Login({
	handleSubmit,
	handleEmailChange,
	email,
	handlePasswordChange,
	password,
}) {
	return (
		<form className="login-form" onSubmit={handleSubmit}>
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
