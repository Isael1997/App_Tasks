import axios from 'axios'

export const signin = async (username, password) =>
    await axios.get(`http://localhost:4000/api/signin/${username}/${password}`)


export const signup = async (data) =>
    await axios.post("http://localhost:4000/api/signup", data)