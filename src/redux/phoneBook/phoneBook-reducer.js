import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneBookActions from './phoneBook-actions';

const items = createReducer([], {
  [phoneBookActions.addContact]: (state, { payload }) => [payload, ...state],
  [phoneBookActions.removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phoneBookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
