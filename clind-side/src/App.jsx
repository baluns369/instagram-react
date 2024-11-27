import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './assets/components/home/Home'
import Login from './assets/components/login/Login'
import Nav from './assets/components/nav/Nav'
import Register from './assets/components/register/Register'
import Email from './assets/components/Email/Email'
import './App.css'
import Profile from './assets/components/profile/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Login' Component={Login}/>
        <Route path='/Register' Component={Register}/>
        <Route path='/Email' Component={Email}/>
        <Route path='/Profile' Component={Profile}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
