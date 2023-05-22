import '../../../StyleSheets/tasks.css'
import '../../../StyleSheets/profile.css'


const Tasks = (props) => {
    return (
        <div className='main-content-container-wrapper'>
            <div className="white-container">
                <div>Задачи</div>
                <button className="choose_time">на день</button>
                <button className="choose_time">на месяц</button>
                <button className="choose_time">на квартал</button>
            </div>
            <div className="white-container">
                <button className="add_task">+</button>
                <div>Добавить задачу</div>
            </div>
        </div>
    );
}

export default Tasks;
