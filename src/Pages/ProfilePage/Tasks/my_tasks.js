import '../../../StyleSheets/create_acc2.css'
import '../../../StyleSheets/create_acc1.css';
import '../../../StyleSheets/my_data.css'
import '../../../StyleSheets/my_tasks.css'


const Tasks = (props) => {
    return (
        <div className='main-content-container-wrapper'>
            <div className='main-content-container'>
                <div className='header'>
                    <div className='tasks'>Задачи</div>
                    <div className='time_tasks time_day'>
                        <div className='time_day_text'>на день</div>
                    </div>
                    <div className='time_tasks time_month'>
                        <div className="time_month_text">на месяц</div>
                    </div>
                    <div className='time_tasks time_quartal'>
                        <div className='time_quarter_text'>на квартал</div>
                    </div>
                </div>
                <div className='tasks_rectangle'>
                    <div className='add'>
                        <div className='plus'>+</div>
                    </div>
                    <div className='add_task'>Добавить задачу</div>
                    <div className='any_task first_task'>
                        <div className='text_in_task first_task_text'>Отправить</div>
                    </div>
                    <div className='change_tick tick'></div>
                    <div className='change_tick change_text'>
                        {/*<img className="new_changes" src={Diamond}></img>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
