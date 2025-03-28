import React, { useState } from "react";
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

const HomeScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

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

  const tips = [
    {
      title: t("Багаж"),
      description: t(
        "Вещи которые можно перевозить в багаже, ручной клади. Вес багажа и ручной клади."
      ),
    },
    {
      title: t("Документы"),
      description: t(
        "Нужные документы для перелетов во внутренних рейсах, визовые  данные для пересечения границ."
      ),
    },
    {
      title: t("Регистрация"),
      description: t(
        "Регистрация на рейсы, время для прибытие в аэропорт, расписание когда заканчивается регистрация"
      ),
    },
  ];

  // Фильтруем услуги по запросу
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
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

          {/* Поиск */}
          <View style={styles.topSection}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Уведомления")}
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
                  navigation.navigate("InfoScreen", {
                    selectedTopic: tip.title, // Передаем заголовок
                  })
                }
              >
                <LinearGradient
                  colors={["#00609E", "#00B9FF"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.tipCard}
                >
                  <Text style={styles.tipTitle}>{tip.title}</Text>
                  <Text style={styles.tipDescription}>{tip.description}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageBackground: { flex: 1, justifyContent: "center" },
  gradient: { flex: 1, paddingTop: 40 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 25,
  },
  logo: { width: 59, height: 59, borderRadius: 25, marginRight: 2 },
  customHeader: {
    flexDirection: "row",
    justifyContent: "space-between", // Размещаем элементы по краям
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 50,
  },
  notificationContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  searchContainer: {
    maxWidth: 330,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  services: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  serviceButton: {
    alignItems: "center",
    justifyContent: "center", // Центрируем все элементы внутри кнопки
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 20,
    width: 130,
    height: 130,
    marginHorizontal: 8.5,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    tintColor: "#00609E", // Расстояние между иконкой и текстом
  },
  serviceText: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
  },
  centerButtonContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  allServicesButton: {
    alignItems: "center",
    backgroundColor: "rgba(0, 150, 255, 0.8)",
    padding: 12,
    borderRadius: 15,
    width: 160,
  },
  allServicesText: { color: "white", fontWeight: "bold" },
  tipsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 90,
  },
  tipCard: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
    width: 250,
    height: 170,
    overflow: "hidden",
    justifyContent: "center",
  },
  tipTitle: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    fontSize: 20,
  },
  tipDescription: {
    color: "white",
    fontSize: 13,
    flexWrap: "wrap",
  },
});

export default HomeScreen;
