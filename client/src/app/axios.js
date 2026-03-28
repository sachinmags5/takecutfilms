import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // e.g. https://your-backend.onrender.com/api
  withCredentials: true,
});

// Attach token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Optional: handle 401 globally
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/admin/login";
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
