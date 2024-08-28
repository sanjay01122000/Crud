import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PracticsAbout from './PracticsAbout'
import PracticsContact from './PracticsContact'
import PracticsHome from './PracticsHome'

const PracticsRouters = () => {
  return (
    <div>
     
       <Routes>
        <Route path='/' element={ <PracticsHome /> } />
        <Route path='/about' element={ <PracticsAbout /> } />
        <Route path='/contact' element={ <PracticsContact /> } />
       </Routes>
     
    </div>
  )
}

export default PracticsRouters
