import { useEffect } from 'react'
import { Authlogin } from '../auth/auth.login.js';
import TaskCard from '../components/Task.Card.js';
import { useTasks } from '../context/TaskProvider.js'
import {useUsers} from '../context/UserProvider.js'

function TasksPage() {
    const { tasks, loadTasks } = useTasks();
    const {token} = useUsers();
    console.log("take page: ", token)
    const auth = Authlogin(token)
    console.log(auth.token)
    useEffect(() => {
        loadTasks(auth.token);
    }, []);

    function renderMain() {
        if (tasks.length === 0) return <h1>No tasks yet</h1>;
        return tasks.map(task => (
            <TaskCard tasks={task} key={task.id} />
        ));
    }

    return (
        <div>
            <h1 className="text-5xl text-white font-bold text-center my-8">Tasks Pages</h1>
            <div className="grid grid-cols-3 gap-2">
                {renderMain()}
            </div>
        </div>
    )
}

export default TasksPage;