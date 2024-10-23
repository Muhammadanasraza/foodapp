import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './auth/Auth'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Menu from './pages/Menu'
import AddToCArt from './pages/AddToCart'
import Procced from './pages/Procced'
import Dashboard from './Dashboard'
import AddItem from './pages/AddItem'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/auth'>
            <Route index element={<Auth />} />
            <Route path='login' element={<Login/>} />
            <Route path='signup' element={<SignUp />} />
          </Route>

          <Route path='/' element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/menu' element={<Menu />} />  */}
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path='/addtocart' element={<AddToCArt />} />
            <Route path='/procced' element={<Procced />} />
            <Route path='/additem' element={<AddItem />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
