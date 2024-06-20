import cl from './BackButton.module.css';
import { Link } from 'react-router-dom';
import { BackIcon } from '../ui/BackIcon/BackIcon';
import { Button } from '../ui/Button/Button';

export const BackButton = () => (
	<Link to='/'>
		<BackIcon className={cl.backIcon} />
		<Button className={cl.back} variant='white'>
			Назад
		</Button>
	</Link>
);
