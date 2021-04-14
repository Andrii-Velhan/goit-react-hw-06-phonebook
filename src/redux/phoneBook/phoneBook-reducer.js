import { combineReducers } from 'redux';
import types from './phoneBook-types';

const initialState = {
  phoneBook: {
    items: [],
    filter: '',
  },
};

const items = (state = [], { type, payload }) => {
  console.log('лог екшена в phoneBook-reduser: ', { type, payload });
  switch (type) {
    case types.ADD:
      return [payload, ...state];
    // return {
    //   ...state,
    //   phoneBook: { ...state.phoneBook.items, payload },
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

//============ ==============

// import { createStore } from 'redux';
// import types from './phoneBook-types';

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

//======== =======

// import { combineReducers } from 'redux';
// import types from './phoneBook-types';
// // import initialContacts from "../bd/contacts.json";

// const initialState = {
// 	contacts: {
// 		items: [],
// 		filter: ''
// 	}
// }

// const contacts = (state = [], { type, payload }) => {
// 	switch (type) {
// 		case types.ADD:
// 			return [...state, payload];

// 		case types.REMOVE:
// 			return state.filter(({ id }) => id !== payload);

// 		default:
// 			return state;
// 	}
// }

// const filter = (state = '', { type, payload }) => {
// 	switch (type) {
// 		case types.CHANGE_FILTER:
// 			return payload;

// 		default:
// 			return state;
// 	}
// }

// export default combineReducers({
// 	contacts,
// 	filter
// })
