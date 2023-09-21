import '../../../StyleSheets/create_acc1.css';
import PersonalDataForm from "./form";

function Reg1() {
    return (
        <div>
            <div className="personal_data_container">
                <div>Персональные данные</div>
            </div>
            <PersonalDataForm />
            <div className=''>
                <a href='2'>
                    <div className=''>далее</div>
                    <div className='arrow arrow_next'>
                    </div>
                    <div className='line line_next'></div>
                </a>
            </div>
        </div>

    );
}

export default Reg1;
