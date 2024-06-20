import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { PropsWithChildren } from 'react';

export const RequireAuth = ({ children }: PropsWithChildren) => {
	const userToken = useAppSelector(s => s.user.token);

	if (!userToken) {
		return <Navigate to={'/login'} replace />;
	}

	return <>{children}</>;
};
