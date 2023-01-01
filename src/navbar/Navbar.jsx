import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Private from './private';
import Navlink from './Navlink';
import Signup from './Signup';
import Login from './Login';
import Update from './Update';
import Booknow from './Booknow';
import Admin from './Admin';
import Adminupdate from './Adminupdate';
import Buslist from './Buslist';

const Navbar = () => {
  return (
    <>
    <BrowserRouter>
    <Navlink/>
    <Routes>
       
        <Route element={<Private/>}>
        <Route  path="/"  element={<Home/>} />
        <Route path='/booknow' element={<Buslist/>}/>
        <Route path='/bookseat' element={<Booknow/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminupdate/:id' element={<Adminupdate/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navbar