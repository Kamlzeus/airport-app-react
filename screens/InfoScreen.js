import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const InfoScreen = () => {
  const [sections, setSections] = useState([]);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://192.168.68.107:8000/api/info-sections/")
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.id}
            style={styles.button}
            onPress={() =>
              navigation.navigate("InfoDetail", { section: section })
            }
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
});

export default InfoScreen;
