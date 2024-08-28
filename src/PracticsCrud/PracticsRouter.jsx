import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PracticsCrud from './PracticsCrud'
import PracticsAddBtn from './PracticsAddBtn'
import PracticsEditBtn from './PracticsEditBtn'


const PracticsRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <PracticsCrud /> } />
        <Route path='/practicsaddbtn' element = { <PracticsAddBtn /> } />
        <Route path='/practicseditbtn/:id' element = { <PracticsEditBtn /> } />
      </Routes>
    </div>
  )
}

export default PracticsRouter
