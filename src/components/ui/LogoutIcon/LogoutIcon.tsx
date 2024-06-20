import cl from './LogoutIcon.module.css';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface ILogoutProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLOrSVGImageElement>,
		HTMLOrSVGImageElement
	> {}

export const LogoutIcon: FC<ILogoutProps> = ({ className }) => {
	return (
		<img
			className={`${className} ${cl.icon}`}
			src='/icons/arrow-logout.svg'
			alt='logout'
		/>
	);
};
