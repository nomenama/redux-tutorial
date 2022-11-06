export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";

export const getPost = () => ({
    type: GET_POST
});

export const setPost = (posts: any[]) => ({
    type: SET_POST,
    posts
});

const initialState = {
    posts: undefined
};

const postReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_POST:
            return {...state, posts: action.posts};
        default:
            return state;
    }
};

export default postReducer;