import axios from "axios";
export const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_BASE_URL
    : process.env.NEXT_PUBLIC_PROD_BASE_URL;


export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
api.interceptors.response.use(
  (response) => {
    if (response.data.status === "failed") {
      return Promise.reject({ data: response.data, status: response.status });
    }
    return { data: response.data, status: response.status };
  },
  (error) => {
    return Promise.reject(
      error.message || "Something went wrong!"
    );
  }
);