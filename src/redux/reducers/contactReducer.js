/* eslint-disable no-case-declarations */
const initialState = [
	{
		id: 0,
		name: 'Eduardo',
		email: 'edu@gmail.com',
		number: 85149506,
	},
	{
		id: 1,
		name: 'Teste',
		email: 'eduardo@gmail.com',
		number: 11110000,
	}
];

export default function contactReducer(state = initialState, action) {
	switch(action.type) {
	case 'ADD_CONTACT':
		state = [...state, action.payload];
		return state;

	case 'EDIT_CONTACT':
		const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
		state = updateState;
		return state;

	case 'DELETE_CONTACT':
		const filterContact = state.filter((contact) => contact.id !== action.payload && contact);
		state = filterContact;
		return state;
	default:
		return state;
	}

}