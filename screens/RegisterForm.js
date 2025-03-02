import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  return (
    <View>
      <TextInput
        placeholder={t("Имя")}
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput placeholder={t("Фамилия")} style={styles.input} />
      <TextInput placeholder={t("Электронная почта")} style={styles.input} />
      <TextInput placeholder={t("Код страны")} style={styles.input} />
      <TextInput placeholder={t("Мобильный телефон")} style={styles.input} />
      <TextInput
        placeholder={t("Пароль")}
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder={t("Повторите пароль")}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={onRegister} style={styles.buttonContainer}>
        <LinearGradient
          colors={["#00609E", "#00B9FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.registerButton}
        >
          <Text style={styles.buttonText}>{t("Зарегистрироваться")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: "100px",
  },
  buttonContainer: {
    borderRadius: 8,
    width: "100px",
  },
  registerButton: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RegisterForm;
