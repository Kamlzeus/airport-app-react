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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    { id: 6, name: "Аренда машин", image: require("../assets/car-alt.png") },
    {
      id: 7,
      name: "Бронирование отеля",
      image: require("../assets/h-square.png"),
    },
    {
      id: 2,
      name: "Такси и транспорт",
      image: require("../assets/taxi-bus.png"),
    },
    { id: 1, name: "Автопарк", image: require("../assets/parking.png") },
    { id: 3, name: "Магазины", image: require("../assets/store-alt-5.png") },
    { id: 4, name: "Кафе", image: require("../assets/restaurant.png") },
    { id: 5, name: "Информация", image: require("../assets/square-info.png") },
  ];

  const stories = [
    { id: 1, title: "Добро пожаловать!", image: require("../assets/TSI.jpg") },
    { id: 2, title: "Новые услуги", image: require("../assets/Reklama.png") },
    { id: 3, title: "Скидки на рейсы", image: require("../assets/TSI.jpg") },
    { id: 4, title: "Регистрация!", image: require("../assets/Auca.jpg") },
    { id: 5, title: "Новые услуги", image: require("../assets/Reklama.png") },
    { id: 6, title: "Регистрация!", image: require("../assets/Auca.jpg") },
  ];

  const tips = [
    {
      title: "Экологические путешествия",
      description:
        "Внесите свой вклад для природы, используя меньше вещей в путешествии",
      content:
        "Экологические путешествия помогают сократить углеродный след. Используйте меньше пластика, выбирайте экологичные отели, поддерживайте местные инициативы. Например, выбирайте транспорт с меньшими выбросами CO2.",
    },
    {
      title: "Скидка 50% на билеты в Ош",
      description:
        "До 25 декабря действует скидка при покупке билетов эконом класса в Ош",
      content:
        "С 1 по 25 декабря действует скидка 50% на билеты в Ош. Это часть нашей программы поддержки экологичных путешествий. Планируйте поездки заранее и экономьте!",
    },
    {
      title: "Встречайте такси Манас",
      description:
        "В аэропорту «Манас» запустился сервис собственного таксопарка",
      content:
        "В аэропорту «Манас» появился новый сервис для путешественников и жителей города — собственный таксопарк. Теперь, вернувшись из поездки или прибыв в Бишкек, пассажиры смогут воспользоваться комфортными и безопасными поездками прямо из аэропорта.",
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
          <View style={styles.header}>
            <Image
              source={require("../assets/Group.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Добрый день!</Text>
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
                placeholder="Искать рейс или услугу"
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
                  if (service.name === "Такси и транспорт") {
                    navigation.navigate("ТаксиТранспорт");
                  } else if (service.name === "Аренда машин") {
                    navigation.navigate("АрендаМашин");
                  } else if (service.name === "Бронирование отеля") {
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
              <Text style={styles.allServicesText}>Все услуги</Text>
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
                  navigation.navigate("EcoTravel", {
                    title: tip.title,
                    content: tip.content,
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
  gradient: { flex: 1, paddingHorizontal: 20, paddingTop: 40 },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 30 },
  logo: { width: 59, height: 59, borderRadius: 25, marginRight: 2 },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  storiesContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
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
    marginVertical: 15,
  },
  notificationContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
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
    paddingVertical: 15,
  },
  serviceButton: {
    alignItems: "center",
    justifyContent: "center", // Центрируем все элементы внутри кнопки
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 20,
    width: 130,
    height: 130,
    marginHorizontal: 10,
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
    marginBottom: 25,
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
    marginBottom: 70,
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
