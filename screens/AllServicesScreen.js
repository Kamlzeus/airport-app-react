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

const AllServicesScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const services = [
    {
      id: 1,
      name: "DutyFree",
      category: "Шопинг",
    },
    {
      id: 2,
      name: "Sierra",
      category: "Еда и напитки",
      image: require("../assets/sierra.jpeg"),
    },
    {
      id: 3,
      name: "Туалет",
      category: "Путеводитель",
    },
    {
      id: 4,
      name: "Starbucks",
      category: "Еда и напитки",
    },
    {
      id: 5,
      name: "Be adam",
      category: "Шопинг",
    },
    {
      id: 6,
      name: "Информация",
      category: "Путеводитель",
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "Все" || service.category === selectedCategory) &&
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Поиск услуг..."
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.filters}>
        {["Все", "Шопинг", "Еда и напитки", "Путеводитель"].map((category) => (
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
      </View>

      <ScrollView contentContainerStyle={styles.servicesList}>
        {filteredServices.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceItem}>
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
    marginTop: 50,
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
    paddingVertical: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    marginRight: 10,
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
