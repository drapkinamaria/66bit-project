import '../../../StyleSheets/create_acc2.css'
import '../../../StyleSheets/create_acc1.css';
import '../../../StyleSheets/new_data.css'
import '../../../StyleSheets/data.css'
import * as funcs from '../../../client.js'
import Cookies from 'js-cookie'
import {useState, useEffect} from "react";


const Data = (props) => {
    const [appState, setAppState] = useState({
        user: null,
        birthDay: null
    });
    const id = Cookies.get('id');


    useEffect(() => {
        funcs.getUser(id)
            .then(user => {
                console.log(user);
                const birthDay = new Date(user.birthDay);
                setAppState({user: user, birthDay: birthDay})
            })
    }, []);


    return (
        <main className='main-part'>
            <div className='data_white_container'>
                <div className="profile-photo-wrapper">
                    <img className='profile-photo' alt='Profile photo'/>
                </div>
                <div className="user-text-data-wrapper">
                    <div className="data-content">
                        <div className="data-content-header">Фамилия</div>
                        <div className="profile-field">
                            {appState.user?.lastName || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">Имя</div>
                        <div className="profile-field">
                            {appState.user?.firstName || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">Отчество</div>
                        <div className="profile-field">
                            {appState.user?.patronymic || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">День рождения</div>
                        <div className="profile-field">
                            {`${appState.birthDay?.getDate()}.${appState.birthDay?.getMonth()}.${appState.birthDay?.getFullYear()}` || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">Должность</div>
                        <div className="profile-field">
                            {appState.user?.post || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">Пол</div>
                        <div className="profile-field"></div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">Почта</div>
                        <div className="profile-field">
                            {appState.user?.email || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">Телефон</div>
                        <div className="profile-field">
                            {appState.user?.phone || 'Unknown'}
                        </div>
                    </div>
                    <div className="data-content">
                        <div className="data-content-header">О себе</div>
                        <div className="container-about-me">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Data;