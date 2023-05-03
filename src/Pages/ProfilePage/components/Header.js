import React from 'react'
import logo from "../../../images/66bit.png";
const Header = (props) => {
    return (
        <div className='profile-header'>
            <h1 className='text-style personal-account-title'>Личный кабинет</h1>
            <div className='logo-wrapper'>
                <img className='bit66-logo' src={logo} alt='66bit logo'/>
            </div>
            <div className='user-data-wrapper'>
                <div className='circle profile-image'></div>
                <div className="text_top name_surname">Мария Драпкина</div>
            </div>
        </div>
    )
}

export default Header;