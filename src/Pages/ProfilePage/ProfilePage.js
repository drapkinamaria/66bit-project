import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {Route, Routes, useNavigate} from "react-router-dom";
import Notifications from "./Notifications/my_notifications";
import Tasks from "./Tasks/my_tasks";
import Projects from "./Projects/my_projects";
import Management from "./Management/my_management";
import Data from "./Data/my_data";
import '../../StyleSheets/profile.css'

const ProfilePage = (props) => {
    // let navigate = useNavigate();
    // navigate('/profile/data');
    return (
        <div>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='data' element={<Data/>}/>
                <Route path='notifications' element={<Notifications/>}/>
                <Route path='tasks' element={<Tasks/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='management' element={<Management/>}/>
            </Routes>
        </div>
    )
}

export default ProfilePage;