import { http } from "./client";


http.interceptors.request.use(request => {
    const accesTokent = localStorage.getItem('accesToken');
    if (accesTokent) {
        request.headers['Authorization'] = `Bearer ${accesTokent}`
    }
    return request
}, (error) => {
    return  Promise.reject(error)
})