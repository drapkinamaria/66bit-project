import '../../StyleSheets/login.css';
import logo from '../../images/66bit.svg'

function Login() {
    return (
        <div className="centered_container">
            <img src={logo}></img>
            <div className="login_form">
                <h2>
                    Вход в личный кабинет
                </h2>
                <div className="input_container">
                    <label htmlFor="username" className="label_text">Логин</label>
                    <input
                        type="text"
                        id="username"
                        className="input_form"
                        placeholder="Введите логин"
                    />
                </div>
                <div className="input_container">
                    <label htmlFor="password" className="label_text">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        className="input_form"
                        placeholder="Введите пароль"
                    />
                </div>
                <button className="button_login">Войти</button>
            </div>
        </div>
    );
}

export default Login;
