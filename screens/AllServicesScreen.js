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
import { useNavigation } from "@react-navigation/native";

const AllServicesScreen = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const navigation = useNavigation();

  const services = [
    {
      id: 1,
      name: t("Такси и Транспорт"),
      category: t("Такси"),
      image: require("../assets/taxi-bus.png"),
      screen: "TaxiTransportScreen",
    },
    {
      id: 2,
      name: t("Магазины"),
      category: t("Шопинг"),
      image: require("../assets/store-alt-5.png"),
      screen: "ShopsScreen",
    },
    {
      id: 3,
      name: t("Кафе"),
      category: t("Еда"),
      image: require("../assets/restaurant.png"),
      screen: "CafesScreen",
    },
    {
      id: 4,
      name: t("Информация"),
      category: t("Инфо"),
      image: require("../assets/square-info.png"),
      screen: "InfoScreen",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === t("Все") ||
        service.category === selectedCategory) &&
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={t("Поиск услуг...")}
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.filters}>
        {[t("Все"), t("Такси"), t("Шопинг"), t("Еда"), t("Инфо")].map(
          (category) => (
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
          )
        )}
      </View>

      <ScrollView contentContainerStyle={styles.servicesList}>
        {filteredServices.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceItem}
            onPress={() => navigation.navigate(service.screen)}
          >
            <Image source={service.image} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{service.name}</Text>
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
  filters: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  filterButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
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
  servicesList: {
    paddingBottom: 100,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
});

export default AllServicesScreen;
