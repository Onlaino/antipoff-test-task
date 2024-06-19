import cl from './PartnerInfo.module.css';
import { IPartnerInfoProps } from './PartnerInfo.props';

export const PartnerInfo = ({
	imgURL,
	firstName,
	lastName,
	jobTitle,
}: IPartnerInfoProps) => {
	return (
		<div className={cl.partner}>
			<img className={cl.img} src={imgURL} alt='partner photo' />
			<div className={cl.info}>
				<p className={cl.name}>
					{firstName}&nbsp;{lastName}
				</p>
				<p className={cl.jobTitle}>{jobTitle}</p>
			</div>
		</div>
	);
};
