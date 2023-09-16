import React, { useEffect, useState } from 'react';
import '../../../StyleSheets/tasks.css'

const Tasks = (props) => {
    const initialTasks = [
        { id: 1, description: "Задача 1", tag: "на день", complexity: "Сложность 1", priority: "Приоритет 1" },
        { id: 2, description: "Задача 2", tag: "на квартал", complexity: "Сложность 2", priority: "Приоритет 2" },
        { id: 3, description: "Задача 3", tag: "на месяц", complexity: "Сложность 3", priority: "Приоритет 3" },
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [activeTag, setActiveTag] = useState(null);
    const [newTaskDescription, setNewTaskDescription] = useState("Новая задача");
    const [newTaskPriority, setNewTaskPriority] = useState("Приоритет 1")
    const [newTaskComplexity, setNewTaskComplexity] = useState("Сложность 1");

    useEffect(() => {
        // При инициализации компонента, показываем задачи на день
        displayTasks("на день");
    }, []);

    const displayTasks = (tag) => {
        const filtered = tasks.filter(task => task.tag === tag);
        setFilteredTasks(filtered);
        setActiveTag(tag); // Устанавливаем активный тег
    };

    const addTaskWithTag = () => {
        const newTask = { id: tasks.length + 1, description: newTaskDescription, priority: newTaskPriority,
            complexity: newTaskComplexity, tag: activeTag };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks.filter(task => task.tag === activeTag));
    };

    const removeTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks.filter(task => task.tag === activeTag));
    };

    return (
        <main className='main-part'>
            <div className="task_selector_container">
                <div className="tasks_text">Задачи</div>
                <button
                    className="choose_time"
                    onClick={() => displayTasks("на день")}
                    style={{
                        backgroundColor: activeTag === "на день" ? "#F86666" : "",
                        borderColor: activeTag === "на день" ? "#F86666" : ""
                    }}
                >
                    На день
                </button>
                <button
                    className="choose_time"
                    onClick={() => displayTasks("на месяц")}
                    style={{
                        backgroundColor: activeTag === "на месяц" ? "#F86666" : "",
                        borderColor: activeTag === "на месяц" ? "#F86666" : ""
                    }}
                >
                    На месяц
                </button>
                <button
                    className="choose_time"
                    onClick={() => displayTasks("на квартал")}
                    style={{
                        backgroundColor: activeTag === "на квартал" ? "#F86666" : "",
                        borderColor: activeTag === "на квартал" ? "#F86666" : ""
                    }}
                >
                    На квартал
                </button>
            </div>
            <div className="data_white_container">
                <div className="add_task_container">
                    <button className="add_task" onClick={addTaskWithTag}>+</button>
                    <div>Добавить задачу</div>
                </div>
                {filteredTasks.map((task) => (
                    <div key={task.id} className="task_item">
                        <div>
                            {task.description}
                            {task.priority}
                            {task.complexity}
                        </div>
                        <button className="remove_task" onClick={() => removeTask(task.id)}>Удалить</button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Tasks;
