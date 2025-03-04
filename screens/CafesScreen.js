import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useTranslation } from "react-i18next";

const CafesScreen = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("Все"));

  const categories = [t("Все"), t("Кофейня"), t("Кафе")];

  const cafes = [
    { id: 1, name: "Adriano", category: t("Кофейня") },
    { id: 2, name: t("Долина вкуса"), category: t("Кафе") },
    { id: 3, name: "Tucano Coffee", category: t("Кофейня") },
    { id: 4, name: "Bruno coffee & Tea room", category: t("Кафе") },
    { id: 5, name: "Sky Bar", category: t("Кофейня") },
    {
      id: 6,
      name: "Sierra",
      category: t("Кофейня"),
      image: require("../assets/sierra.jpeg"),
    },
  ];

  const filteredCafes = cafes.filter(
    (cafe) =>
      (selectedCategory === t("Все") || cafe.category === selectedCategory) &&
      cafe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Поисковик */}
      <TextInput
        placeholder={t("Поиск кафе...")}
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Фильтры категорий */}
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
                selectedCategory === category && styles.selectedFilterButton,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCategory === category && styles.selectedFilterText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Список кафе */}
      <ScrollView contentContainerStyle={styles.cafesList}>
        {filteredCafes.map((cafe) => (
          <TouchableOpacity key={cafe.id} style={styles.cafeItem}>
            {cafe.image && (
              <Image source={cafe.image} style={styles.cafeImage} />
            )}
            <Text style={styles.cafeName}>{cafe.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  searchInput: {
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  categoriesWrapper: {
    alignItems: "center", // Центрируем категории
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  filterButton: {
    paddingVertical: 5,
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
    borderRadius: 12,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cafeImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius: 10,
  },
  cafeName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});

export default CafesScreen;
