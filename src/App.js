import React from 'react'
import Showdb from './components/show/Showdb'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/create/Create'
import Edit from './components/edit/Edit'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/navbar/Navbar.jsx'


const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Showdb/>}/>
          <Route path='/crear' element={<Create/>}/>
          <Route path='/editar/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
