import cl from './UserItems.module.css';
import { Error } from '../ui/Error/Error';
import { Button } from '../ui/Button/Button';
import { Loader } from '../ui/Loader/Loader';
import { IPartner } from '../../types/partner.types';
import { UserItem } from './UserItem/UserItem';
import { useGetUsersQuery } from '../../redux/api/api';
import { useEffect, useState } from 'react';

export const UserItems = () => {
	const [page, setPage] = useState(1);
	const [partnersList, setPartnersList] = useState<IPartner[]>([]);
	const {
		data: partners,
		isLoading,
		isError,
	} = useGetUsersQuery({ page, limit: 10 });

	useEffect(() => {
		if (partners && partners.data) {
			setPartnersList(prev => [...prev, ...partners.data]);
		}
	}, [partners]);

	useEffect(() => {
		return () => {
			setPage(1);
			setPartnersList([]);
		};
	}, []);

	const handleLoadMore = () => {
		setPage(prevPage => prevPage + 1);
	};

	if (isLoading) return <Loader />;
	if (isError) return <Error />;

	const totalPartnersLoaded = partnersList.length;
	const totalPartners = partners?.total || 0;
	const shouldShowLoadMoreButton = totalPartnersLoaded < totalPartners;

	return (
		<>
			<section className={cl.userItems}>
				{partnersList.map((partner, index) => (
					<UserItem
						key={`${partner.id}_${index}`}
						partnerId={`${partner.id}`}
						imgURL={partner.avatar}
						partnerFirstName={partner.first_name}
						partnerLastName={partner.last_name}
					/>
				))}
			</section>
			{shouldShowLoadMoreButton && (
				<div className={cl.buttonDiv}>
					<Button onClick={handleLoadMore} className={cl.loadMoreButton}>
						Показать еще
						<img src='/icons/show-more.svg' alt='show-more' />
					</Button>
				</div>
			)}
		</>
	);
};
