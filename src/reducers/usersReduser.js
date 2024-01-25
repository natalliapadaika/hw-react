export const ADD_USERS = "users/addUsers";

export const DELETE_USERS = "users/deleteUsers";

export const SET_USERS_STARTED = "users/setUsersStarted";
export const SET_USERS_SACCESS = "users/setUsersSaccess";
export const SET_USERS_FAILURE = "users/setUsersFailure";

const initialState = {
  loading: false,
  users: [],
  error: null,
  
};

export const usersReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...store, users: [...store.users, action.payload] };

    case DELETE_USERS:
      return {
        ...store,
        users: store.users.filter((user) => user.id !== action.payload),
      };
    case SET_USERS_STARTED:
      return { ...store, 
        loading:true
    };
    case SET_USERS_SACCESS:
      return { ...store, 
        loading: false,
        error: null,
        users: action.payload,
        
     };
    case SET_USERS_FAILURE:
      return { ...store,
        loading: false,
        error: action.payload
       };

    default:
      return store;
  }
};
