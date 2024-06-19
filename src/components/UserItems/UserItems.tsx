import cl from './UserItems.module.css';
import { UserItem } from '../UserItem/UserItem';
import { useGetUsersQuery } from '../../redux/api/api';
import { Loader } from '../ui/Loader/Loader';

export const UserItems = () => {
	const { data: partners, isLoading, isError } = useGetUsersQuery('');

	return (
		<>
			{isLoading && <Loader />}
			{isError && <h2>Что-то пошло не так...</h2>}
			<section className={cl.userItems}>
				{partners?.data.map(partner => (
					<UserItem
						key={partner.id}
						partnerId={partner.id}
						imgURL={partner.avatar}
						partnerFirstName={partner.first_name}
						partnerLastName={partner.last_name}
					/>
				))}
			</section>
		</>
	);
};
