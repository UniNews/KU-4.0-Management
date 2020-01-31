import instance from "@/axios/mainAxios.js";

export default {
  login(payload) {
    return instance.post(`/admin-token`, payload);
  }
}