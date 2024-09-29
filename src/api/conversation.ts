import axios from 'axios';

const API_URL = process.env.REACT_APP_API_HOST;

export const getConversation = () => {
  return axios.get(`${API_URL}/conversation`);
};

export const sendMessage = (message: string) => {
  return axios.post(`${API_URL}/conversation`, { "message": message });
};

export const deleteConversation = () => {
  return axios.delete(`${API_URL}/conversation`);
};
