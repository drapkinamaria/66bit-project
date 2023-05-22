import React from 'react'
import { ReactComponent as Logo } from '../../../images/66bit.svg';

const Header = (props) => {
    return (
        <div className='profile-header'>
            <h1 className="personal-account">Личный кабинет</h1>
            <Logo/>
            <div className="profile-header-wrapper">
                <div className="circle"></div>
                <div className="header-text-left">Мария Драпкина</div>
                <div className="header-text-left">Выйти</div>
            </div>
        </div>
    )
}

export default Header;