import {combineReducers, legacy_createStore as createStore} from 'redux';
import { cashReducer } from './cashReducer';
import { usersReducer } from './usersReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cash: cashReducer,
    user: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools());