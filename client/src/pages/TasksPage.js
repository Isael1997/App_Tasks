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

    return (
        <div>
            <h1>Tasks Pages</h1>
            {tasks.map(task => (
                <TaskCard tasks={task} key={task.id}/>                
            ))
            }
        </div>
    )
}

export default TasksPage;