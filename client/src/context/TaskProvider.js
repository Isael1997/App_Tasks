import { useContext, useState } from "react";
import { CreateTaskRequest, getTasksReguest, deleteTaskRequest } from "../api/Tasks.api.js";
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
        const response = await getTasksReguest();
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
    return (
        <TaskContext.Provider value={{ tasks, loadTasks, createTask, deleteTask }} >
            {children}
        </TaskContext.Provider>
    );
}

