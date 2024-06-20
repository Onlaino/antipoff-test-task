import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../redux/store';
import { router } from '../../routes';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Loader } from '../ui/Loader/Loader';

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<Loader />}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	);
};
