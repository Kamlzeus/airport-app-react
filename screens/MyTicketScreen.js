import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

export default function MyTicketScreen() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = () => {
      setTicket({
        flightNumber: "MS123",
        departureTime: "2024-11-30 15:30",
        arrivalTime: "2024-11-30 17:45",
        departureAirport: t("Манас Международный Аэропорт"),
        arrivalAirport: t("Шереметьево"),
        gate: "A5",
        seat: "12A",
      });
    };

    fetchTicket();
  }, []);

  if (!ticket) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>
          {t("Загружаем информацию о билете...")}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.ticketCard}>
        <Text style={styles.cardTitle}>{t("Информация о рейсе")}</Text>

        <View style={styles.ticketInfo}>
          <Text style={styles.label}>{t("Номер рейса")}:</Text>
          <Text style={styles.info}>{ticket.flightNumber}</Text>

          <Text style={styles.label}>{t("Дата и время вылета")}:</Text>
          <Text style={styles.info}>{ticket.departureTime}</Text>

          <Text style={styles.label}>{t("Дата и время прилета")}:</Text>
          <Text style={styles.info}>{ticket.arrivalTime}</Text>

          <Text style={styles.label}>{t("Аэропорт вылета")}:</Text>
          <Text style={styles.info}>{ticket.departureAirport}</Text>

          <Text style={styles.label}>{t("Аэропорт прилета")}:</Text>
          <Text style={styles.info}>{ticket.arrivalAirport}</Text>

          <Text style={styles.label}>{t("Выход")}:</Text>
          <Text style={styles.info}>{ticket.gate}</Text>

          <Text style={styles.label}>{t("Место")}:</Text>
          <Text style={styles.info}>{ticket.seat}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(t("Билет отменен"))}
        >
          <Text style={styles.buttonText}>{t("Отменить билет")}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 50, // Уменьшили отступ сверху для заголовка
    marginTop: 50, // Добавлен небольшой отступ сверху
    textAlign: "center",
    color: "#333",
  },
  ticketCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  ticketInfo: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginVertical: 5,
  },
  info: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30, // Отступ для кнопки
    alignItems: "center", // Выравнивание кнопки по центру
  },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 15,
    borderRadius: 12,
    width: "80%", // Ширина кнопки
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
});
