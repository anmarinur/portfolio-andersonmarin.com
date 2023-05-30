import { NavBar } from './assets/Components/NavBar'
import { Technologies } from './assets/Components/Technologies'
import { Profile } from './assets/Components/Profile'
import { Portfolio } from './assets/Components/Portfolio'
import { Contact } from './assets/Components/Contact'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Profile />
      <Technologies /> 
      <Portfolio />
      <Contact />
      <p className="app-p">Copyright © - Developed by Anderson Marín</p>
    </>
  )
}

export default App
