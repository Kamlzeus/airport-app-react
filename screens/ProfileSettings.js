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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

const ProfileSettings = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  // Данные пользователя
  const [user, setUser] = useState({
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    countryCode: "+996",
    phone: "123456789",
    nationality: "Кыргызстан",
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
    Alert.alert("Сохранение", "Ваши изменения сохранены!", [{ text: "ОК" }]);
    navigation.goBack(); // Возвращаемся назад
  };

  // Функция выхода
  const handleLogout = () => {
    Alert.alert(
      "Выход",
      "Вы уверены, что хотите выйти?",
      [
        { text: "Отмена", style: "cancel" },
        {
          text: "Выйти",
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
        {/* Код страны */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Код страны</Text>
          <TextInput
            style={styles.input}
            value={user.countryCode}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange("countryCode", text)}
          />
        </View>

        {/* Телефон */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Мобильный телефон</Text>
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
          <Text style={styles.label}>Пароль</Text>
          <TextInput
            style={styles.input}
            value={user.password}
            secureTextEntry
            placeholder="Введите новый пароль"
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>

        {/* Гражданство */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Гражданство</Text>
          <TextInput
            style={styles.input}
            value={user.nationality}
            onChangeText={(text) => handleChange("nationality", text)}
          />
        </View>

        {/* Страна */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Страна</Text>
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
          <Text style={styles.buttonText}>Сохранить</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text style={styles.buttonText}>Выйти</Text>
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
