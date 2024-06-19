import cl from './UserItem.module.css';
import { Link } from 'react-router-dom';
import { IUserItemProps } from './UserItem.props';

export const UserItem = ({
	imgURL,
	partnerId,
	partnerFirstName,
	partnerLastName,
}: IUserItemProps) => {
	return (
		<div className={cl.userItem}>
			<div className={cl.userInfo}>
				<Link className={cl.link} to={`/partner/${partnerId}`}>
					<img src={imgURL} alt='partnerPhoto' className={cl.userPhoto} />
					<p className={cl.userName}>{partnerFirstName}{partnerLastName}</p>
				</Link>
			</div>
		</div>
	);
};