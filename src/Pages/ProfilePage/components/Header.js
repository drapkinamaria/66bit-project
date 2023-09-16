import React from 'react'
import { ReactComponent as Logo } from '../../../images/66bit.svg';

const Header = (props) => {
    return (
        <div className='profile-header'>
                <Logo/>
            <div className="profile-header-wrapper">
                <div className="circle"></div>
                <div>
                    <div className="header-text-left">Мария Драпкина</div>
                </div>
                <div>
                    <div className="header-text-left">Выйти</div>
                </div>
            </div>
        </div>
    )
}

export default Header;