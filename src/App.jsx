import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoodieLanding from './Components/FoodieLandingPage'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import FoodCard from './Pages/FoodCard'
import FoodList from './Pages/FoodList'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<FoodieLanding />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/foodcard' element={<FoodCard/>}/>
      <Route path='/foodlist' element={<FoodList />} />
    </Routes>
    </>
  )
}

export default App