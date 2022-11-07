import {deleteTaskRequest} from '../api/Tasks.api.js'

function TaskCard({ tasks }) {

    const handleDelete = async (id) => {
        const response = await deleteTaskRequest(id);
        console.log(response)
    };
    return (
        <div>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
            <span>{tasks.done === 1 ? "️✅️" : "❌"}</span>
            <span>{tasks.createAt}</span>
            <button 
            onClick={() => handleDelete(tasks.id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default TaskCard;