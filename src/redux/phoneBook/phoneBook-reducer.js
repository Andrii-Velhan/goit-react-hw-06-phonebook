import { combineReducers } from 'redux';
import types from './phoneBook-types';
// import initialContacts from "../bd/contacts.json";

// const initialState = {
// 	contacts: {
// 		items: [],
// 		filter: ''
// 	}
// }

const contacts = (state = [], { type, payload }) => {
	switch (type) {
		case types.ADD:
			return [...state, payload];

		case types.REMOVE:
			return state.filter(({ id }) => id !== payload);

		default:
			return state;
	}
}

const filter = (state = '', { type, payload }) => {
	switch (type) {
		case types.CHANGE_FILTER:
			return payload;

		default:
			return state;
	}
}

export default combineReducers({
	contacts,
	filter
})