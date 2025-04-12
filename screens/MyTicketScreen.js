import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import { usePurchasedTickets } from "../context/PurchasedTicketsContext";

const MyTicketScreen = () => {
  const { t } = useTranslation();
  const { tickets: purchasedTickets } = usePurchasedTickets();

  const defaultTicket = {
    airlineLogo:
      "https://companieslogo.com/img/orig/THYAO.IS-f22d40e8.png?t=1720244494",
    airlineName: "Turkish Airlines",
    ticketNumber: "Boeing 777",
    from: t("Манас (FRU)"),
    to: t("Стамбул (IST)"),
    duration: "4ч 20м",
    terminal: "1",
    gate: "B12",
    checkInDesk: "D3",
    exit: t("Выход") + ": Gate 5",
    status: t("Ожидается"),
    price: "250 USD",
    class: t("Эконом"),
    date: "2025-05-27 – 2025-06-13",
  };

  const displayedTickets = [defaultTicket, ...purchasedTickets];

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
        <ScrollView contentContainerStyle={styles.container}>
          {displayedTickets.map((flight, index) => (
            <View key={index} style={styles.flightCard}>
              <View style={styles.airlineContainer}>
                <Image
                  source={{ uri: flight.airlineLogo }}
                  style={styles.logo}
                />
                <Text style={styles.airlineName}>{flight.airlineName}</Text>
              </View>

              <Text style={styles.ticketNumber}>
                {t("№ билета")}: {flight.ticketNumber}
              </Text>

              <View style={styles.separator} />

              <Text style={styles.routeText}>
                {flight.from}{" "}
                <Ionicons name="airplane-outline" size={20} color="black" />{" "}
                {flight.to}
              </Text>

              <View style={styles.flightInfoContainer}>
                <View style={[styles.flightBox, styles.darkBlueBox]}>
                  <Text style={styles.boxTitle}>{t("Вылет")}</Text>
                  <Text style={styles.boxText}>
                    {t("Дата")}: {flight.date?.split("–")[0]}
                  </Text>
                </View>
                <View style={[styles.flightBox, styles.blueBox]}>
                  <Text style={styles.boxTitle}>{t("Прилёт")}</Text>
                  <Text style={styles.boxText}>
                    {t("Дата")}: {flight.date?.split("–")[1]}
                  </Text>
                </View>
              </View>

              <View style={styles.extraInfoContainer}>
                <View style={styles.extraInfoBox}>
                  <Ionicons name="cash-outline" size={20} color="gray" />
                  <Text style={styles.extraText}>
                    {t("Цена")}: {flight.price}
                  </Text>
                </View>
                <View style={styles.extraInfoBox}>
                  <Ionicons name="layers-outline" size={20} color="gray" />
                  <Text style={styles.extraText}>
                    {t("Класс")}: {flight.class}
                  </Text>
                </View>
                <View style={styles.extraInfoBox}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={20}
                    color="gray"
                  />
                  <Text style={styles.extraText}>
                    {t("Статус")}: {t("Ожидается")}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
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
  },
  container: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  flightCard: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.82)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
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
