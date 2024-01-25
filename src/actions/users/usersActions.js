import { SET_USERS_FAILURE, SET_USERS_SACCESS, SET_USERS_STARTED } from "../../reducers/usersReduser";
import axios from 'axios'

 const setUsersStarted = () => ({
    type: SET_USERS_STARTED
 })

 const setUsersSaccess = users => ({
type: SET_USERS_SACCESS,
payload: users
 })

 const setUsersFailure = error => ({
    type: SET_USERS_FAILURE,
    payload: error
 })

 export const setUsers = () => {
    return async dispatch => {
    // return dispatch => {
        dispatch(setUsersStarted());

        const apiUrl = "https://jsonplaceholder.typicode.com/users"

        try{
            const {data} = await axios.get(apiUrl)

            setTimeout(() =>{
                dispatch(setUsersSaccess(data))
            }, 2000)
        } catch (error) {
            dispatch(setUsersFailure(error.message))
        }
    //   axios.get(apiUrl)
    //   .then((resp)=>{
    //     setTimeout(()=>{
    //         dispatch(setUsersSaccess(resp.data))
    //     }, 2000)
       
    //   })
    //   .catch(err =>{
    //     dispatch(setUsersFailure(err))
    //   })
 }
}