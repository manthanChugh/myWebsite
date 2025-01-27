import { useState } from 'react';
import './App.css'

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Programming from "./pages/Programming"
import Tutoring from "./pages/Tutoring"
import Experimental from "./pages/Experimental"

import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return( 
    <body>
    <div className='navTop'>
    <Navbar/>
    </div>
        <div >
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Resume' element = {<Resume/>}/>
            <Route path='/Programming' element = {<Programming/>}/>
            <Route path='/Tutoring' element = {<Tutoring/>}/>
            <Route path='/Contact' element = {<Contact/>}/>
            <Route path='/Experimental' element = {<Experimental/>}/>
          </Routes>
        </div>
        </body>
    )
}

export default App
