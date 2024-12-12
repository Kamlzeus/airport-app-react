import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Имя"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput placeholder="Фамилия" style={styles.input} />
      <TextInput placeholder="Электронная почта" style={styles.input} />
      <TextInput placeholder="Код страны" style={styles.input} />
      <TextInput placeholder="Мобильный телефон" style={styles.input} />
      <TextInput
        placeholder="Пароль"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Повторите пароль"
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
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
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
