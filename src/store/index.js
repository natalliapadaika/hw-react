import {configureStore} from '@reduxjs/toolkit'
import {usersReducer} from '../reducers/usersReduser'




export const store = configureStore({
    reducer: {
        users: usersReducer
    }

})