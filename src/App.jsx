import { NavBar } from './assets/Components/NavBar'
import { Technologies } from './assets/Components/Technologies'
import { Profile } from './assets/Components/Profile'
import { Portfolio } from './assets/Components/Portfolio'
import { Contact } from './assets/Components/Contact'
import './App.css'
import { useSelector } from 'react-redux'

function App() {

  const language = useSelector((state) => state.lang.language)

  return (
    <>
      <NavBar />
      <Profile />
      <Technologies /> 
      <Portfolio />
      <Contact />
      <p className="app-p">Copyright © - {language ? " Developed by " : " Desarrollado por "}<span>Anderson Marín</span></p>
    </>
  )
}

export default App
