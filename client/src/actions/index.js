import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const response = await fetch('/api/current_user');
  const userData = await response.json();
  dispatch({ type: FETCH_USER, payload: userData });
};

export const handleToken = token => async dispatch => {
  console.log(token);
  const response = await fetch('/api/stripe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(token) });
  const tokenData = await response.json();
  dispatch({ type: FETCH_USER, payload: tokenData });
};