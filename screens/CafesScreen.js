import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

const CafesScreen = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("Все"));
  const navigation = useNavigation();

  const categories = [t("Все"), t("Кофейня"), t("Кафе")];

  const cafes = [
    {
      id: 1,
      name: "Adriano",
      category: "Кофейня",
      description: t(
        "Кофейня в минималистичном стиле с авторскими напитками и уютной атмосферой."
      ),
      location: t("Зона ожидания, 1 этаж"),
      open_time: "07:00",
      close_time: "21:00",
      image: require("../assets/adriano.jpeg"),
    },
    {
      id: 2,
      name: t("Долина вкуса"),
      category: "Кафе",
      description: t(
        "Уютное кафе с домашней кухней. Отлично подходит для обеда в спокойной обстановке."
      ),
      location: t("Зона прилёта, 1 этаж"),
      open_time: "08:00",
      close_time: "20:00",
      image: require("../assets/dolina.jpeg"),
    },
    {
      id: 3,
      name: "Tucano Coffee",
      category: "Кофейня",
      description: t(
        "Брендовая кофейня с фирменными напитками и десертами. Есть места у окна."
      ),
      location: t("Зона регистрации, рядом с входом №2"),
      open_time: "06:00",
      close_time: "22:00",
      image: require("../assets/tucano.jpeg"),
    },
    {
      id: 4,
      name: "Bruno coffee & Tea room",
      category: "Кафе",
      description: t(
        "Стильное кафе с богатым выбором чая, кофе и закусок. Подходит для работы и отдыха."
      ),
      location: t("2 этаж, рядом с эскалатором"),
      open_time: "09:00",
      close_time: "21:00",
      image: require("../assets/bruno.jpeg"),
    },
    {
      id: 5,
      name: "Sky Bar",
      category: "Кофейня",
      description: t(
        "Бар-кофейня с панорамным видом. Идеально для утреннего кофе или вечернего коктейля."
      ),
      location: t("3 этаж, панорамная зона отдыха"),
      open_time: "10:00",
      close_time: "00:00",
      image: require("../assets/sky.jpeg"),
    },
    {
      id: 6,
      name: "Sierra",
      category: "Кофейня",
      description: t(
        "Современная кофейня с видом на взлётную полосу. Отличный выбор напитков и десертов."
      ),
      location: t("2 этаж, зона вылета"),
      open_time: "06:00",
      close_time: "23:00",
      image: require("../assets/sierra.jpeg"),
    },
  ];

  const filteredCafes = cafes.filter(
    (cafe) =>
      (selectedCategory === t("Все") || cafe.category === selectedCategory) &&
      cafe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={{
        uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
      }}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0, 150, 255, 0.6)", "rgba(255, 255, 255, 1)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          {/* Поиск */}
          <TextInput
            placeholder={t("Поиск кафе...")}
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* Категории */}
          <View style={styles.categoriesWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContainer}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  style={[
                    styles.filterButton,
                    selectedCategory === category &&
                      styles.selectedFilterButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      selectedCategory === category &&
                        styles.selectedFilterText,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Кафе */}
          <ScrollView contentContainerStyle={styles.cafesList}>
            {filteredCafes.map((cafe) => (
              <TouchableOpacity
                key={cafe.id}
                style={styles.cafeItem}
                onPress={() => navigation.navigate("CafeDetails", { cafe })}
              >
                {cafe.image && (
                  <Image source={cafe.image} style={styles.cafeImage} />
                )}
                <Text style={styles.cafeName}>{cafe.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchInput: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  categoriesWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  selectedFilterButton: {
    backgroundColor: "rgba(0, 150, 255, 0.8)",
  },
  filterText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
  selectedFilterText: {
    color: "white",
  },
  cafesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  cafeItem: {
    width: 170,
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cafeImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    borderRadius: 10,
  },
  cafeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default CafesScreen;
