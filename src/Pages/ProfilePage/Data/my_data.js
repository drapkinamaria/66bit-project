import '../../../StyleSheets/create_acc2.css'
import '../../../StyleSheets/create_acc1.css';
import '../../../StyleSheets/new_data.css'
import '../../../StyleSheets/my_data.css'
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
        <div className='main-content-container-wrapper'>
            <div className="main-content-container user-data">
                <div className='profile-photo-wrapper'>
                    <img className='profile-photo' alt='Profile photo'/>
                </div>
                <div className='user-text-data-wrappers'>
                    <div className='user-text-data-wrapper surname-wrapper'>
                        <h1 className='text-style text_top data-title'>Фамилия</h1>
                        <div className='data-rec surname-container'>
                            <h1 className='text-style button-text'>{appState.user?.lastName || 'Unknown'}</h1>
                        </div>
                    </div>
                    <div className='user-text-data-wrapper first-name-wrapper'>
                        <h1 className='text-style text_top data-title'>Имя</h1>
                        <div className='data-rec first-name-container'>
                            <h1 className='text-style button-text'>{appState.user?.firstName || 'Unknown'}</h1>
                        </div>
                    </div>
                    <div className='user-text-data-wrapper patronymic-wrapper'>
                        <h1 className='text-style text_top data-title'>Отчество</h1>
                        <div className='data-rec patronymic-container'>
                            <h1 className='text-style button-text'>{appState.user?.patronymic || 'Unknown'}</h1>
                        </div>
                    </div>
                    <div className='user-text-data-wrapper birthday-wrapper'>
                        <h1 className='text-style text_top data-title'>Дата рождения</h1>
                        <div className='data-rec birthday-container'>
                            <h1 className='text-style button-text'>
                                {`${appState.birthDay?.getDate()}.${appState.birthDay?.getMonth()}.${appState.birthDay?.getFullYear()}` || 'Unknown'}
                            </h1>
                        </div>
                    </div>
                    <div className='user-text-data-wrapper email-wrapper'>
                        <h1 className='text-style text_top data-title'>Почта</h1>
                        <div className='data-rec email-container'>
                            <h1 className='text-style button-text'>{appState.user?.email || 'Unknown'}</h1>
                        </div>
                    </div>
                    <div className='user-text-data-wrapper phone-wrapper'>
                        <h1 className='text-style text_top data-title'>Телефон</h1>
                        <div className='data-rec phone-container'>
                            <h1 className='text-style button-text'>{appState.user?.phone || 'Unknown'}</h1>
                        </div>
                    </div>
                    <div className='user-text-data-wrapper position-wrapper'>
                        <h1 className='text-style text_top data-title'>Должность</h1>
                        <div className='data-rec position-container'>
                            <h1 className='text-style button-text'>{appState.user?.post || 'Unknown'}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;