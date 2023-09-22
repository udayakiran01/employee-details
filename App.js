import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate}from 'react-router-dom'
import Footerdep from './components/Footerdep';
import Headerdep from './components/Headerdep';
import Listdep from './components/Listdep';
import Adddep from './components/Adddep';
import Rd from './components/Rd';
import Main from './components/main';
import Edit from './components/Edit';
import Read from './components/Read';



function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Main/>}/>
    </Routes>
    <div>
      <Headerdep /> 
    <div className='container'>
      <Routes>
        <Route path="/Listdep" element={<Listdep/>}/>
        <Route path="/Adddep" element={<Adddep/>}/>
        <Route path="/Rd" element={<Rd/>}/>
        <Route path="/read/:id" element={<Read/>}/>
        <Route path="/Rd/:id" element={<Rd/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        
      </Routes>
      </div>
        <Footerdep />
      </div>
      
      </>
  );
}

export default App;
