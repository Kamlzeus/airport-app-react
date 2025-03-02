import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";

const BookingScreen = ({ route }) => {
  const { t } = useTranslation();
  const { hotel } = route.params;
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleConfirmBooking = () => {
    if (!checkInDate || !checkOutDate) {
      Alert.alert(t("Ошибка", "Пожалуйста, выберите даты."));
      return;
    }

    Alert.alert(
      t("Бронирование подтверждено!"),
      t(
        `'Отель': ${hotel.name}\n'Дата заезда': ${checkInDate}\n'Дата выезда': ${checkOutDate}`
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t("Бронирование отеля")}</Text>
      <Text style={styles.hotelName}>{hotel.name}</Text>

      <TextInput
        placeholder={t("Дата заезда (например, 2024-12-01)")}
        value={checkInDate}
        onChangeText={setCheckInDate}
        style={styles.input}
      />
      <TextInput
        placeholder={t("Дата выезда (например, 2024-12-05)")}
        value={checkOutDate}
        onChangeText={setCheckOutDate}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmBooking}
      >
        <Text style={styles.confirmButtonText}>
          {t("Подтвердить бронирование")}
        </Text>
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
