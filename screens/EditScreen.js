import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const EditScreen = () => {
  const navigation = useNavigation();

  // Состояния для полей профиля
  const [user, setUser] = useState({
    firstName: "Иван",
    lastName: "Петров",
    email: "ivan.petrov@example.com",
    countryCode: "+996",
    phone: "123456789",
    password: "",
    nationality: "Кыргызстан",
    country: "Кыргызстан",
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
    navigation.goBack(); // Возвращаемся на страницу настроек
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Редактировать профиль</Text>

      {/* Имя */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Имя</Text>
        <TextInput
          style={styles.input}
          value={user.firstName}
          onChangeText={(text) => handleChange("firstName", text)}
        />
      </View>

      {/* Фамилия */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Фамилия</Text>
        <TextInput
          style={styles.input}
          value={user.lastName}
          onChangeText={(text) => handleChange("lastName", text)}
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

      {/* Кнопки */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Ionicons name="save-outline" size={20} color="white" />
          <Text style={styles.buttonText}>Сохранить</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close-outline" size={20} color="white" />
          <Text style={styles.buttonText}>Отмена</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
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
  cancelButton: {
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

export default EditScreen;
