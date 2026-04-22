import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const api = {
  generate: async (topic) => {
    const response = await axios.post(`${API_BASE_URL}/api/generate`, { topic });
    return response.data;
  }
};
