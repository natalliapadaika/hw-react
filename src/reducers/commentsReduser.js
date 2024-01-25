export const ADD_COMMENT = "users/addComment";

const initialState = {
  comments: [],
};

export const commentsReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...store, comments: [...store.comments, action.payload] };
    default:
      return store;
  }
};
