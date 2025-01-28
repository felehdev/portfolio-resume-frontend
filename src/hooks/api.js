import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;
