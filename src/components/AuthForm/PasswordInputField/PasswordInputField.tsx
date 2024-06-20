import cl from './PasswordInputField.module.css';
import { useState } from 'react';
import { InputField } from '../Input/InputField';
import { IPasswordInputFieldProps } from '../AuthForm.props';

export const PasswordInputField = ({
	label,
	name,
	validate,
	error,
}: IPasswordInputFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const passwordIcon = showPassword
		? '/icons/show-password.png'
		: '/icons/closed-eye.png';

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
				src={passwordIcon}
				onClick={togglePassword}
				alt='Toggle password'
			/>
		</div>
	);
};
