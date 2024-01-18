export const SET_USERS = 'SET_USERS'
export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';

const initialState = {
    users:[],
};

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state,
                 users:action.payload};
        case ADD_USER:
            return {...state, 
                users: [...state.users, action.payload]};
            case DEL_USER:
                return{...state,
                     users: state.users.filter(user => user.id !== action.payload)};
            default:
                return state;    
    }
}