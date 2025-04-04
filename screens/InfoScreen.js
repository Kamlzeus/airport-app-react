import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const InfoScreen = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { t } = useTranslation();

  const topics = [
    "📄 Документы",
    "🛫 Регистрация",
    "🛄 Багаж",
    "🐾 Перевозка животных",
    "🎒 Утеря багажа",
    "🚖 Транспорт",
    "🌱 Углеродный след",
  ];

  const getContentKey = (topic) => {
    switch (topic) {
      case "📄 Документы":
        return "documents_text";
      case "🛫 Регистрация":
        return "checkin_text";
      case "🛄 Багаж":
        return "baggage_text";
      case "🐾 Перевозка животных":
        return "pet_transport_text";
      case "🎒 Утеря багажа":
        return "lost_baggage_text";
      case "🚖 Транспорт":
        return "transport_text";
      case "🌱 Углеродный след":
        return "carbon_footprint_text";
      default:
        return "";
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {topics.map((topic) => (
          <TouchableOpacity
            key={topic}
            style={styles.button}
            onPress={() => setSelectedTopic(topic)}
          >
            <LinearGradient
              colors={["#ffffff", "#cfd9df"]}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>{t(topic)}</Text>
              <Ionicons name="chevron-forward" size={22} color="black" />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={selectedTopic !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.modalHeader}>{t(selectedTopic)}</Text>
            <Text style={styles.modalText}>
              {t(getContentKey(selectedTopic))}
            </Text>
          </ScrollView>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedTopic(null)}
          >
            <Text style={styles.closeButtonText}>{t("Закрыть")}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f7fa",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  button: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  gradientButton: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    marginTop: 60,
  },
  modalContent: {
    flex: 1,
  },
  modalHeader: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "black",
  },
  modalText: {
    fontSize: 18,
    lineHeight: 24,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default InfoScreen;
