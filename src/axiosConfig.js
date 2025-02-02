import axios from "axios";

const api = axios.create({
    baseURL: "https://assignment3-backend-delta.vercel.app",
});

export default api;
