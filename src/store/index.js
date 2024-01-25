import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { usersReducer } from '../reducers/usersReduser.js';
import {userReducer} from '../reducers/userReduser.js'
import { commentsReducer } from "../reducers/commentsReduser.js";
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'

const reducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    comments: commentsReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))