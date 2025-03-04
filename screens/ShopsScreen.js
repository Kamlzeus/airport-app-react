import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useTranslation } from "react-i18next";

const ShopsScreen = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(t("Все"));

  // Данные о магазинах (перемещены выше)
  const shopsData = [
    {
      id: "1",
      name: "DutyFree",
      category: t("Duty-free"),
    },
    {
      id: "2",
      name: "Erke",
      category: t("Ювелирка"),
    },
    {
      id: "3",
      name: "Алтын сандык",
      category: t("Сувениры"),
    },
    {
      id: "4",
      name: "Shine",
      category: t("Ювелирка"),
    },
    {
      id: "5",
      name: "Nomad",
      category: t("Сувениры"),
    },
    {
      id: "6",
      name: "Beeline",
      category: t("SIM-card"),
    },
  ];

  const categories = [
    t("Все"),
    t("Ювелирка"),
    t("Duty-free"),
    t("Сувениры"),
    t("SIM-card"),
  ];

  // Фильтрация магазинов
  const filteredShops = shopsData.filter(
    (shop) =>
      (selectedCategory === t("Все") || shop.category === selectedCategory) &&
      shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Поиск */}
      <TextInput
        placeholder={t("Поиск магазинов...")}
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Категории */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
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
              {category} {/* Убрали повторный вызов t() */}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Список магазинов */}
      <FlatList
        data={filteredShops}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.shopCard}>
            <Text style={styles.shopName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchInput: {
    paddingHorizontal: 20,
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
  categoryContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
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
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  selectedFilterText: {
    color: "white",
  },
  gridContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  shopCard: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 170,
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  shopName: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ShopsScreen;
