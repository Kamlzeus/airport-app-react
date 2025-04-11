import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await AsyncStorage.getItem("language");
      if (storedLang) {
        i18n.changeLanguage(storedLang);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (lang) => {
    await AsyncStorage.setItem("language", lang);
    await i18n.changeLanguage(lang);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        <Image
          source={require("./assets/lang2.png")}
          style={{ width: 32, height: 32, top: -28 }}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              {t("Поменять язык")}
            </Text>
            <TouchableOpacity onPress={() => changeLanguage("en")}>
              <Text style={{ fontSize: 16, padding: 10 }}>🇬🇧 English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage("ru")}>
              <Text style={{ fontSize: 16, padding: 10 }}>🇷🇺 Русский</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage("ky")}>
              <Text style={{ fontSize: 16, padding: 10 }}>
                🇰🇬 Кыргызча
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 16, padding: 10, color: "red" }}>
                {t("Закрыть")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LanguageSwitcher;
