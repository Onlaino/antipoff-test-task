import { Header } from '../../components/Header/Header';
import { OurTeam } from '../../components/ui/OurTeam/OurTeam';
import { UserItems } from '../../components/UserItems/UserItems';
import { userActions } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';

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
				<LogoutButton logout={logout} />
			</Header>
			<UserItems />
		</>
	);
};
