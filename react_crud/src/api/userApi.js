import axios from "axios"

export const userApi = axios.create({
    baseURL: "http://localhost:8000/users",
    // timeout: 1000,
    // headers: {
    //     "Accept": 'application/json'
    // }
})