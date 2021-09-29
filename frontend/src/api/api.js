import axios from 'axios';

export const API = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'http://localhost:3001',
    responseType: 'json',
});

export const setAuthToken = (token) => {
    API.defaults.headers.common.Authorization = token;
};

export const baseURL = 'http://localhost:3001';

export default API;