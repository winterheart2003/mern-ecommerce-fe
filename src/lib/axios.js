import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : "https://mern-ecommerce-be-production.up.railway.app/api",
  withCredentials: true,
});

export default axiosInstance;
