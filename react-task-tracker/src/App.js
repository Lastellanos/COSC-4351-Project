import React from 'react';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import Register from './pages/Register';
import Error from './pages/Error';
import "./App.css";

import {Routes, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar";

function App () {
  return (
    < >
    <Navbar/>
    <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route exact path ="/reserve" element = {<Reserve/>}/>
      <Route exact path ="/register" element = {<Register/>}/>
      <Route element = {Error}/>
    </Routes>
      
    </>
  );
}


export default App;
