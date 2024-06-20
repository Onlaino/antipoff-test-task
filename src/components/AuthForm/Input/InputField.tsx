import cl from './InputField.module.css';
import { IInputFieldProps } from '../AuthForm.props';

export const InputField = ({
	label,
	type,
	name,
	validate,
	error,
}: IInputFieldProps) => {
	return (
		<div className={cl.wrapper}>
			<label htmlFor={name} className={cl.label}>
				{label}
			</label>
			<input type={type} className={cl.input}  {...validate} />
			{error && <p className={cl.error}>{error.message}</p>}
		</div>
	);
};
