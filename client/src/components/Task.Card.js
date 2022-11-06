function TaskCard({ tasks }) {
    return (
        <div>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
            <span>{tasks.done == 1 ? "️✅️" : "❌"}</span>
        </div>
    )
}

export default TaskCard;