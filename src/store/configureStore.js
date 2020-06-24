import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import postReducer from "../reducers/postReducer"
import userReducer from "../reducers/userReducer"

export default () => {
    const store = createStore(combineReducers({
        posts : postReducer,
        user : userReducer,
    }),applyMiddleware(thunk))
    return store
}