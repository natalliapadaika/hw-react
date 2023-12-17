import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todolist } from './components/form'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="App-main">
        <Todolist />
       
      </div>
      
    </>
  )
}

export default App
