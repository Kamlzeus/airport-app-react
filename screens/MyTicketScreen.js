import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

const MyTicketScreen = () => {
  const { t } = useTranslation(); // Подключаем перевод

  const flight = {
    airlineLogo:
      "https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1720244494",
    airlineName: "Turkish Airlines",
    ticketNumber: "Boeing 777",
    from: t("Манас (FRU)"),
    to: t("Стамбул (IST)"),
    departureTime: "10:30",
    departureDate: t("12 Марта"),
    arrivalTime: "14:50",
    arrivalDate: t("12 Марта"),
    duration: "4ч 20м",
    terminal: "1",
    gate: "B12",
    checkInDesk: "D3",
    exit: t("Выход") + ": Gate 5",
    status: t("Ожидается"),
  };

  return (
    <ImageBackground
      source={{
        uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
      }}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={["rgba(0, 150, 255, 0.5)", "rgba(255, 255, 255, 1)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.flightCard}>
            {/* Логотип + Название авиакомпании */}
            <View style={styles.airlineContainer}>
              <Image source={{ uri: flight.airlineLogo }} style={styles.logo} />
              <Text style={styles.airlineName}>{flight.airlineName}</Text>
            </View>

            {/* № Билета */}
            <Text style={styles.ticketNumber}>
              {t("№ билета")}: {flight.ticketNumber}
            </Text>

            {/* Линия-разделитель */}
            <View style={styles.separator} />

            {/* Маршрут */}
            <Text style={styles.routeText}>
              {flight.from}{" "}
              <Ionicons name="airplane-outline" size={20} color="black" />{" "}
              {flight.to}
            </Text>

            {/* Вылет и прилёт */}
            <View style={styles.flightInfoContainer}>
              <View style={[styles.flightBox, styles.darkBlueBox]}>
                <Text style={styles.boxTitle}>{t("Вылет")}</Text>
                <Text style={styles.boxText}>
                  {t("Время")}: {flight.departureTime}
                </Text>
                <Text style={styles.boxText}>
                  {t("Дата")}: {flight.departureDate}
                </Text>
              </View>
              <View style={[styles.flightBox, styles.blueBox]}>
                <Text style={styles.boxTitle}>{t("Прилёт")}</Text>
                <Text style={styles.boxText}>
                  {t("Время")}: {flight.arrivalTime}
                </Text>
                <Text style={styles.boxText}>
                  {t("Дата")}: {flight.arrivalDate}
                </Text>
              </View>
            </View>

            {/* Доп. информация */}
            <View style={styles.extraInfoContainer}>
              <View style={styles.extraInfoBox}>
                <Ionicons name="exit-outline" size={20} color="gray" />
                <Text style={styles.extraText}>{flight.exit}</Text>
              </View>
              <View style={styles.extraInfoBox}>
                <Ionicons name="clipboard-outline" size={20} color="gray" />
                <Text style={styles.extraText}>
                  {t("Стойка регистрации")}: {flight.checkInDesk}
                </Text>
              </View>
              <View style={styles.extraInfoBox}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="gray"
                />
                <Text style={styles.extraText}>
                  {t("Статус")}: {flight.status}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    alignItems: "center",
    width: "100%",
  },
  flightCard: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.82)", // Полупрозрачный белый фон
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 30,
  },
  airlineName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 40,
  },
  ticketNumber: {
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
    marginBottom: 10,
    textAlign: "center",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  routeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    marginBottom: 10,
  },
  flightInfoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  flightBox: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  darkBlueBox: {
    backgroundColor: "#003366",
    marginRight: 5,
  },
  blueBox: {
    backgroundColor: "#007AFF",
    marginLeft: 5,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  boxText: {
    fontSize: 14,
    color: "white",
    alignItems: "left",
  },
  extraInfoContainer: {
    width: "100%",
    marginTop: 15,
  },
  extraInfoBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  extraText: {
    fontSize: 16,
    marginLeft: 10,
    color: "gray",
  },
});

export default MyTicketScreen;
