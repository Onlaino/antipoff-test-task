import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IUserItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imgURL: string;
	partnerId: string;
	partnerFirstName: string;
	partnerLastName: string;
}
