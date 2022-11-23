import axios from 'axios'


export const getTasksRequest = async (token) => {
    return await axios.get("http://localhost:4000/tasks", {
        headers: {
            "x-access-token": token
        }
    })
}

export const getTaskRequest = async (id, token) => {
    return await axios.get(`http://localhost:4000/tasks/${id}`), {
        headers: {
            "x-access-token": token
        }
    }
}

export const CreateTaskRequest = async (task, token) => {
    return await axios.post("http://localhost:4000/tasks", task, {
        headers: {
            "x-access-token": token
        }
    })
}

export const deleteTaskRequest = async (id, token) => {
    console.log("id: ", id, "token ", token)
    return await axios.delete(`http://localhost:4000/tasks/${id}`), {
        headers: {
            "x-access-token": token
        }
    }
}

export const updateTaskRequest = async (id, newTask, token) => {
    return await axios.put(`http://localhost:4000/tasks/${id}`, newTask), {
        headers: {
            "x-access-token": token
        }
    }
}

export const toggleTaskDoneRequest = async (id, done, token) => {
    return await axios.put(`http://localhost:4000/tasks/${id}`, {done}, {
        headers: {
            "x-access-token": token
        }
    })
}