import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";

export default function SplashScreen({ onEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onEnd === "function") {
        onEnd();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require("../assets/animkarenat.mp4")}
        style={styles.fullscreen}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  fullscreen: {
    ...StyleSheet.absoluteFillObject,
  },
});
