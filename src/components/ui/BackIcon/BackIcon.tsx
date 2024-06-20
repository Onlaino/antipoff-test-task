import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface IBackIconProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLOrSVGImageElement>,
		HTMLOrSVGImageElement
	> {}

export const BackIcon: FC<IBackIconProps> = ({ className }) => {
	return <img className={className} src='/icons/arrow-back.svg' alt='back' />;
};
