export const SET_USER_STARTED = "user/setUserStarted";
export const SET_USER_SACCESS = "user/setUserSaccess";
export const SET_USER_FAILURE = "user/setUserFailure";

const initialState = {
  loading: false,
  user: [],
  error: null,
  
};

export const userReducer = (store = initialState, action) => {
  switch (action.type) {
    
    case SET_USER_STARTED:
      return { ...store, 
        loading:true
    };
    case SET_USER_SACCESS:
      return { ...store, 
        loading: false,
        error: null,
        user: action.payload,
        
     };
    case SET_USER_FAILURE:
      return { ...store,
        loading: false,
        error: action.payload
       };

    default:
      return store;
  }
};
