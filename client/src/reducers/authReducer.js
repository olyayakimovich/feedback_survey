import { FETCH_USER } from '../actions/types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return action.payload || state;
    default:
      return state;
  }
};

export default authReducer;
