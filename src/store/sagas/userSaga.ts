import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../slices/userSlice';

function* handleSignIn({
  payload: signInCredentials,
}: ReturnType<typeof LOGIN>) {
  try {
    const { data } = yield call(api.post, '/auth/sign-in', signInCredentials);
    yield put(LOGIN_SUCCESS({ data }));
  } catch (error) {
    yield put(LOGIN_FAILED({ error }));
  }
}

export default function* watcher() {
  yield takeLatest(LOGIN, handleSignIn);
}
