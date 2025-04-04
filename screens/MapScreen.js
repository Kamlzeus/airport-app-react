import React from "react";
import { WebView } from "react-native-webview";

const MapScreen = () => {
  const mapUrl =
    "https://2gis.kg/bishkek/firm/70000001019319368/74.469735%2C43.054353?floor=0&m=74.469855%2C43.054066%2F19.45%2Fr%2F10.12&immersive=on";

  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: mapUrl }}
      style={{ flex: 1 }}
      startInLoadingState={true}
      javaScriptEnabled={true}
    />
  );
};

export default MapScreen;
