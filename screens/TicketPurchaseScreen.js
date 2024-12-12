import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const TicketPurchaseScreen = ({ route, navigation }) => {
  const { purchasedFlight } = route.params; // Получаем данные рейса

  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchase = () => {
    setIsPurchasing(true);

    // Имитация процесса покупки
    setTimeout(() => {
      setIsPurchasing(false);
      Alert.alert("Успех", "Ваш билет успешно куплен!");
      navigation.navigate("Главная"); // Переход на страницу профиля после покупки
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Подтверждение покупки билета</Text>
      <View style={styles.flightCard}>
        <Text style={styles.flightText}>
          Авиалиния: {purchasedFlight.airline}
        </Text>
        <Text style={styles.flightText}>
          Рейс: {purchasedFlight.flightNumber}
        </Text>
        <Text style={styles.flightText}>Откуда: {purchasedFlight.origin}</Text>
        <Text style={styles.flightText}>
          Куда: {purchasedFlight.destination}
        </Text>
        <Text style={styles.flightText}>Дата: {purchasedFlight.date}</Text>
        <Text style={styles.flightText}>Время: {purchasedFlight.time}</Text>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={handlePurchase}
        disabled={isPurchasing}
      >
        <Text style={styles.buyButtonText}>
          {isPurchasing ? "Покупка..." : "Купить билет"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  flightCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  flightText: {
    fontSize: 16,
    marginBottom: 4,
  },
  buyButton: {
    backgroundColor: "#007AFF",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TicketPurchaseScreen;
