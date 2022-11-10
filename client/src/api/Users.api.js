import axios from 'axios'

export const signin = async (data) =>
    await axios.post("http://localhost:4000/api/signin", data)
