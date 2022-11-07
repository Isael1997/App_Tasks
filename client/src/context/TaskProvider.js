import { useContext, useState } from "react";
import { CreateTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/Tasks.api.js";
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

    async function loadTasks() {
        const response = await getTasksRequest();
        setTasks(response.data);
    }

    const createTask = async (task) => {
        try {
            await CreateTaskRequest(task);
            // setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const response = await deleteTaskRequest(id);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const updateTask = async (id, newTask) => {
        try {
            const response = await updateTaskRequest(id, newTask);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <TaskContext.Provider value={{ tasks, loadTasks, getTask, createTask, deleteTask, updateTask }} >
            {children}
        </TaskContext.Provider>
    );
}
