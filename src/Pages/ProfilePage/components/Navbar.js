import React from 'react'


const Navbar = (props) => {
    return (
        <div className='navigation-bar' id='profile-content-navbar'>
            <a href='/profile/data' className='buttons ordinary-button button-my-data'>
                <h1 className='text-style button-text text-my-data'>
                    Обо мне
                </h1>
            </a>
            <a href='/profile/notifications' className='buttons ordinary-button button-my-notifications'>
                <h1 className='text-style button-text text-my-notifications'>
                    Обратная связь
                </h1>
            </a>
            <a href='/profile/tasks' className='buttons ordinary-button button-my-tasks'>
                <h1 className='text-style button-text text-my-tasks'>
                    Задачи
                </h1>
            </a>
            <a href='/profile/projects' className='buttons ordinary-button button-my-projects'>
                <h1 className='text-style button-text text-my-projects'>
                    Проекты
                </h1>
            </a>
            <a href='/profile/management' className='buttons ordinary-button button-my-management'>
                <h1 className='text-style button-text text-my-management'>
                    Коллеги
                </h1>
            </a>
        </div>
    )
}

export default Navbar;
