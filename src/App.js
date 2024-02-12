
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Admin from './Pages/Admin';
import AddProduct from './Pages/AddProduct'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/addProduct' element={<AddProduct/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
