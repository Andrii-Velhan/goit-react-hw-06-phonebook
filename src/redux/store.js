import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

//===========

// import { createStore } from 'redux';
// import types from '../redux/phoneBook/phoneBook-types';

// const initialState = {
//   phoneBook: {
//     items: [],
//     filter: '',
//   },
// };

// const reduser = (state = initialState, { type, payload }) => {
//   console.log('лог екшена в reduser: ', { type, payload });
//   switch (type) {
//     case types.ADD:
//       return {
//         ...state,
//         phoneBook: { ...state.phoneBook.items, payload },
//       };

//     case types.REMOVE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;
