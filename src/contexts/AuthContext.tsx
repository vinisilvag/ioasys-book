/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
}

interface AuthState {
  user: UserData;
  token: string;
  refreshToken: string;
}

interface AuthContextState {
  user: UserData;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ioasysBook:token');
    const refreshToken = localStorage.getItem('@ioasysBook:refreshToken');
    const user = localStorage.getItem('@ioasysBook:user');

    if (token && refreshToken && user) {
      api.interceptors.request.use((config) => {
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
      });

      return { token, refreshToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async (credentials) => {
    const response = await api.post('/auth/sign-in', credentials);

    const user = response.data;
    const token = response.headers.authorization;
    const refreshToken = response.headers['refresh-token'];

    api.interceptors.request.use((config) => {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    });

    localStorage.setItem('@ioasysBook:token', token);
    localStorage.setItem('@ioasysBook:refreshToken', refreshToken);
    localStorage.setItem('@ioasysBook:user', JSON.stringify(user));

    setData({ token, refreshToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ioasysBook:token');
    localStorage.removeItem('@ioasysBook:refreshToken');
    localStorage.removeItem('@ioasysBook:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  return context;
};
