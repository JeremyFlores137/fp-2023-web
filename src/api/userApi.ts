import axios from 'axios';

const userApi = axios.create({
  baseURL: '/auth/api',
});

export default userApi;
