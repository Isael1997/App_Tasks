import { useContext, useState } from "react";
import { Headers, CreateTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest, toggleTaskDoneRequest } from "../api/Tasks.api.js";
import { TaskContext } from '../context/TaskContext.js'

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error("useTasks must be used within a TaskContextProvider");
    }
    return context;
};

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    function Alert() {
        setTimeout(() => {
            alert("No tiene Permiso para entrar aqui");
        }, 500);
    }

    async function loadTasks(token) {
        try {
            const response = await getTasksRequest(token);
            setTasks(response.data);
        } catch (error) {
            console.log(error)
            if(error.response.data.message === "Unauthorized"){
                Alert()
            }
        }
        
    }

    const createTask = async (task, token) => {
        try {
            const response = await CreateTaskRequest(task, token);
            // setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error);
            if(error.response.data.message === "Unauthorized"){
                Alert()
            }
        }
    };

    const deleteTask = async (id, token) => {
        try {
            const response = await deleteTaskRequest(id, token);
            console.log(response)
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error(error);
            if(error.response.data.message === "Unauthorized"){
                Alert()
            }
        }
    };

    const updateTask = async (id, newTask, token) => {
        try {
            const response = await updateTaskRequest(id, newTask, token);
            console.log(response);
        } catch (error) {
            console.error(error);
            if(error.response.data.message === "Unauthorized"){
                Alert()
            }
        }
    };

    const getTask = async (id, token) => {
        try {
            const response = await getTaskRequest(id, token);
            return response.data;
        } catch (error) {
            console.error(error);
            if(error.response.data.message === "Unauthorized"){
                Alert()
            }
        }
    };

    const toggleTaskDone = async (id, token) => {
        try {
            const taskFound = tasks.find((task) => task.id === id);
            await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false, token);
            
                tasks.map((task) =>
                    task.id === id ? task.done = task.done === 0 ? 1: 0 : task.done
                )
            setTasks([...tasks])
        } catch (error) {
            console.error(error);
            if(error.response.data.message === "Unauthorized"){
                Alert()
            }
        }
    };
    return (
        <TaskContext.Provider value={{ tasks, loadTasks, getTask, createTask, deleteTask, updateTask, toggleTaskDone}} >
            {children}
        </TaskContext.Provider>
    );
}

