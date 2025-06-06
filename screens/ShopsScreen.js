import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const ShopsScreen = () => {
  const { t, i18n } = useTranslation(); // ✅ теперь и t, и i18n
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [shops, setShops] = useState([]);
  const navigation = useNavigation();
  const getLocalizedName = (shop) => {
    const lang = i18n.language;
    switch (lang) {
      case "ru":
        return shop.name_ru || "";
      case "ky":
        return shop.name_ky || "";
      case "en":
      default:
        return shop.name_en || "";
    }
  };

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
        "http://192.168.68.112:8000/api/services/"
      );
      setShops(response.data);
    } catch (error) {
      console.error("Ошибка загрузки магазинов:", error);
    }
  };

  const filteredShops = shops.filter((shop) => {
    const matchesCategory =
      selectedCategory === "all" || shop.service_type === selectedCategory;

    const name = getLocalizedName(shop).toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
                  selectedCategory === categoryKey &&
                    styles.selectedFilterButton,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedCategory === categoryKey &&
                      styles.selectedFilterText,
                  ]}
                >
                  {categoryLabels[categoryKey]}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView contentContainerStyle={styles.cafesList}>
            {filteredShops.map((shop) => (
              <TouchableOpacity
                key={shop.id}
                style={styles.cafeItem}
                onPress={() => navigation.navigate("ShopDetails", { shop })}
              >
                {shop.image && (
                  <Image
                    source={{ uri: shop.image }}
                    style={styles.cafeImage}
                  />
                )}
                <Text style={styles.cafeName}>{getLocalizedName(shop)}</Text>
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
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
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
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },

  shopImage: {
    width: 170,
    height: 170,
    justifyContent: "flex-end",
    overflow: "hidden",
    borderRadius: 12,
  },

  shopOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default ShopsScreen;
