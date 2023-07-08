'use client'
import { AppState } from './';
import { IUser } from '../interfaces/user';

type AppActionType =
  | { type: '[Auth] - Login'; payload: IUser }
  | { type: '[Auth] - Logout' };

export const appReducer = (
  state: AppState,
  action: AppActionType
): AppState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };

    default:
      return state;
  }
};
