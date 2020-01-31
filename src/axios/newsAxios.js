import instance from "@/axios/mainAxios.js";

const destination = "/news";

export default {
  getAllNews() {
    return instance.get(`${destination}`);
  },
  createNews(payload) {
    return instance.post(`${destination}`, payload);
  },
  getNewsById(payload) {
    return instance.get(`${destination}/${payload.id}`);
  },
  updateNewsById(payload) {
    return instance.put(`${destination}/${payload.id}`, payload.data);
  },
  deleteNewsById(payload) {
    return instance.delete(`${destination}/${payload.id}`);
  }
}