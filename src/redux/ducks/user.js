export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => ({
	type: GET_USER
});

export const setUser = (user) => ({
	type: SET_USER,
	user
});

const initialState = {
	user: undefined
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {...state, user: action.user};
		default:
			return state;
	}
};

export default userReducer;