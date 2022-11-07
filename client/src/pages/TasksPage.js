import { useEffect, useState } from 'react'
import { getTasksReguest } from '../api/Tasks.api.js'
import TaskCard from '../components/Task.Card.js';


function TasksPage() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const response = await getTasksReguest();
            console.log(response)
            setTasks(response.data)
            console.log(tasks)
        }
        loadTasks();
    }, [])

    function renderMain() {
        if (tasks.length === 0) return <h1>No tasks yet</h1>;
        return tasks.map(task => (
            <TaskCard tasks={task} key={task.id} />
        ));
    }

    return (
        <div>
            <h1>Tasks Pages</h1>
            {renderMain()}
        </div>
    )
}

export default TasksPage;