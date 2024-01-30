import { useState, useEffect } from 'react'
import {UserData} from './components/UserData'
import {Form} from './components/Form'
import { useDispatch } from 'react-redux'
// import { SET_USERS } from './reducers/usersReduser'
import axios from 'axios'

import './App.css'
import { setUsers } from './actions/users/usersAction'

function App() {
  const dispatch = useDispatch();
   
  const [appState, setAppState] = useState (false)

  useEffect(() =>{
    setAppState(true);
    // const apiUrl = "https://jsonplaceholder.typicode.com/users"
    // axios.get(apiUrl).then((resp)=>{
    //   const allPersons = resp.data;
      setAppState(false)
    //   dispatch({type: SET_USERS, payload: allPersons})
    dispatch(setUsers())
    // });
  },
    []
  )

  return (
    <div className='app'>
      <Form/>
      {appState? (
        <h1>Подождите, данные загружаются</h1>
      ) : (
        <UserData/>
      )}


    </div>
  )
}

export default App
