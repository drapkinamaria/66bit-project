import '../../../StyleSheets/create_acc1.css';
import PersonalDataForm from "./form";

function Reg1() {
    return (
        <div>
            <div>
                <text className='text-style personal_data'>Персональные данные</text>
            </div>
            <PersonalDataForm />
            <div className=''>
                <a href='2'>
                    <div>
                        <text className=''>далее</text>
                    </div>
                    <div className='arrow arrow_next'>
                    </div>
                    <div className='line line_next'></div>
                </a>
            </div>
        </div>

    );
}

export default Reg1;
