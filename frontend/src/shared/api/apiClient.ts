import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

const getAuthToken = (): string | null => {
  try {
    const token = localStorage.getItem("auth-token");
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.error("Error parsing auth token from localStorage:", error);
    return null;
  }
};

apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
