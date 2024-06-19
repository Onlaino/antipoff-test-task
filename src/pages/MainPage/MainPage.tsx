import cl from './MainPage.module.css';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { OurTeam } from '../../components/ui/OurTeam/OurTeam';
import { UserItems } from '../../components/UserItems/UserItems';

export const MainPage = () => {
	return (
		<>
			<Header>
				<OurTeam />
				<Button className={cl.mainPageButton} variant='white'>
					Выход
				</Button>
			</Header>
			<UserItems />
		</>
	);
};
