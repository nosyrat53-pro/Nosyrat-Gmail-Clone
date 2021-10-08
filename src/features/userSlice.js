import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState ,
    reducers: {
        setUserLogin: (state , action) => {
            state.user = action.payload ;
        },
        setUserLogout: (state) => {
            state.user = null ;
        }
    }
});

export const { setUserLogin , setUserLogout } = userSlice.actions ;

export const selectUser = (state) => state.user.user ;

export default userSlice.reducer ;