import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000' //az api base url
})

export const setAccessToken = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

export default api;