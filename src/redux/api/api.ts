import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	IPartnerData,
	IPartnerSingleResponse,
} from '../../types/partner.types';

type TypePartnerProps = { page: number; limit: number };

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://reqres.in/api',
	}),
	endpoints: build => ({
		getUsers: build.query<IPartnerData, TypePartnerProps>({
			query: ({ page = 1, limit = 10 }) => `users?page=${page}&limit=${limit}`,
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

export const { useGetUsersQuery, useGetUserByIdQuery, useLoginUserMutation } =
	userApi;
