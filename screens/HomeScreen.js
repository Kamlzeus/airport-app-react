import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import axios from "axios";
import ChatBox from "../screens/ChatScreen"; // уже есть, если нет — см. предыдущий ответ
import { Modal } from "react-native";
import { SafeAreaView, useWindowDimensions } from "react-native";

const HomeScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [tips, setTips] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const response = await axios.get(
        "http://192.168.68.112:8000/api/info-banners/"
      );
      setTips(response.data);
    } catch (error) {
      console.error("Ошибка загрузки советов:", error);
      Alert.alert(t("Ошибка"), t("Не удалось загрузить советы."));
    }
  };

  const services = [
    {
      id: 3,
      name: t("Магазины"),
      image: require("../assets/store-alt-5.png"),
      screen: "ShopsScreen",
    },
    {
      id: 4,
      name: t("Кафе"),
      image: require("../assets/restaurant.png"),
      screen: "CafesScreen",
    },
    {
      id: 5,
      name: t("Информация"),
      image: require("../assets/square-info.png"),
      screen: "InfoScreen",
    },
  ];
  const stories = [
    { id: 1, title: "Добро пожаловать!", image: require("../assets/TSI.jpg") },
    { id: 2, title: "Новые услуги", image: require("../assets/Reklama.png") },
    { id: 3, title: "Скидки на рейсы", image: require("../assets/TSI.jpg") },
    { id: 4, title: "Регистрация!", image: require("../assets/Auca.jpg") },
    { id: 5, title: "Новые услуги", image: require("../assets/Reklama.png") },
    { id: 6, title: "Регистрация!", image: require("../assets/Auca.jpg") },
  ];

  // Фильтруем услуги по запросу
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Фон и градиент */}
      <ImageBackground
        source={{
          uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
        }}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={["rgba(0, 150, 255, 0.5)", "rgba(255, 255, 255, 1)"]}
          style={styles.gradient}
        >
          {/* Заголовок */}
          <View style={styles.customHeader}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu-outline" size={30} color="black" />
            </TouchableOpacity>
            <LanguageSwitcher />
          </View>

          <View style={styles.header}>
            <Image
              source={require("../assets/Group.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>{t("Добрый день!")}</Text>
          </View>

          {/* Сторис */}
          <ScrollView
            horizontal
            contentContainerStyle={styles.storiesContainer}
            showsHorizontalScrollIndicator={false}
          >
            {stories.map((story, index) => (
              <TouchableOpacity
                key={story.id}
                onPress={() =>
                  navigation.navigate("StoryScreen", {
                    storyIndex: index,
                    stories,
                  })
                }
              >
                <View style={styles.storyCircle}>
                  <Image source={story.image} style={styles.storyImage} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Поиск */}
          <View style={styles.topSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationSettingsScreen")}
              style={styles.notificationContainer}
            >
              <Image
                source={require("../assets/not.png")}
                style={styles.notificationIcon}
              />
            </TouchableOpacity>

            <View style={styles.searchContainer}>
              <TextInput
                placeholder={t("Искать услугу")}
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.searchInput}
              />
              <Ionicons
                name="search-outline"
                size={24}
                color="black"
                style={styles.searchIcon}
              />
            </View>
          </View>

          {/* Услуги */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.services}
          >
            {filteredServices.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={styles.serviceButton}
                onPress={() => {
                  if (service.name === t("Магазины")) {
                    navigation.navigate("ShopsScreen");
                  } else if (service.name === t("Кафе")) {
                    navigation.navigate("CafesScreen");
                  } else if (service.name === t("Информация")) {
                    navigation.navigate("InfoScreen");
                  } else if (service.name === t("Такси и транспорт")) {
                    navigation.navigate("ТаксиТранспорт");
                  } else if (service.name === t("Аренда машин")) {
                    navigation.navigate("АрендаМашин");
                  } else if (service.name === t("Бронирование отеля")) {
                    navigation.navigate("БронированиеОтеля");
                  } else {
                    navigation.navigate("Все услуги");
                  }
                }}
              >
                <Image
                  source={service.image}
                  style={[styles.serviceIcon, { tintColor: "#00609E" }]}
                />

                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.centerButtonContainer}>
            <TouchableOpacity
              style={styles.allServicesButton}
              onPress={() => navigation.navigate("Все услуги")}
            >
              <Text style={styles.allServicesText}>{t("Все услуги")}</Text>
            </TouchableOpacity>

            {/* Кнопка чата — абсолютная внутри этого блока */}
            <TouchableOpacity
              style={styles.chatButtonFixed}
              onPress={() => navigation.navigate("Chat")}
            >
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          {/* Советы */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tipsContainer}
          >
            {tips.map((tip, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("TipDetail", {
                    title: tip.title,
                    content: tip.content,
                    image: tip.image,
                  })
                }
              >
                <LinearGradient
                  colors={["#00609E", "#00B9FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.tipCard}
                >
                  <Text style={styles.tipTitle}>{t(tip.title)}</Text>
                  <Text style={styles.tipDescription}>
                    {t(tip.description)}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  gradient: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  customHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  storiesContainer: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "rgba(0, 150, 255, 0.8)",
  },
  storyImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  notificationContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  notificationIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  searchIcon: {
    marginLeft: 8,
  },
  services: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  serviceButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffffcc",
    padding: 15,
    borderRadius: 20,
    width: 120,
    height: 120,
    marginHorizontal: 6,
  },
  serviceIcon: {
    width: 45,
    height: 45,
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 13,
    color: "#000",
    fontWeight: "500",
    textAlign: "center",
  },
  centerButtonContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
    position: "relative",
  },
  allServicesButton: {
    backgroundColor: "#0096FFcc",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  allServicesText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  chatButtonFixed: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -25 }],
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 28,
    elevation: 3,
  },
  tipsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 60,
    marginTop: 35,
  },
  tipCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
    width: 260,
    height: 180,
    justifyContent: "center",
    backgroundColor: "#00B9FF",
  },
  tipTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tipDescription: {
    color: "#fff",
    fontSize: 13,
  },
});

export default HomeScreen;
