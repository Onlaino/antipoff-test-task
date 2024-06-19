import cl from './Button.module.css';
import cn from 'classnames';
import { IButtonProps } from './Button.props';

export const Button = ({ children, onClick, variant, className }: IButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={cn(cl.button, className, {
				[cl.whiteText]: variant === 'white',
				[cl.blackText]: variant === 'black',
			})}
		>
			{children}
		</button>
	);
};
