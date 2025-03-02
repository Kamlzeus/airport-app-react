import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useTranslation } from "react-i18next";

const FoodDeliveryScreen = () => {
  const { t } = useTranslation();
  const handleOrderFood = () => {
    const url = "https://glovoapp.com/kg/ru/bishkek/";
    Linking.openURL(url).catch((err) =>
      console.error("Не удалось открыть ссылку: ", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Доставка еды")}</Text>
      <Text style={styles.description}>
        {t("Закажите вкусную еду прямо сейчас через сервис Glovo!")}
      </Text>
      {/* Кнопка для заказа еды */}
      <TouchableOpacity style={styles.button} onPress={handleOrderFood}>
        <Text style={styles.buttonText}>{t("Заказать еду")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
    color: "#666",
  },
  button: {
    backgroundColor: "#ff6600", // Оранжевый цвет для кнопки
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FoodDeliveryScreen;
