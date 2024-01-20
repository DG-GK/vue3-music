import axios from "axios";

const service = axios.create({
    baseURL: '/api',
    timeout: 10000,
    withCredentials: true
})

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return error
    }
)

export default service;