import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoodieLanding from './Components/FoodieLandingPage'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<FoodieLanding />} />
    </Routes>
    </>
  )
}

export default App