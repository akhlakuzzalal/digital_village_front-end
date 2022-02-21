import axios from 'axios';
const BASE_URI = 'http://localhost:5000';

export default axios.create({
  baseURL: BASE_URI,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URI,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
