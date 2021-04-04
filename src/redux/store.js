import { createStore } from 'redux';
import types from '../redux/phoneBook/phoneBook-types'

const initialState = {
	contacts: {
		items: [],
		filter: ''
	}
}

const reduser = (state = initialState, { type, payload }) => {
	console.log('лог екшена в reduser: ', { type, payload });
	switch (type) {
		case types.ADD:
			return [...state, payload];

		case types.REMOVE:
			return state.filter(({ id }) => id !== payload);

		default:
			return state;
	}
}

const store = createStore(reduser)

export default store;

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phoneBookReducer from './phoneBook/phoneBook-reducer';



// const rootReducer = combineReducers({
// 	phoneBook: phoneBookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;