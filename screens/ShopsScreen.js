import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ShopsScreen = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [shops, setShops] = useState([]);

  const categoryLabels = {
    all: t("Все"),
    jewelry: t("Ювелирка"),
    dutyfree: t("Duty-free"),
    souvenirs: t("Сувениры"),
    simcard: t("SIM-card"),
  };

  const categories = ["all", "jewelry", "dutyfree", "souvenirs", "simcard"];

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const response = await axios.get(
        "http://172.19.226.109:8000/api/services/"
      );
      setShops(response.data);
    } catch (error) {
      console.error("Ошибка загрузки магазинов:", error);
    }
  };

  const filteredShops = shops.filter((shop) => {
    const matchesCategory =
      selectedCategory === "all" || shop.service_type === selectedCategory;
    const matchesSearch = shop.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={t("Поиск магазинов...")}
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((categoryKey) => (
          <TouchableOpacity
            key={categoryKey}
            onPress={() => setSelectedCategory(categoryKey)}
            style={[
              styles.filterButton,
              selectedCategory === categoryKey && styles.selectedFilterButton,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === categoryKey && styles.selectedFilterText,
              ]}
            >
              {categoryLabels[categoryKey]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredShops}
        keyExtractor={(item) => item.id.toString()}
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
