import { useContext, useState } from 'react'
import { signin, signup } from '../api/Users.api.js';
import { UserContext } from './UserContext.js'

export const useUsers = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useTasks must be used within a TaskContextProvider");
    }
    return context;
};

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState([]);

    function Alert(data) {
        setTimeout(() => {
            alert(data);
        }, 500);
    }
    async function login(username, password, next) {
        try {
            const response = await signin(username, password)
            setToken(response.data)
            return response.data
        } catch (error) {
            console.log(error.response.data)
            Alert(error.response.data.message);
            next(false)
        }
    }

    async function register(data) {
        try {
            const response = await signup(data)
            setUsers(response)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <UserContext.Provider value={{ users, token, login, register }}>
            {children}
        </UserContext.Provider>
    )
}

