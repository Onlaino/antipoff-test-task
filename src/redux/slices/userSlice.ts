import { createSlice } from '@reduxjs/toolkit';


type TypeUserState = {
	name: string,
	isLogined: boolean,
	jwt: string;
}

const initialState: TypeUserState = {
	name: '',
	isLogined: false,
	jwt: '',
}


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.name = action.payload.name;
			state.isLogined = true;
			state.jwt = 'auth'
		},
		logout: (state) => {
			state.name = '',
			state.isLogined = false,
			state.jwt = ''
		}
	}
});


export default userSlice.reducer;
export const userActions = userSlice.actions;