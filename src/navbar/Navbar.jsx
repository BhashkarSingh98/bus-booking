import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Tourismm from './Tourism';
import Private from './private';
import Navlink from './Navlink';
import Signup from './Signup';
import Login from './Login';
import Addblog from './Addblog';
import Update from './Update';
import Booknow from './Booknow';

const Navbar = () => {
  return (
    <>
    <BrowserRouter>
    <Navlink/>
    <Routes>
       
        <Route element={<Private/>}>
        {/* <Route path='/' element={<Mainnavbar/>}> */}
        <Route  path="/"  element={<Home/>} />
        <Route path='/tourism' element={<Tourismm/>}/>
        <Route path='/booknow' element={<Booknow/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navbar