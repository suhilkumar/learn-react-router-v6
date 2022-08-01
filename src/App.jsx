import React from "react";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";

// import custom components
import NavBar from "./component/NavBar";

import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/contact'
import Post from "./component/pages/Post";
import Login from "./component/pages/login";
import Dashboard from "./component/pages/dashboard";

export default () => {
  let isLogged = true;

  return (
    <div>
      <h2>Learn Router</h2>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/post/:category' element={<Post/>} />
          <Route path='/post/:category/:id' element={<Post/>} />
          <Route path='/custom' element={
                                  <>
                                    <h1>this is Suhil</h1>
                                   <h2>This is a custom html</h2>
                                  </>}/>
          <Route path='*' element={<><h1>Error: 404</h1> <h3>Page Not Found</h3></>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dash" element={isLogged ? <Dashboard/> : <Navigate to='/login' replace />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}











