import { SET_USER_STARTED, SET_USER_SACCESS, SET_USER_FAILURE } from "../../reducers/userReduser"
import axios from "axios"


const setUserStarted = () => ({
    type: SET_USER_STARTED
 })

 const setUserSaccess = user => ({
type: SET_USER_SACCESS,
payload: user
 })

 const setUserFailure = error => ({
    type: SET_USER_FAILURE,
    payload: error
 })



 export const setUser = (id) => {
   
    return async dispatch => {
      
        dispatch(setUserStarted());
        
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`

        try{
            const {data} = await axios.get(apiUrl)

            setTimeout(() =>{
                dispatch(setUserSaccess(data))
            }, 1000)
        } catch (error) {
            dispatch(setUserFailure(error.message))
        }
    
 }
}