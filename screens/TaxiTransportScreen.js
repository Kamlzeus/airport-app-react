import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

const TaxiTransportScreen = () => {
  const handleOrderTaxi = () => {
    const url = "https://taxi.yandex.ru/ru_ru/";
    Linking.openURL(url).catch((err) =>
      console.error("Не удалось открыть ссылку: ", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Такси и транспорт</Text>
      <Text style={styles.description}>
        Здесь вы можете заказать такси до аэропорта{"\n"}«Манас»
      </Text>
      {/* Кнопка для заказа такси */}
      <TouchableOpacity style={styles.button} onPress={handleOrderTaxi}>
        <Text style={styles.buttonText}>Заказать такси</Text>
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
    lineHeight: 22, // Увеличиваем высоту строки для многострочного текста
    marginBottom: 30,
    color: "#666",
  },
  button: {
    backgroundColor: "#ffcc00", // Желтый цвет для кнопки
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default TaxiTransportScreen;
