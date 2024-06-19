import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IAuthFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export interface IAuthForm {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string
}

export interface IInputFieldProps {
	label: string;
	type: string;
	name: 'name' | 'email' | 'password' | 'passwordConfirm';
	validate?: object;
	error?: FieldError;
}

export interface IPasswordInputFieldProps {
	label: string;
	name: 'name' | 'email' | 'password' | 'passwordConfirm';
	type: string;
	validate?: object;
	error?: FieldError;
}