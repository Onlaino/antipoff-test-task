import cl from './LogoutButton.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import { LogoutIcon } from '../ui/LogoutIcon/LogoutIcon';

export const LogoutButton = ({ logout }: { logout: () => void }) => (
	<Link to='/login' onClick={logout}>
		<LogoutIcon className={cl.logoutIcon} />
		<Button className={cl.logout} variant='white'>
			Выход
		</Button>
	</Link>
);
