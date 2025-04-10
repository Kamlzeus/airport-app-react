import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import RenderHTML from "react-native-render-html";
import axios from "axios";
import { useWindowDimensions } from "react-native";

const tagsStyles = {
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a1a1a",
    fontFamily: "serif",
    textAlign: "justify",
  },
  h3: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
    color: "#333",
    fontFamily: "serif",
    textAlign: "justify",
  },
  p: {
    fontSize: 20,
    lineHeight: 24,
    color: "#444",
    marginBottom: 8,
    fontFamily: "serif",
    textAlign: "justify",
  },
  li: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 6,
    color: "#444",
    fontFamily: "serif",
    textAlign: "justify",
  },
  strong: {
    fontWeight: "bold",
    color: "#000",
    fontFamily: "serif",
    textAlign: "justify",
  },
  ul: {
    paddingLeft: 20,
    marginBottom: 10,
    fontFamily: "serif",
    textAlign: "justify",
  },
  ol: {
    paddingLeft: 20,
    marginBottom: 10,
    fontFamily: "serif",
    textAlign: "justify",
  },
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 10,
  },
};
const InfoScreen = () => {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const { t, i18n } = useTranslation();
  const { width } = useWindowDimensions();

  useEffect(() => {
    axios
      .get("http://192.168.68.102:8000/api/info-sections/")
      .then((res) => {
        setSections(res.data);
      })
      .catch((err) => console.error("Error loading info:", err));
  }, []);

  const getLocalizedText = (section, field) => {
    const lang = i18n.language;
    return lang === "en" ? section[`${field}_en`] : section[`${field}_ru`];
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.id}
            style={styles.button}
            onPress={() => setSelectedSection(section)}
          >
            <LinearGradient
              colors={["#ffffff", "#cfd9df"]}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>
                {getLocalizedText(section, "title")}
              </Text>
              <Ionicons name="chevron-forward" size={22} color="black" />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={!!selectedSection} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {selectedSection && (
              <>
                <Text style={styles.modalHeader}>
                  {getLocalizedText(selectedSection, "title")}
                </Text>
                <RenderHTML
                  contentWidth={width - 40}
                  source={{
                    html: getLocalizedText(selectedSection, "content"),
                  }}
                  tagsStyles={tagsStyles}
                />
              </>
            )}
          </ScrollView>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedSection(null)}
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "black",
    textAlign: "center",
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
