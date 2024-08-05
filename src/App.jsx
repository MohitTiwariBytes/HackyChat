import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
