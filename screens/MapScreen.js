import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import {
  PinchGestureHandler,
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";

// Карты этажей
const floors = {
  1: require("../assets/airport-map.jpg"),
  2: require("../assets/secondF.jpg"),
  3: require("../assets/thirdF.jpg"),
};

// Точки на карте
const points = {
  1: [
    { id: 1, x: 590, y: 430, label: "Чемоданы" },
    { id: 2, x: 400, y: 260, label: "Лестница" },
    { id: 3, x: 425, y: 555, label: "Кафе" },
    { id: 4, x: 5, y: 290, label: "Лестница" },
    { id: 5, x: 295, y: 440, label: "Намазкана" },
    { id: 6, x: 580, y: 555, label: "Вы тут" },
    { id: 7, x: 700, y: 555, label: "Аптека" },
    { id: 8, x: 740, y: 320, label: "Туалет" },
    { id: 9, x: 795, y: 379, label: "Лифт" },
    { id: 10, x: 850, y: 375, label: "Лестница" },
  ],
  2: [],
  3: [],
};

const MapScreen = () => {
  const { t } = useTranslation();
  const [currentFloor, setCurrentFloor] = useState(1);
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const lastScale = useRef(1);
  const lastTranslateX = useRef(0);
  const lastTranslateY = useRef(0);

  const handlePinch = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: false,
  });

  const handlePinchStateChange = (event) => {
    if (event.nativeEvent.state === 5) {
      lastScale.current *= event.nativeEvent.scale;
      scale.setValue(lastScale.current);
    }
  };

  const handlePan = Animated.event(
    [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
    { useNativeDriver: false }
  );

  const handlePanStateChange = (event) => {
    if (event.nativeEvent.state === 5) {
      lastTranslateX.current += event.nativeEvent.translationX;
      lastTranslateY.current += event.nativeEvent.translationY;
      translateX.setValue(lastTranslateX.current);
      translateY.setValue(lastTranslateY.current);
    }
  };

  const switchFloor = (floor) => {
    setCurrentFloor(floor);
    scale.setValue(1);
    translateX.setValue(0);
    translateY.setValue(0);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={t("Этаж 1")} onPress={() => switchFloor(1)} />
        <Button title={t("Этаж 2")} onPress={() => switchFloor(2)} />
        <Button title={t("Этаж 3")} onPress={() => switchFloor(3)} />
      </View>

      <PinchGestureHandler
        onGestureEvent={handlePinch}
        onHandlerStateChange={handlePinchStateChange}
      >
        <PanGestureHandler
          onGestureEvent={handlePan}
          onHandlerStateChange={handlePanStateChange}
        >
          <Animated.View
            style={[
              styles.mapContainer,
              {
                transform: [
                  { scale: scale },
                  { translateX: translateX },
                  { translateY: translateY },
                ],
              },
            ]}
          >
            <Image
              source={floors[currentFloor]}
              style={styles.map}
              resizeMode="contain"
            />
            {points[currentFloor] &&
              points[currentFloor].map((point) => (
                <TouchableOpacity
                  key={point.id}
                  style={[styles.point, { left: point.x, top: point.y }]}
                  onPress={() => alert(t(`'Вы нажали на': ${point.label}`))}
                >
                  <View style={styles.marker} />
                  <Text style={styles.label}>{point.label}</Text>
                </TouchableOpacity>
              ))}
          </Animated.View>
        </PanGestureHandler>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  mapContainer: {
    position: "relative",
  },
  map: {
    width: 1200, // Подгоните под размер изображения карты
    height: 800,
  },
  point: {
    position: "absolute",
    alignItems: "center",
  },
  marker: {
    width: 14,
    height: 14,
    backgroundColor: "red",
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "white",
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },
});

export default MapScreen;
