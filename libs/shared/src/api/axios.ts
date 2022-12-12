import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use((result) => {
  // TODO: May need to handle auth token here
  return result;
});

export const useAxios = () => instance;
