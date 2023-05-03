import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './StyleSheets/profile.css'

import ProfilePage from "./Pages/ProfilePage/ProfilePage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/profile/*' element={<ProfilePage/>}/>
            </Routes>

        </BrowserRouter>

    )
}

export default App;
