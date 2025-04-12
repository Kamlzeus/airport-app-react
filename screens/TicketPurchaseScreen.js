import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { useTranslation } from "react-i18next";
import { LinearGradient } from "expo-linear-gradient";
import { usePurchasedTickets } from "../context/PurchasedTicketsContext";
const airlines = [
  {
    name: "Asman Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Airplane_silhouette.png",
  },
  {
    name: "Eurasia Jet",
    logo: "https://cdn-icons-png.flaticon.com/512/69/69981.png",
  },
  {
    name: "SkyKyrgyz",
    logo: "https://cdn-icons-png.flaticon.com/512/147/147258.png",
  },
  {
    name: "Nomad Wings",
    logo: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
  },
  {
    name: "Silk Route Air",
    logo: "https://cdn-icons-png.flaticon.com/512/484/484167.png",
  },
];

const TicketPurchaseScreen = ({ route, navigation }) => {
  const { purchasedFlight } = route.params;
  const { t } = useTranslation();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const { addTicket } = usePurchasedTickets(); // 👈

  const handlePurchase = () => {
    setIsPurchasing(true);

    setTimeout(() => {
      const randomAirline =
        airlines[Math.floor(Math.random() * airlines.length)];
      const newTicket = {
        ...purchasedFlight,
        airlineName: randomAirline.name,
        airlineLogo: randomAirline.logo,
        ticketNumber: `TK${Math.floor(100000 + Math.random() * 900000)}`,
      };
      setIsPurchasing(false);
      addTicket(newTicket); // 👈 добавляем билет
      Alert.alert(t("Ваш билет успешно куплен!"));
      navigation.navigate("MyTicketScreen");
    }, 2000);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
      }}
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0, 150, 255, 0.6)", "rgba(255, 255, 255, 1)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.header}>{t("Подтверждение покупки билета")}</Text>
          <View style={styles.flightCard}>
            <Text style={styles.flightText}>
              {t("Откуда")}: {purchasedFlight.from}
            </Text>
            <Text style={styles.flightText}>
              {t("Куда")}: {purchasedFlight.to}
            </Text>
            <Text style={styles.flightText}>
              {t("Дата")}: {purchasedFlight.date}
            </Text>
            <Text style={styles.flightText}>
              {t("Класс")}: {purchasedFlight.class}
            </Text>
            <Text style={styles.flightText}>
              {t("Цена")}: {purchasedFlight.price}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={handlePurchase}
            disabled={isPurchasing}
          >
            <Text style={styles.buyButtonText}>
              {isPurchasing ? t("Покупка...") : t("Купить билет")}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  flightCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 30,
  },
  flightText: {
    fontSize: 16,
    margin: 5,
  },
  buyButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default TicketPurchaseScreen;
