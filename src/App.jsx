import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Work from './pages/Work'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agence' element={<Agence />} />
         <Route path='/Work' element={<Work/>} />


      </Routes>
    </div>
  )
}

export default App