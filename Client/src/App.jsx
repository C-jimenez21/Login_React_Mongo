import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}  />
        <Route path='/login' element={<SignIn/>}  />
        <Route path='/register' element={<SignUp/>}  />
        
        
        <Route path='/profile' element={<UserPage/>}  />
    </Routes>
    </BrowserRouter>
  )
}
