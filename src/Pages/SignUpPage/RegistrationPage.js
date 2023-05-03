import React from "react";
import {Route, Routes} from "react-router-dom";
import Reg1 from "./FirstPage/create_acc1";
import Reg2 from "./SecondPage/create_acc2";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const RegistrationPage = (props) => {
    return (
        <div className="background">
            <Header/>
            <Navbar/>
            <div className="blue_rectangle">
                <Routes>
                    <Route path='1' element={<Reg1/>}/>
                    <Route path='2' element={<Reg2/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default RegistrationPage;