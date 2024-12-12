import React from "react";
import { WebView } from "react-native-webview";

const MapScreen = () => {
  const mapUrl =
    "https://2gis.kg/bishkek/firm/70000001019319368/74.46953%2C43.054254?floor=0&m=74.469618%2C43.054219%2F18.56%2Fp%2F1.83%2Fr%2F10.94";

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
