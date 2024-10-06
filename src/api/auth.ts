import axios from 'axios';

const endPoint = '/api/auth';

export const validateEmail = (email: string) => {
  return axios.post(`${endPoint}/${email}`);
};