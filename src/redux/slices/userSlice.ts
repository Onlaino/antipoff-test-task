import { createSlice } from '@reduxjs/toolkit';


type TypeUserState = {
	name: string,
	isLogined: boolean,
	token: string;
	email: string;
}

const initialState: TypeUserState = {
	name: '',
	email: '',
	isLogined: false,
	token: '',
}


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.isLogined = true;
			state.token = action.payload.token
		},
		logout: (state) => {
			state.name = '',
			state.isLogined = false,
			state.token = ''
		}
	}
});


export default userSlice.reducer;
export const userActions = userSlice.actions;