import cl from './PartnerPage.module.css';
import { Error } from '../../components/ui/Error/Error';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/ui/Button/Button';
import { Loader } from '../../components/ui/Loader/Loader';
import { PartnerInfo } from '../../components/ui/PartnerInfo/PartnerInfo';
import { Link, useParams } from 'react-router-dom';
import { PartnerContacts } from '../../components/PartnerContacts/PartnerContacts';
import { useGetUserByIdQuery } from '../../redux/api/api';
import { StandartTextForPartner } from '../../components/ui/StandartTextForPartner/StandartTextForPartner';

export const PartnerPage = () => {
	const params = useParams();
	const { partnerId } = params;
	const {
		data: partner,
		isLoading,
		isError,
	} = useGetUserByIdQuery(partnerId ? partnerId : '');

	console.log(partner)

	return (
		<>
			{isLoading && <Loader />}
			{isError && <Error />}
			<Header>
				{partner && (
					<PartnerInfo
						imgURL={partner?.data?.avatar}
						jobTitle={'Партнер'}
						firstName={partner?.data?.first_name}
						lastName={partner?.data?.last_name}
					/>
				)}
				<Link to={'/'}>
					<Button className={cl.back} variant='white'>
						Назад
					</Button>
				</Link>
				<Link to={'/login'}>
					<Button className={cl.logout} variant='white'>
						Выход
					</Button>
				</Link>
			</Header>
			<section className={cl.partnerSection}>
				<StandartTextForPartner />
				<PartnerContacts
					mail='sykfafkar@gmail.com'
					phone='+7 (954) 333-44-55'
				/>
			</section>
		</>
	);
};
