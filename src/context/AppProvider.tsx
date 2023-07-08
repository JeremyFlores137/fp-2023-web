'use client';
import { FC, useReducer, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import Cookies from 'js-cookie';
import axios from 'axios';

import { AppContext, appReducer } from './';

import { userApi } from '@/api';
import { IUser } from '@/interfaces/user';

export interface AppState {
  isLoggedIn: boolean;
  user?: IUser;
}

const APP_INITIAL_STATE: AppState = {
  isLoggedIn: false,
  user: undefined,
};

export const AppProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, APP_INITIAL_STATE);
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch({ type: '[Auth] - Login', payload: data?.user as IUser });
    }
  }, [status, data]);

  // useEffect(() => {
  //     checkToken();
  // }, [])

  const checkToken = async () => {
    if (!Cookies.get('token')) {
      return;
    }

    try {
      const { data } = await userApi.get('/user/validate-token');
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
    } catch (error) {
      Cookies.remove('token');
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await userApi.post('/user/login', { email, password });
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (
    email: string,
    password: string,
    name: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await userApi.post('/user/register', {
        email,
        password,
        name,
      });
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }

      return {
        hasError: true,
        message: 'No se pudo crear el usuario - intente de nuevo',
      };
    }
  };

  const logout = () => {
    signOut();
    // router.reload();
    // Cookies.remove('token');
  };

  return (
    <AppContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
