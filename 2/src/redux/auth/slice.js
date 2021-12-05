import { createSlice } from '@reduxjs/toolkit';

import {
  signUpAsync,
  signInAsync,
  signOutAsync,
  signUpGoogle,
} from './authAsyncOperations';

const initialState = {
  token: '',
  email: '',
  name: '',
  error: {},
  loading: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signUpAsync.fulfilled](state, action) {
      const { payload } = action;
      return {
        ...state,
        token: payload?.user?.accessToken,
        email: payload?.user?.email,
        name: payload?.user?.displayName,
        loading: false,
      };
    },
    [signUpAsync.rejected](state, action) {
      const { payload } = action;
      return {
        ...state,
        error: payload,
        loading: false,
      };
    },
    [signUpAsync.pending](state, _) {
      return {
        ...state,
        loading: true,
      };
    },
    [signInAsync.fulfilled](_, action) {
      const { payload } = action;
      return {
        token: payload?.user?.accessToken,
        email: payload?.user?.email,
        name: payload?.user?.displayName,
        loading: false,
      };
    },
    [signInAsync.rejected](state, action) {
      const { payload } = action;
      return {
        ...state,
        error: payload,
        loading: false,
      };
    },
    [signInAsync.pending](state, _) {
      return {
        ...state,
        loading: true,
      };
    },
    [signUpGoogle.fulfilled](_, action) {
      const { payload } = action;
      return {
        token: payload?.accessToken,
        email: payload?.email,
        name: payload?.displayName,
        loading: false,
      };
    },
    [signOutAsync.fulfilled]() {
      return initialState;
    },
    [signOutAsync.pending](state, _) {
      return { ...state, loading: true };
    },
    [signOutAsync.rejected](state, _) {
      return { ...state, loading: false };
    },
  },
});

export default authSlice.reducer;
