import {useContext, useState} from 'react'
import { signin, signup } from '../api/Users.api.js';
import {UserContext} from './UserContext.js'

export const useUsers = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useTasks must be used within a TaskContextProvider");
    }
    return context;
};


export const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    
    async function login(data){
        try {
            const response = await signin(data)
        setUsers(response)
        } catch (error) {
            console.log(error)
        }
        
    }

    async function register(data){
        try {
            console.log("Data provider: ", data)
            const response = await signup(data)
        setUsers(response)
        } catch (error) {
            console.log(error)
        }
        
    }
return(
    <UserContext.Provider value={{users, login, register}}>
        {children}
    </UserContext.Provider>
)
}

