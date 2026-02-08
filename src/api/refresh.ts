import axios from "axios";

export const refreshApi = axios.create({
    baseURL: import.meta.env.VITE_REFRESH_URL,
    withCredentials: true,
})
