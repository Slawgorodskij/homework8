import {addPosts, errorPosts, loadingPosts} from "./actions";

export const ADD_POSTS = 'ADD_POSTS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

const initialState = {
    posts: [],
    loading: false,
    error: null,
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case ADD_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export const getPosts = () => {
    return async (dispatch) => {
        dispatch(loadingPosts())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(addPosts(data))
        } catch (error) {
            dispatch(errorPosts(error))
        }
    }
}