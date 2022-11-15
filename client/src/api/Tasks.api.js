import axios from 'axios'

export const getTasksRequest = async (token) =>{

    await axios.get("http://localhost:4000/tasks", {
        headers:{
            "x-access-token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2ODQ4MzY2MCwiZXhwIjoxNjY4NTcwMDYwfQ.hCEz4gkCMoSfCvpqaKWH-KuB9-5xVRsLPbd57nBrUq8'
        }
    })
}
export const getTaskRequest = async (id) =>
    await axios.get(`http://localhost:4000/tasks/${id}`)

export const CreateTaskRequest = async (task) =>
    await axios.post("http://localhost:4000/tasks", task)

export const deleteTaskRequest = async (id) =>
    await axios.delete(`http://localhost:4000/tasks/${id}`)

export const updateTaskRequest = async (id, newTask) =>
    await axios.put(`http://localhost:4000/tasks/${id}`, newTask);


export const toggleTaskDoneRequest = async (id, done) =>
    await axios.put(`http://localhost:4000/tasks/${id}`, {
        done,
    });