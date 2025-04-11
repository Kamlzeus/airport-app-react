import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

const CafeDetailsScreen = () => {
  const route = useRoute();
  const { cafe } = route.params;
  const { t, i18n } = useTranslation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
        }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0, 150, 255, 0.6)", "rgba(255,255,255,1)"]}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.cafeName}>{cafe.name}</Text>

            <View style={styles.infoCard}>
              <Text style={styles.label}>📍 {t("Локация")}:</Text>
              <Text style={styles.value}>{cafe.location || "Не указана"}</Text>

              <Text style={styles.label}>🕒 {t("Время работы")}:</Text>
              <Text style={styles.value}>
                {cafe.open_time && cafe.close_time
                  ? `${cafe.open_time} - ${cafe.close_time}`
                  : "Не указано"}
              </Text>

              <Text style={styles.label}>📝 {t("Описание")}:</Text>
              <Text style={styles.value}>
                {cafe.description || t("Нет описания")}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: "100%",
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cafeName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 20,
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginTop: 2,
  },
});

export default CafeDetailsScreen;
