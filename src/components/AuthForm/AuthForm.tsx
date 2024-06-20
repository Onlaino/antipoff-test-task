import cl from './AuthForm.module.css';
import { Button } from '../ui/Button/Button';
import { Loader } from '../ui/Loader/Loader';
import { IAuthForm } from './AuthForm.props';
import { InputField } from './Input/InputField';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { PasswordInputField } from './PasswordInputField/PasswordInputField';
import { useLoginUserMutation } from '../../redux/api/api';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { validateEmail, validateName, validatePassword } from './auth.helpers';

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

export const AuthForm = () => {
	const [loginUser, { isError, isLoading }] = useLoginUserMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const methods = useForm();
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IAuthForm>();

	const onSubmit: SubmitHandler<IAuthForm> = async formData => {
		try {
			const res = await loginUser({
				email: formData.email,
				password: formData.password,
			}).unwrap();

			dispatch(
				userActions.login({
					name: formData.name,
					email: formData.email,
					token: res.token,
				})
			);
			localStorage.setItem('token', JSON.stringify(res.token));
			navigate('/');
		} catch (e) {
			console.error('Ошибка при входе', e);
		}
	};

	if (isLoading) return <Loader />;

	return (
		<FormProvider {...methods}>
			<div className={cl.formWrapper}>
				<form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
					{isError && <p className={cl.error}>Не удалось получить токен</p>}
					<h3 className={cl.heading}>Регистрация</h3>
					<InputField
						label='Имя'
						type='text'
						name='name'
						validate={{ ...register('name', validateName) }}
						error={errors.name}
					/>
					<InputField
						label='Электронная почта'
						type='email'
						name='email'
						error={errors.email}
						validate={{
							...register('email', validateEmail),
						}}
					/>
					<PasswordInputField
						label='Пароль'
						name='password'
						type='password'
						error={errors.password}
						validate={{
							...register('password', validatePassword),
						}}
					/>
					<PasswordInputField
						type='password'
						label='Подтвердите пароль'
						name='passwordConfirm'
						validate={{
							...register('passwordConfirm', {
								required: 'Подтверждение пароля обязательно',
								validate: (value: string) =>
									value === watch('password') || 'Пароли не совпадают',
							}),
						}}
						error={errors.password}
					/>
					<Button className={cl.button}>Зарегистрироваться</Button>
				</form>
			</div>
		</FormProvider>
	);
};
