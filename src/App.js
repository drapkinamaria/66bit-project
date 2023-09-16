import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './StyleSheets/profile.css'

import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Reg from './Pages/SignUpPage/RegistrationPage'
import Login from './Pages/LoginPage/login'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login/*' element={<Login/>}></Route>
            </Routes>
            <Routes>
                <Route path='/registration/*' element={<Reg/>}></Route>
            </Routes>
            <Routes>
                <Route path='/profile/*' element={<ProfilePage/>}/>
            </Routes>

        </BrowserRouter>

    )
}

export default App;
