import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Иконки для кнопок

export default function CallEmployeeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вызов сотрудника</Text>

      <Text style={styles.description}>
        Если вам нужна помощь, нажмите на кнопку ниже, и сотрудник немедленно с
        вами свяжется.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Сотрудник вызван")}
      >
        <Ionicons name="person-add" size={24} color="white" />
        <Text style={styles.buttonText}>Позвонить сотруднику</Text>
      </TouchableOpacity>

      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>Контактная информация</Text>
        <Text style={styles.contactDetails}>Телефон: +996 (XXX) XXX-XXX</Text>
        <Text style={styles.contactDetails}>Email: kairos@auca.kg</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
  contactInfo: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  contactDetails: {
    fontSize: 16,
    color: "#666",
  },
});
