import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import {UserData} from './UserData'
import {Form} from './Form'


import axios from 'axios'
import { setUsers } from '../actions/users/usersActions'


export const UsersPage = () => {
    const dispatch = useDispatch();
   const {loading, error} = useSelector(state =>state.users)
   
  
    useEffect(() =>{
  dispatch(setUsers())
    },
      []);

      if (error) {
        return (
          <div className='app'>
            <h1>Ошибка запроса</h1>
          </div>
        )
      }




    return (
      <>
      <Form/>
      {loading? (
        <h1>Подождите, данные загружаются</h1>
      ) : (
        <UserData/> 
       
      )}
</>
    )


}