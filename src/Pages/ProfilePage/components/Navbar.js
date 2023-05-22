import React from 'react'
import '../../../StyleSheets/profile.css'


const Navbar = (props) => {
    return (
        <div className="profile-content-navbar" id='profile-content-navbar'>
            <a href='/profile/data' className='header-text-left'>
                Обо мне
            </a>
            <a href='/profile/notifications' className='header-text-left'>
                Обратная связь
            </a>
            <a href='/profile/tasks' className='header-text-left'>
                Задачи
            </a>
            <a href='/profile/projects' className='header-text-left'>
                Проекты
            </a>
            <a href='/profile/management' className='header-text-left'>
                Коллеги
            </a>
        </div>
    )
}

export default Navbar;
