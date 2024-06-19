import cl from './UserItems.module.css';
import { Error } from '../ui/Error/Error';
import { Loader } from '../ui/Loader/Loader';
import { UserItem } from './UserItem/UserItem';
import { useGetUsersQuery } from '../../redux/api/api';

export const UserItems = () => {
	const { data: partners, isLoading, isError } = useGetUsersQuery('');

	if (isLoading) return <Loader />;
	if (isError) return <Error />;

	return (
		<>
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
