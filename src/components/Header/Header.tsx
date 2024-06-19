import { PropsWithChildren } from 'react';
import cl from './Header.module.css';

export const Header = ({children}: PropsWithChildren) => {
	return (
		<header className={cl.header}>
			{children}
		</header>
	)
}