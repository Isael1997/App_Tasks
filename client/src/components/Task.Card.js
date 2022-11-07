import { useTasks } from '../context/TaskProvider.js'
import { useNavigate } from 'react-router-dom'

function TaskCard({ tasks }) {
    const { deleteTask, toggleTaskDone } = useTasks();
    const navigate = useNavigate();
    
    const handleDone = async () => {
        await toggleTaskDone(tasks.id);
    };

    return (
        <div>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
            <span>{tasks.createAt}</span>
            <button
                onClick={() => deleteTask(tasks.id)}>Delete</button>
            <button
                onClick={() => navigate(`edit/${tasks.id}`)}
            >Edit</button>
            <span>{tasks.done === 1 ? "️✅️" : "❌"}</span>
            <button onClick={() => handleDone(tasks.done)}>
                Done
            </button>
        </div>
    )
}

export default TaskCard;