import '../../StyleSheets/App.css';
import backgroundImage from '../../images/background.png'
import logo from '../../images/66bit.png'
import git from '../../images/git.png'

function Login() {
    return (
        <section className="new_background"
                 style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div>
                <img className="bit66" src={logo}></img>
            </div>
            <div>
                <div className="white_rectangle">
                    <div>
                        <text className='text_style_app account_text'>
                            Вход в личный кабинет
                        </text>
                    </div>
                    <div>
                        <input type="text" className="field_login_password login text_style_app" value="Введите логин"/>
                    </div>
                    <div>
                        <input type="text" className="field_login_password password text_style_app" value="Введите пароль"/>
                    </div>
                    <div>
                        <button className="button_logingit">
                            <text className="text_style_app text_button">
                                <img className="git" src={git}></img>
                                Войти с помощью гита
                            </text>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
