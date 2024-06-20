import cl from './PartnerPage.module.css';
import { Error } from '../../components/ui/Error/Error';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/ui/Loader/Loader';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/BackButton/BackButton';
import { userActions } from '../../redux/slices/userSlice';
import { PartnerInfo } from '../../components/ui/PartnerInfo/PartnerInfo';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { PartnerContacts } from '../../components/PartnerContacts/PartnerContacts';
import { useGetUserByIdQuery } from '../../redux/api/api';
import { StandartTextForPartner } from '../../components/ui/StandartTextForPartner/StandartTextForPartner';
import { IPartnerSingleResponse } from '../../types/partner.types';

export const PartnerPage = () => {
	const dispatch = useAppDispatch();
	const params = useParams();
	const { partnerId } = params;
	const {
		data: partner,
		isLoading,
		isError,
	} = useGetUserByIdQuery(partnerId ? partnerId : '');

	const logout = () => {
		dispatch(userActions.logout());
		localStorage.removeItem('token');
	};

	const renderPartner = (partner: IPartnerSingleResponse | undefined) => {
		if (partner) {
			return (
				<PartnerInfo
					imgURL={partner?.data?.avatar}
					jobTitle={'Партнер'}
					firstName={partner?.data?.first_name}
					lastName={partner?.data?.last_name}
				/>
			);
		}
	};

	if (isLoading) return <Loader />;
	if (isError) return <Error />;
	return (
		<>
			<Header>
				{renderPartner(partner)}
				<BackButton />
				<LogoutButton logout={logout} />
			</Header>
			<section className={cl.partnerSection}>
				<StandartTextForPartner />
				<PartnerContacts
					mail={partner?.data.email ? partner?.data.email : 'no email'}
					phone='+7 (954) 333-44-55'
				/>
			</section>
		</>
	);
};
