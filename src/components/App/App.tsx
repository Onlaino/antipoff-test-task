import { store } from '../../redux/store';
import { router } from '../../routes';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

export const App = () => {
	return (
		<Provider store={store}>
			{/* <PersistGate loading={<Loader/>} persistor={persistor}> */}
				<RouterProvider router={router} />
			{/* </PersistGate> */}
		</Provider>
	);
};
