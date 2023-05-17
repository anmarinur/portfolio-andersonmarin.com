import { useState } from 'react'
import './App.css'
import { NavBar } from './assets/Components/NavBar'
import { Technologies } from './assets/Components/Technologies'
import { Profile } from './assets/Components/Profile'
import { Portfolio } from './assets/Components/Portfolio'
import { Contact } from './assets/Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Profile />
      <Technologies /> 
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
