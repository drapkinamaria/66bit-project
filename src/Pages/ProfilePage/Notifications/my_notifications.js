import '../../../StyleSheets/create_acc2.css'
import '../../../StyleSheets/create_acc1.css';
import '../../../StyleSheets/data.css'
import mail_pic from "../../../images/mail.png";
import strange from "../../../images/smth_str.png";
import "../../../StyleSheets/notifications.css"


const Notifications = (props) => {
    return (
        <div className='main-content-container-wrapper'>
            <div className="main-content-container">
                <div className="small_white_rectangle white_messages">
                    <div>
                        <img className="new_pic1" src={mail_pic}/>
                    </div>
                    <div>
                        <img className="new_pic2" src={strange}/>
                    </div>
                    <div className='text-style text_top change'>Редактировать</div>
                    <div className='text-style text_top change'>Сохранить</div>
                </div>
                <div className='big_white_rectangle'>
                    <div className='blue_button'>
                        <div className='inside_white_button'>
                            <div className='text-style button-text new_text_button'>написать отзыв</div>
                            <div className='text-style button-text sec_line_button'>о переменная</div>
                        </div>
                    </div>
                    <div className='write_announ_button write_loc'></div>
                    <div className='write_announ_button announce_loc'></div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
