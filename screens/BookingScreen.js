import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";

const BookingScreen = ({ route }) => {
  const { hotel } = route.params;
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleConfirmBooking = () => {
    if (!checkInDate || !checkOutDate) {
      Alert.alert("Ошибка", "Пожалуйста, выберите даты.");
      return;
    }

    Alert.alert(
      "Бронирование подтверждено!",
      `Отель: ${hotel.name}\nДата заезда: ${checkInDate}\nДата выезда: ${checkOutDate}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Бронирование отеля</Text>
      <Text style={styles.hotelName}>{hotel.name}</Text>

      <TextInput
        placeholder="Дата заезда (например, 2024-12-01)"
        value={checkInDate}
        onChangeText={setCheckInDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Дата выезда (например, 2024-12-05)"
        value={checkOutDate}
        onChangeText={setCheckOutDate}
        style={styles.input}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
        <Text style={styles.confirmButtonText}>Подтвердить бронирование</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BookingScreen;
