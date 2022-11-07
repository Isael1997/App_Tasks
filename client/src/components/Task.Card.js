import { useTasks } from '../context/TaskProvider.js'
import { useNavigate } from 'react-router-dom'

function TaskCard({ tasks }) {
    const { deleteTask } = useTasks();
    const navigate = useNavigate();


    return (
        <div>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
            <span>{tasks.done === 1 ? "️✅️" : "❌"}</span>
            <span>{tasks.createAt}</span>
            <button
                onClick={() => deleteTask(tasks.id)}>Delete</button>
            <button
                onClick={() => navigate(`edit/${tasks.id}`)}
            >Edit</button>
        </div>
    )
}

export default TaskCard;