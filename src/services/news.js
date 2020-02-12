import axios from "axios";
import { API_URL } from "@/config/environments.js";

const headerOption = { headers: { "Content-Type": "application/json" } };

export default {
  getAllNews: async () => {
    return await axios.get(`${API_URL}/news`, headerOption);
  },
  getNewsById: async payload => {
    return await axios.get(`${API_URL}/news/${payload.id}`, headerOption);
  },
  createNews: async payload => {
    return await axios.post(`${API_URL}/news`, payload);
  },
  updateNewsById: async payload => {
    return await axios.put(
      `${API_URL}/news/${payload.id}`,
      payload.data,
      headerOption
    );
  },
  deleteNewsById: async payload => {
    return await axios.delete(`${API_URL}/news/${payload.id}`, headerOption);
  }
};
