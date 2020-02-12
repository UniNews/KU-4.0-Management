import axios from "axios";
import { API_URL } from "@/config/environments.js";

const endpoint = "news";
const headerOption = { headers: { "Content-Type": "application/json" } };

export default {
  getAllNews: async () => {
    return await axios.get(`${API_URL}/${endpoint}`, headerOption);
  },
  getNewsById: async payload => {
    return await axios.get(`${API_URL}/${endpoint}/${payload.id}`, headerOption);
  },
  createNews: async payload => {
    return await axios.post(`${API_URL}/${endpoint}`, payload);
  },
  updateNewsById: async payload => {
    return await axios.put(
      `${API_URL}/${endpoint}/${payload.id}`,
      payload.data,
      headerOption
    );
  },
  deleteNewsById: async payload => {
    return await axios.delete(`${API_URL}/${endpoint}/${payload.id}`, headerOption);
  }
};
