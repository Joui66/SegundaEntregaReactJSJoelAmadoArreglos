import React from 'react'
import Navbar from "./Components/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Cart from './Components/Cart';


export const App = () => {

  return (
    <BrowserRouter>
    
    <Navbar/>

    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Cart' element={<Cart/>}/>
    <Route exact path='/' element={<ItemListContainer/>}/>
    <Route exact path='/category/:id' element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>


    </Routes>
    
    
    </BrowserRouter>
  )
}
