import '../../../StyleSheets/projects.css'
import '../../../StyleSheets/tasks.css'
import React from "react";

const Projects = (props) => {
    return (
        <main className='main-part'>
            <div className="task_selector_container">
                <div className="tasks_text">Проекты</div>
                <button className="choose_time">Текущие</button>
                <button className="choose_time">Планируемые</button>
                <button className="choose_time">Прошедшие</button>
            </div>
            <div className="data_white_container">

            </div>
        </main>
    );
}

export default Projects;
