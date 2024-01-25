

import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { UsersPage } from './components/UsersPage'
import { UserPage } from './components/UserPage'



function App() {

   
  

  return (
    <div className='app'>
      <Routes> 
      <Route path="/" element={<Layout />}>
      <Route index element={<Home title="its HOME PAGE" />} />
      <Route path="users" element={<UsersPage/>}/>
      <Route path="users/:id" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    


    </div>
  )
}

export default App


  
