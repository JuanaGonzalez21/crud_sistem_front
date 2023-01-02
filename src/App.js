import React from 'react'
import Showdb from './components/show/Showdb'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/create/Create'
import Edit from './components/edit/Edit'



const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
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
