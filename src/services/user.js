import axios from "axios";
import { API_URL } from "@/config/environments.js";

const endpoint = "users";
const headerOption = { headers: { "Content-Type": "application/json" } };

export default {
  getAllUsers: async () => {
    return await axios.get(`${API_URL}/${endpoint}`, headerOption);
  },
  getUsersById: async payload => {
    return await axios.get(`${API_URL}/${endpoint}/${payload.id}`, headerOption);
  },
  createNewUsers: async payload => {
    return await axios.post(`${API_URL}/${endpoint}`, payload);
  },
  updateUsersById: async payload => {
    return await axios.put(
      `${API_URL}/${endpoint}/${payload.id}`,
      payload.data,
      headerOption
    );
  },
  deleteUsersById: async payload => {
    return await axios.delete(`${API_URL}/${endpoint}/${payload.id}`, headerOption);
  }
};
