import cl from './PasswordInputField.module.css';
import { useState } from 'react';
import { IPasswordInputFieldProps } from '../AuthForm.props';
import { InputField } from '../Input/InputField';

export const PasswordInputField = ({
	label,
	name,
	validate,
	error,
}: IPasswordInputFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className={cl.wrapper}>
			<InputField
				label={label}
				type={showPassword ? 'text' : 'password'}
				name={name}
				validate={validate}
				error={error}
			/>
			<img
				className={cl.eyeoff}
				src={showPassword ? '/icons/eye.svg' : '/icons/eye-off.svg'}
				onClick={togglePasswordVisibility}
				alt='Toggle password visibility'
			/>
		</div>
	);
};
