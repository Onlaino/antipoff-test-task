// import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './slices/userSlice';
// import { userApi } from './api/api';
// 
// export const store = configureStore({
	// reducer: {
		// user: userSlice,
		// [userApi.reducerPath]: userApi.reducer,
	// },
	// middleware: getDefaultMiddleware =>
		// getDefaultMiddleware().concat(userApi.middleware),
// });
// 
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import userSlice from './slices/userSlice';
import { userApi } from './api/api';

const rootReducer = combineReducers({
	user: userSlice,
	[userApi.reducerPath]: userApi.reducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(userApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
