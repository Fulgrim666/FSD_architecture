import axios from "axios";
import { CONFIG } from "../config";

export const http = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
        "Content-Type": 'application/json'
    }
})


http.interceptors.request.use(request => {
    const accesTokent = localStorage.getItem('accesToken');
    if (accesTokent) {
        request.headers['Authorization'] = `Bearer ${accesTokent}`
    }
    return request
}, (error) => {
    return  Promise.reject(error)
})