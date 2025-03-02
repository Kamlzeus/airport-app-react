import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useTranslation } from "react-i18next";

const TicketsScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "Airline A",
      flight_code: "AA101",
      origin: "New York",
      destination: "Los Angeles",
      time: "14:30:00",
    },
    {
      id: 2,
      airline: "Airline B",
      flight_code: "BB202",
      origin: "Los Angeles",
      destination: "Chicago",
      time: "15:45:00",
    },
    {
      id: 3,
      airline: "Airline C",
      flight_code: "CC303",
      origin: "Chicago",
      destination: "Miami",
      time: "16:15:00",
    },
    {
      id: 4,
      airline: "Airline D",
      flight_code: "DD404",
      origin: "Houston",
      destination: "Boston",
      time: "17:20:00",
    },
    {
      id: 5,
      airline: "Airline E",
      flight_code: "EE505",
      origin: "Miami",
      destination: "Atlanta",
      time: "18:00:00",
    },
    {
      id: 6,
      airline: "Airline F",
      flight_code: "FF606",
      origin: "Seattle",
      destination: "San Francisco",
      time: "19:35:00",
    },
    {
      id: 7,
      airline: "Airline G",
      flight_code: "GG707",
      origin: "Boston",
      destination: "Denver",
      time: "20:10:00",
    },
    {
      id: 8,
      airline: "Airline H",
      flight_code: "HH808",
      origin: "San Francisco",
      destination: "Dallas",
      time: "21:55:00",
    },
  ]);

  const renderFlight = ({ item, index }) => (
    <View
      style={[
        styles.flightCard,
        index % 2 === 0 ? styles.evenRow : styles.oddRow,
      ]}
    >
      <Text style={styles.flightText}>
        {t("Авиалиния")}: {item.airline}
      </Text>
      <Text style={styles.flightText}>
        {t("Рейс")}: {item.flight_code}
      </Text>
      <Text style={styles.flightText}>
        {t("Откуда")}: {item.origin}
      </Text>
      <Text style={styles.flightText}>
        {t("Куда")}: {item.destination}
      </Text>
      <Text style={styles.flightText}>
        {t("Время")}: {item.time}
      </Text>

      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => handleBuyTicket(item)}
      >
        <Text style={styles.buyButtonText}>{t("Купить билет")}</Text>
      </TouchableOpacity>
    </View>
  );

  const handleBuyTicket = (flight) => {
    navigation.navigate("TicketPurchase", { purchasedFlight: flight });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "On Time":
        return styles.onTime;
      case "Delayed":
        return styles.delayed;
      case "Cancelled":
        return styles.cancelled;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t("Доступные билеты")}</Text>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFlight}
        contentContainerStyle={styles.listContainer}
      />
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
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  evenRow: {
    backgroundColor: "#fff",
  },
  oddRow: {
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingBottom: 20,
  },
  onTime: {
    color: "green",
  },
  delayed: {
    color: "orange",
  },
  cancelled: {
    color: "red",
  },
});

export default TicketsScreen;
