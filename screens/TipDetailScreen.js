import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { useTranslation } from "react-i18next";

const TipDetailScreen = ({ route }) => {
  const { content, image, title } = route.params;
  const { width } = Dimensions.get("window");
  const { t } = useTranslation();

  const renderableHTML = content.replace(/\{\{(.*?)\}\}/g, (_, key) => t(key));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t(title)}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <RenderHtml
        contentWidth={width}
        source={{ html: renderableHTML }}
        tagsStyles={{
          h1: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
          h2: { fontSize: 20, fontWeight: "bold", marginVertical: 8 },
          h3: { fontSize: 18, fontWeight: "bold", marginVertical: 6 },
          p: { fontSize: 16, marginVertical: 4 },
          li: { fontSize: 16, marginLeft: 10 },
        }}
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
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
});

export default TipDetailScreen;
