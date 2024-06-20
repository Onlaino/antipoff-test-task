import { MainPage } from '../pages/MainPage/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { MainLayout } from '../layout/MainLayout/MainLayout';
import { PartnerPage } from '../pages/PartnerPage/PartnerPage';
import { RequireAuth } from '../components/RequireAuth/RequireAuth';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<RequireAuth>
				<MainLayout />
			</RequireAuth>
		),
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/partner/:partnerId',
				element: <PartnerPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);
