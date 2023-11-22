import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Task from './pages/Task'
import Leaderboard from './pages/Leaderboard'

function App() {
  

  return (
    <>
      
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route  path='/home' element={<Home/>}/>
      <Route path='/task' element={<Task/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
    </Routes>
         
    </>
  )
}

export default App
