import { combineReducers } from '@reduxjs/toolkit';

import user from './userSlice';

const rootReducer = combineReducers({ user });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
