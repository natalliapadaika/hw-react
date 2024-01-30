// export const ADD_USERS = 'users/addUsers'
// export const SET_USERS = 'users/setUsers'
// export const DELETE_USERS = 'users/deleteUsers'

import { createSlice } from '@reduxjs/toolkit'
import { setUsers } from '../actions/users/usersAction'

const initialState = {
    loading: false,
    users: [],
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => ({
            ...state,
            users: [...state.users, action.payload]
        }),
        deleteUser: (state, action) => ({
            ...state,
            users: state.users.filter(user=>user.id!==action.payload)
        })
    },
    extraReducers: builder =>{
        builder.addCase(setUsers.fulfilled, (state, action) => ({
          ...state,
          loading: false,
          error: null,
          users: action.payload  
        }))
        builder.addCase(setUsers.pending, (state) =>({
            ...state,
            loading: true
        }))
        builder.addCase(setUsers.rejected, (state, action)=>({
            ...state,
            loading: false,
            error: action.payload

        }))
    }
})

const {actions, reducer} = usersSlice

export const {addUser, deleteUser} = actions

export const usersReducer = reducer

// export default reducer

// export const usersReducer = (store = initialState, action) => {
//     switch (action.type) {
//         case ADD_USERS:
//             return{...store, users:[...store.users, action.payload]}
//     case SET_USERS:
//         return {...store, users:action.payload}
//         case DELETE_USERS: 
//         return {...store, users:store.users.filter(user =>user.id !== action.payload)}
//     default:
//         return store    
//     }
// }