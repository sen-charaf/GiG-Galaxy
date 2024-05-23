import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    withCredentials: true,
})

export const requestInterceptor=(config) => {
    const token = localStorage.getItem('token');
    if (token){
        console.log("token kayna");
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

axiosClient.interceptors.request.use(requestInterceptor);

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401){
        //window.location.href = '/login';
        return error;
    }
    throw error;
})