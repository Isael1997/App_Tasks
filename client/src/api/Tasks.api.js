import axios from 'axios'

export const getTasksReguest = async () =>
    await axios.get("http://localhost:4000/tasks")

export const CreateTaskRequest = async (task) =>
    await  axios.post("http://localhost:4000/tasks", task)

export const deleteTaskRequest = async (id)=>
    await axios.delete(`http://localhost:4000/tasks/${id}`)
