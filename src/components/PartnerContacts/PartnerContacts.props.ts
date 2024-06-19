import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IPartnerContactsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	phone: string;
	mail: string;
}
