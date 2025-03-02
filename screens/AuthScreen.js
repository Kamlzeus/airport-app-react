import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../context/AuthContext";
import RegisterForm from "./RegisterForm";
import { useTranslation } from "react-i18next";

const AuthScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const { setIsLoggedIn } = useAuth();

  const handleLogin = () => {
    if (username && password) {
      const userData = {
        name: username,
        email: "example@example.com",
        phone: "+996 (222) 160-08-06",
      };

      setIsLoggedIn(true);
    } else {
      alert(t("Пожалуйста, введите имя пользователя и пароль."));
    }
  };

  const handleRegister = () => {
    alert(t("Пользователь зарегистрирован!"));
    setShowRegister(false);
  };

  return (
    <ImageBackground
      source={require("../assets/фон.jpg")}
      style={styles.container}
    >
      <LinearGradient
        colors={["rgba(0, 150, 255, 0.5)", "rgba(255, 255, 255, 1)"]}
        style={styles.gradient}
      >
        <View style={styles.innerContainer}>
          <ImageBackground
            source={require("../assets/Group.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>{t("Войти или зарегистрироваться")}</Text>

          {showRegister ? (
            <RegisterForm onRegister={handleRegister} />
          ) : (
            <View>
              <TextInput
                placeholder={t("Имя пользователя")}
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                placeholder={t("Пароль")}
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={handleLogin}
                style={styles.buttonContainer}
              >
                <LinearGradient
                  colors={["#00609E", "#00B9FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.loginButton}
                >
                  <Text style={styles.buttonText}>{t("Войти")}</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowRegister(true)}>
                <Text style={styles.switchText}>
                  {t("Не зарегистрированы? Создать аккаунт")}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: "100px",
  },
  buttonContainer: {
    borderRadius: 15,
    width: "100px",
  },
  loginButton: {
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  switchText: {
    marginTop: 10,
    color: "#2196F3",
    textAlign: "center",
  },
});

export default AuthScreen;
