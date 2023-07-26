import './App.css';
import React from 'react';
import Accounts from './Components/Accounts';
import Profile from './Components/Profile';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={ <Accounts></Accounts> }></Route>
    <Route path='/profile/:id' element={<Profile></Profile>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
