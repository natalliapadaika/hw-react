import { ADD_COMMENT } from "../../reducers/commentsReduser"


export const addCom = (comment, id) => {
 


    return (dispatch, getState) => {
                dispatch({
            type: ADD_COMMENT,
            payload: {

                id: id,
                comment: comment
            }
        })
        console.log('state', getState()) 
    }
   
}; 

