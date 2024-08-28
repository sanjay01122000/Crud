import React from 'react'
import { useNavigate } from 'react-router-dom'

const PracticsContact = () => {
const navigate = useNavigate();

  return (
    <div>
      <h1>Hello I Am Contact Page</h1>
      <button onClick={() => navigate('/')}>Go To Home Page</button>
    </div>
  )
}

export default PracticsContact
