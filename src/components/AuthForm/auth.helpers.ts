export const validateName = { required: true };

export const validateEmail = {
	required: true,
	pattern: {
		value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		message: 'Некорректный email',
	},
};

export const validatePassword = {
	required: 'Пароль обязателен',
	minLength: {
		value: 6,
		message: 'Пароль должен быть не менее 6 символов',
	},
};

