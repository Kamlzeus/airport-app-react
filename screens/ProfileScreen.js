import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext"; // Для работы с аутентификацией

const ProfileScreen = () => {
  const { user, logout } = useAuth(); // Доступ к информации о пользователе и функции выхода
  const [isEditing, setIsEditing] = useState(false); // Состояние редактирования
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(""); // Для пароля

  const handleSave = () => {
    // Здесь будет логика для сохранения изменений
    // Например, обновление данных в контексте или в базе данных
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{name || ""}</Text>
        <Ionicons name="person-circle-outline" size={100} color="gray" />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Имя</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          editable={isEditing}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
        />

        <Text style={styles.label}>Пароль</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          editable={isEditing}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonsSection}>
        {isEditing ? (
          <Button title="Сохранить" onPress={handleSave} />
        ) : (
          <Button
            title="Редактировать профиль"
            onPress={() => setIsEditing(true)}
          />
        )}
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#f4f4f8",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoSection: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    color: "gray",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  buttonsSection: {
    marginTop: 20,
  },
  logoutButton: {
    marginTop: 15,
    alignItems: "center",
  },
  logoutText: {
    color: "red",
    fontSize: 16,
  },
});

export default ProfileScreen;
