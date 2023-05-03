import '../../../StyleSheets/create_acc2.css'
import '../../../StyleSheets/create_acc1.css';

function Reg2() {
    return (

        <div>
            <div className='headers'>
                <div>
                    <text className='text text_style2 about_me'>О себе</text>
                </div>
                <div>
                    <text className='text text_style2 portfolio'>Портфолио</text>
                </div>
            </div>
            <div className='new_rectangles'>
                <div>
                    <div className='about_me_rectangle'></div>
                    <text className='text dotes'>...</text>
                    <button className='access_rectangle'></button>
                    <text className='text access'>кому доступно</text>
                    <text className='text access_people access_people_first'>только мне</text>
                    <text className='text access_people access_people_second'>только руководству</text>
                    <text className='text access_people access_people_third'>всем сотрудникам</text>
                    <div className='access_line first_line'></div>
                    <div className='access_line second_line'></div>
                    <div className='portfolio_rectangle'></div>
                    <div className='rectangles big_rectangle'></div>
                    <div className='rectangles small_rectangle'></div>

                </div>
            </div>
            <div className='bottom_menu'>
                <div>
                    <text className='back_next_save save'>сохранить</text>
                </div>
                <a href='1'>
                    <div>
                        <text className='back_next_save back'>назад</text>
                    </div>
                    <div className='arrow arrow_back'></div>
                    <div className='line line_back'></div>
                </a>

            </div>
        </div>
    );
}

export default Reg2;
