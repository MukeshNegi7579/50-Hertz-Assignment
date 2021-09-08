import { LOGIN } from './types';

const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state, user: action.payload,
      };
    default: return state;
  }

};

export default reducer;