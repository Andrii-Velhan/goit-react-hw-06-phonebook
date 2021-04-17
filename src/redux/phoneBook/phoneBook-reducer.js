import { combineReducers } from 'redux';
import types from './phoneBook-types';

const items = (state = [], { type, payload }) => {
  // console.log('лог екшена в phoneBook-reduser: ', { type, payload });
  switch (type) {
    case types.ADD:
      return [payload, ...state];
    // return {
    //   ...state,
    //   phoneBook: { payload, ...state.phoneBook.items },
    // };

    case types.REMOVE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
