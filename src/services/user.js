import axios from 'axios';
import { API_URL } from "@/config/environments.js";

export default {
    login: async (username, password) => {
        const json = {
            grant_type: 'password',
            username: username,
            password: password
        }
        return await axios.post(`${API_URL}/admin-token`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}