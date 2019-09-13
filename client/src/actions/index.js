import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const response = await fetch('/api/current_user');
  const userData = await response.json();
  dispatch({ type: FETCH_USER, payload: userData });
};
