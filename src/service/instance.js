import axios from "axios";

export const instance = axios.create({
  baseURL: "API HERE",
});

instance.interceptors.response.use(function (response) {
  return response.data;
});
