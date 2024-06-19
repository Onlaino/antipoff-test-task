import cl from './PartnerContacts.module.css';
import { IPartnerContactsProps } from './PartnerContacts.props';

export const PartnerContacts = ({mail, phone}: IPartnerContactsProps) => {
	return (
		<div className={cl.contacts}>
			<a className={cl.link} href={`mailto:${mail}`}>
				<img src="/icons/mail.svg" alt="mail-icon" />
				<p className={cl.contactInfo}>{mail}</p>
			</a>
			<a className={cl.link} href={`tel:${phone}`}>
				<img src="/icons/phone.svg" alt="phone-icon" />
				<p className={cl.contactInfo}>{phone}</p>
			</a>
		</div>
	);
};
