import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/contact'
export default () => {
  return (
    <div>
      <h2>Learn Router</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/suhil' element={<h1>this is Suhil</h1>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
