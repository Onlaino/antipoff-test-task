import cl from './MainPage.module.css';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { OurTeam } from '../../components/ui/OurTeam/OurTeam';
import { UserItems } from '../../components/UserItems/UserItems';
import { userActions } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';

export const MainPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logout = () => {
		dispatch(userActions.logout());
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<>
			<Header>
				<OurTeam />
				<Button onClick={logout} className={cl.mainPageButton} variant='white'>
					Выход
				</Button>
			</Header>
			<UserItems />
		</>
	);
};
