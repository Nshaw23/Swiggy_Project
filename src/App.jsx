import React from 'react'
import './App.css'
import Home from './component/Home';
import Resturant from './component/Resturant'
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from './component/RestaurantMenu';
import SearchFood from './component/SearchFood';
import SecondaryHome from './component/SecondaryHome';
import { store } from './Stored/stores';
import { Provider } from 'react-redux';
import Checkout from './component/Checkout';


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route element={<SecondaryHome/>}>
        <Route path='/restaurant' element={<Resturant/>}></Route>
        <Route path='/city/kolkata/:id' element={<RestaurantMenu/>}></Route>
        <Route path='/city/kolkata/:id/search' element={<SearchFood/>}></Route>
        </Route>
        <Route path='/Checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
