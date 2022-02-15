import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ type, name, label, value, onChange, required }) => {
  if (type === 'submit') 
    return (
      <div className="form-field form-field--centered">
				<input
					className="form-field__button"
					type="submit"
					value={label}
				/>
			</div>
    );
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-field__input"
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(e) => {
          e.preventDefault()
          onChange(name, e.target.value)
        }}
      />
    </div>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['password', 'text', 'submit', 'email']).isRequired,
  onChange: PropTypes.func,
}

export default FormField;
