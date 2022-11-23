import { useTasks } from '../context/TaskProvider.js'
import { useNavigate } from 'react-router-dom'
import {useUsers} from '../context/UserProvider.js'

function TaskCard({ tasks }) {
    const { deleteTask, toggleTaskDone } = useTasks();
    const {token} = useUsers();
    const auth = token;
    const navigate = useNavigate();

    const handleDone = async () => {
        await toggleTaskDone(tasks.id, auth.token);
    };

    return (
        <div className="bg-zinc-700 text-white rounded-md p-4">
            <header className="flex justify-between">
                <h2 className="text-sm font-bold">{tasks.title}</h2>
                <span>{tasks.done === 1 ? "️✅️" : "❌"}</span>
            </header>
            <p>{tasks.description}</p>
            <span>{tasks.createAt}</span>
            <div className="flex gap-x-1">
                <button
                    className="bg-slate-300 px-2 py-1 text-black"
                    onClick={() => deleteTask(tasks.id, auth.token)}>Delete
                </button>
                <button
                    className="bg-slate-300 px-2 py-1 text-black"
                    onClick={() => navigate(`edit/${tasks.id}`)}
                >Edit
                </button>
                <button
                    className="bg-slate-300 px-2 py-1 text-black"
                    onClick={() => handleDone(tasks.done)}
                >Done
                </button>
            </div>
        </div>
    )
}

export default TaskCard;