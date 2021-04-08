import { createSlice } from '@reduxjs/toolkit';

interface UserData {
  id: string;
  email: string;
  name: string;
  birthdate: string;
  gender: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

const initialState = {
  token: '',
  refreshToken: '',
  isLoading: false,
  isAuthenticated: false,
  error: '',
  data: {} as UserData,
  signInCredentials: {} as SignInCredentials,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN: (state, { payload: { data } }) => ({
      ...state,
      isLoading: true,
      signInCredentials: data,
    }),
    LOGIN_SUCCESS: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      data,
      isAuthenticated: true,
    }),
    LOGIN_FAILED: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error: error.response.data.errors.message,
    }),
  },
});

const { actions, reducer } = userSlice;

export const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } = actions;

export default reducer;
