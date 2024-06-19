import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout/MainLayout';
import { MainPage } from '../pages/MainPage/MainPage';
import { PartnerPage } from '../pages/PartnerPage/PartnerPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout/>, 
		children: [
			{
				path: '/',
				element: <MainPage/>
			},
			{
				path: '/partner/:partnerId',
				element: <PartnerPage/>
			}
		]
	},
	{
		path: '/login',

	}
])