import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://127.0.0.1:8000/"; // ⚠️ поменяй на свой IP, если с телефона

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Добавляем JWT токен автоматически ко всем запросам
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
