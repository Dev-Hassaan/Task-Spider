import { useState } from 'react'

import Form from 'react-bootstrap/Form';
import TodoList from './Components/TodoList';
import './App.css'

function App() {
  

  return (
    <>
    <div style={{ minHeight: "100vh", minWidth:"100vw", background:'#031633',color:'white' }}>
      <TodoList/>
    </div>
     
       
    </>
  )
}

export default App
