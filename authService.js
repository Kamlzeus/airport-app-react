import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "http://192.168.68.109:8000/api";

export async function register(username, email, password) {
  const res = await axios.post(
    `${BASE_URL}/auth/register/`,
    {
      username,
      email,
      password,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return res.data;
}

export async function login(username, password) {
  console.log("🔐 ЛОГИН С ПАРОЛЕМ:", username, password);

  const res = await axios.post(
    `${BASE_URL}/token/`,
    {
      username,
      password,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log("✅ ОТВЕТ ОТ СЕРВЕРА:", res.data);

  const { access, refresh } = res.data;
  await AsyncStorage.setItem("accessToken", access);
  await AsyncStorage.setItem("refreshToken", refresh);

  return res.data;
}

export async function logout() {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
}
