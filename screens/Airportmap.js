import React, { useState } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import ImageZoomViewer from "react-native-image-zoom-viewer";
import Svg, { Polyline } from "react-native-svg";
import { useTranslation } from "react-i18next";

const floorImages = {
  1: require("../assets/floor1.jpeg"),
  2: require("../assets/floor2.jpeg"),
  3: require("../assets/floor3.jpeg"),
};

const routes = {
  1: [
    { x: 50, y: 100 },
    { x: 150, y: 200 },
    { x: 250, y: 150 },
  ],
  2: [
    { x: 60, y: 110 },
    { x: 160, y: 210 },
    { x: 260, y: 160 },
  ],
  3: [
    { x: 70, y: 120 },
    { x: 170, y: 220 },
    { x: 270, y: 170 },
  ],
};

const Route = ({ floor }) => {
  const points = routes[floor]
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
      <Polyline points={points} fill="none" stroke="red" strokeWidth="3" />
    </Svg>
  );
};

const AirportMap = () => {
  const { t } = useTranslation();
  const [activeFloor, setActiveFloor] = useState(1);

  const images = [
    { url: floorImages[1] },
    { url: floorImages[2] },
    { url: floorImages[3] },
  ];

  return (
    <View style={styles.container}>
      <ImageZoomViewer
        imageUrls={images}
        index={activeFloor - 1}
        enableSwipeDown
        onSwipeDown={() => console.log("Swipe down")}
        renderIndicator={() => null}
      />
      <Route floor={activeFloor} />{" "}
      <View style={styles.buttonContainer}>
        <Button title={t("Этаж 1")} onPress={() => setActiveFloor(1)} />
        <Button title={t("Этаж 2")} onPress={() => setActiveFloor(2)} />
        <Button title={t("Этаж 3")} onPress={() => setActiveFloor(3)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
});

export default AirportMap;
