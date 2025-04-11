import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { useRoute } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";

const tagsStyles = {
  p: {
    fontSize: 17,
    lineHeight: 24,
    color: "#333",
    marginBottom: 10,
    fontFamily: "serif",
  },
  li: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    fontFamily: "serif",
  },
  strong: {
    fontWeight: "bold",
    color: "#000",
  },
  ul: {
    paddingLeft: 20,
    marginBottom: 10,
  },
};

const InfoDetailScreen = () => {
  const { t, i18n } = useTranslation();
  const route = useRoute();
  const { section } = route.params;
  const { width } = useWindowDimensions();

  const getLocalizedText = (field) => {
    const lang = i18n.language;
    return lang === "en" ? section[`${field}_en`] : section[`${field}_ru`];
  };

  return (
    <ScrollView style={styles.container}>
      {/* Заголовок раздела */}
      <Text style={styles.title}>{getLocalizedText("title")}</Text>

      {/* Контент в HTML */}
      <RenderHTML
        contentWidth={width - 32}
        source={{ html: getLocalizedText("content") }}
        tagsStyles={tagsStyles}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
    textAlign: "center",
  },
});

export default InfoDetailScreen;
