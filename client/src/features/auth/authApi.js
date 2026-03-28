import axiosInstance from "../../app/axios";

export const loginApi = (data) => {
  return axiosInstance.post("/auth/login", data);
};
