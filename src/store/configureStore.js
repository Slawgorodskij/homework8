import {applyMiddleware, createStore} from "redux";
import {postsReducer} from "./posts/postsReducer";
import thunk from "redux-thunk";


export const store = createStore(postsReducer, applyMiddleware(thunk));