import cl from './OurTeam.module.css';
import { FC } from 'react';
import { IOurTeamProps } from './OurTeam.props';

export const OurTeam: FC<IOurTeamProps> = () => {
	return (
		<div className={cl.content}>
			<h1 className={cl.heading}>Наша команда</h1>
			<p className={cl.paragraph}>
				Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
				ложатся на их плечи, и умеющие находить выход из любых, даже самых
				сложных ситуаций.
			</p>
		</div>
	);
}