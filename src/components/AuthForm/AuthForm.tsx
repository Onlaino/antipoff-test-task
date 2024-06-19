import cl from './AuthForm.module.css';
import { Button } from '../ui/Button/Button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../../redux/api/api';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { userActions } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../ui/Loader/Loader';
import { IAuthForm } from './AuthForm.props';
import { InputField } from './Input/InputField';
import { PasswordInputField } from './PasswordInputField/PasswordInputField';

// "email": "eve.holt@reqres.in",
//  "password": "cityslicka"

export const AuthForm = () => {
	const [loginUser, { isError, isLoading }] = useLoginUserMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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

	const methods = useForm();

	return (
		<>
			{isLoading && <Loader />}
			<FormProvider {...methods}>
				<div className={cl.formWrapper}>
					<form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
						{isError && <p className={cl.error}>Не удалось получить токен</p>}
						<h3 className={cl.heading}>Регистрация</h3>
						{/* <div className={cl.wrapper}>
						<label htmlFor='login' className={cl.label}>
							Имя
						</label>
						<input
							type='text'
							className={cl.input}
							{...register('name', { required: true })}
						/>
						{errors.name && <p className={cl.error}>Ошибка</p>}
					</div> */}
						<InputField
							label='Имя'
							type='text'
							name='name'
							validate={{ ...register('name', { required: true }) }}
							error={errors.name}
						/>
						<InputField
							label='Электронная почта'
							type='email'
							name='email'
							error={errors.email}
							validate={{
								...register('email', {
									required: true,
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: 'Некорректный email',
									},
								}),
							}}
						/>
						{/* <div className={cl.wrapper}>
							<label htmlFor='email' className={cl.label}>
								Электронная почта
							</label>
							<input
								type='email'
								className={cl.input}
								{...register('email', {
									required: true,
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: 'Некорректный email',
									},
								})}
							/>
							{errors.email && (
								<p className={cl.error}>{errors.email.message}</p>
							)}
							{watch('password')}
						</div> */}
						<PasswordInputField
							label='Пароль'
							name='password'
							type='password'
							error={errors.password}
							validate={{
								...register('password', {
									required: 'Пароль обязателен',
									minLength: {
										value: 6,
										message: 'Пароль должен быть не менее 6 символов',
									},
								}),
							}}
						/>
						<PasswordInputField
							type='password'
							label='Подтвердите пароль'
							name='passwordConfirm'
							validate={{
								...register('passwordConfirm', {
									required: 'Подтверждение пароля обязательно',
									validate: value =>
										value === watch('password') || 'Пароли не совпадают',
								}),
							}}
							error={errors.password}
						/>
						{/* <div className={cl.wrapper}>
							<label htmlFor='password' className={cl.label}>
								Пароль
							</label>
							<div className={cl.inputWrapper}>
								<input
									type='password'
									className={cl.input}
									{...register('password', {
										required: 'Подтверждение пароля обязательно',
										validate: value =>
											value === watch('password') || 'Пароли не совпадают',
									})}
								/>
								{errors.password && <p className={cl.error}>Ошибка</p>}
								<img
									className={cl.eyeoff}
									src='/icons/eye-off.svg'
									alt='eye-off'
								/>
							</div>
						</div> */}
						{/* <div className={cl.wrapper}>
							<label htmlFor='password' className={cl.label}>
								Подтвердите пароль
							</label>
							<div className={cl.inputWrapper}>
								<input
									type='password'
									className={cl.input}
									{...register('password', { required: true })}
								/>
								{errors.password && <p className={cl.error}>Ошибка</p>}
								<img
									className={cl.eyeoff}
									src='/icons/eye-off.svg'
									alt='eye-off'
								/>
							</div>
						</div> */}
						<Button className={cl.button}>Зарегистрироваться</Button>
					</form>
				</div>
			</FormProvider>
		</>
	);
};
