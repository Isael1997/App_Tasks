import { useEffect } from 'react'
import TaskCard from '../components/Task.Card.js';
import {useTasks} from '../context/TaskProvider.js'

function TasksPage() {
    const { tasks, loadTasks } = useTasks();

    useEffect(() => {
        loadTasks();
    }, []);

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