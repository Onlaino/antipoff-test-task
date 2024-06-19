import { AuthForm } from '../../components/AuthForm/AuthForm';
import cl from './LoginPage.module.css';

export const LoginPage = () => {
	return (
		<section className={cl.login}>
			<AuthForm />
		</section>
	);
};
