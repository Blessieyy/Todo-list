import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Todo from './Todo.jsx'





import './App.css'

function App() {
  

  

  return (
   
    <>
    
 
     <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login/>}/> 
        <Route path="/login" element ={<Login/>}/> 
        <Route path="/register" element ={<Register/>}/> 
        <Route path="/todo" element ={<Todo/>}/> 

      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
