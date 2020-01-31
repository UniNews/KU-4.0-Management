import instance from "@/axios/axios.js";

const destination = "/users";

export default {
  getAllUsers() {
    return instance.get(`${destination}`);
  }
}