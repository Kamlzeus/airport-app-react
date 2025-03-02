import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useTranslation } from "react-i18next";

export default function QRCodeGenerator() {
  const { t } = useTranslation();
  const qrValue = t("сканирования ~");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t("Ваш QR-код")}</Text>
      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue}
          size={250}
          color="#1e90ff"
          backgroundColor="#fff"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(t(`'QR-код для' ${qrValue}`))}
      >
        <Text style={styles.buttonText}>{t("Показать данные")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  qrContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
