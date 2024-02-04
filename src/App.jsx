import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';



function App() {


return (
  <div>
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage/>}/>    
        <Route path='/TestPage' element={<TestPage/>} />    
        {/* <Route path='/CreatePerson' element={<CreatePerson/>} />  
        <Route path='/AllEmployees' element={<Employees/>} /> */}
      </Route>
    </Routes>
  </div>
)

}

export default App;
