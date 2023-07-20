import axios from 'axios';

const api = axios.create({
  baseURL: "https://node-deploy-puppy.onrender.com",
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);

const http = api;
export { http };
