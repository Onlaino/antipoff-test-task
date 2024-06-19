import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	IPartnerData,
	IPartnerSingleResponse,
} from '../../types/partner.types';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://reqres.in/api',
	}),
	endpoints: build => ({
		getUsers: build.query<IPartnerData, string>({
			query: () => `/users`,
		}),
		getUserById: build.query<IPartnerSingleResponse, string>({
			query: (id: string) => `/users/${id}`,
		}),
		loginUser: build.mutation<
			{ token: string },
			{ email: string; password: string }
		>({
			query: data => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useLoginUserMutation } = userApi;
