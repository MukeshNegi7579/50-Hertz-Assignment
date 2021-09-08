import { TOGGLE_SIDEBAR } from './types';

const INITIAL_STATE = {
  collapse: false,
};

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state, collapse: !state.collapse,
      };
    default: return state;
  }

};

export default reducer;