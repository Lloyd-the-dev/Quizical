import { useState } from 'react'
import './App.scss'
import Landing from '../components/Landing'
import Login from '../components/Login'
import Signup from '../components/signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Landing/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App
