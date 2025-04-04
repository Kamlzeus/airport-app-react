import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const ProfileSettings = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  const { t } = useTranslation();

  // Данные пользователя
  const [user, setUser] = useState({
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    name: t("Камиля Юсуфова"),
    email: "kamiyus@example.com",
    countryCode: "",
    phone: "+996222160806",
    nationality: "Казахстан",
    country: "Кыргызстан",
    password: "",
  });

  // Функция обновления значений в state
  const handleChange = (key, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  // Функция сохранения изменений
  const handleSave = () => {
    Alert.alert(t("Сохранение"), t("Ваши изменения сохранены!"), [
      { text: "ОК" },
    ]);
    navigation.goBack(); // Возвращаемся назад
  };

  // Функция выхода
  const handleLogout = () => {
    Alert.alert(
      t("Выход"),
      t("Вы уверены, что хотите выйти?"),
      [
        { text: t("Отмена"), style: "cancel" },
        {
          text: t("Выйти"),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Профиль */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      {/* Поля для редактирования */}
      <View style={styles.settingsContainer}>
        {/* Телефон */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("Мобильный телефон")}</Text>
          <TextInput
            style={styles.input}
            value={user.phone}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange("phone", text)}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={user.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>

        {/* Пароль */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("Пароль")}</Text>
          <TextInput
            style={styles.input}
            value={user.password}
            secureTextEntry
            placeholder={t("Введите новый пароль")}
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>

        {/* Гражданство */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("Гражданство")}</Text>
          <TextInput
            style={styles.input}
            value={user.nationality}
            onChangeText={(text) => handleChange("nationality", text)}
          />
        </View>

        {/* Страна */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("Страна")}</Text>
          <TextInput
            style={styles.input}
            value={user.country}
            onChangeText={(text) => handleChange("country", text)}
          />
        </View>
      </View>

      {/* Кнопки */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="save-outline" size={20} color="white" />
          <Text style={styles.buttonText}>{t("Сохранить")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text style={styles.buttonText}>{t("Выйти")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
  },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  userInfo: { flex: 1 },
  userName: { fontSize: 18, fontWeight: "bold" },
  userEmail: { fontSize: 14, color: "gray" },

  settingsContainer: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  saveButton: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ProfileSettings;
