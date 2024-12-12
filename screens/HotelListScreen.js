import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const hotels = [
  {
    id: 1,
    name: "Отель Доха Люкс",
    country: "Катар",
    description: "5 звезд, рядом с пляжем",
  },
  {
    id: 2,
    name: "Гостиница Катар Палас",
    country: "Катар",
    description: "4 звезды, в центре города",
  },
  {
    id: 3,
    name: "Отель Дубай Элит",
    country: "ОАЭ",
    description: "5 звезд, с видом на Бурдж Халифа",
  },
  {
    id: 4,
    name: "Гостиница Дубай Бич",
    country: "ОАЭ",
    description: "4 звезды, у пляжа Джумейра",
  },
  {
    id: 5,
    name: "Отель Алматы",
    country: "Казахстан",
    description: "3 звезды, недалеко от гор",
  },
  {
    id: 6,
    name: "Гостиница Нур-Султан",
    country: "Казахстан",
    description: "4 звезды, в центре столицы",
  },
  {
    id: 7,
    name: "Отель Бишкек Гранд",
    country: "Кыргызстан",
    description: "4 звезды, рядом с центральной площадью",
  },
  {
    id: 8,
    name: "Гостиница Ош Комфорт",
    country: "Кыргызстан",
    description: "3 звезды, недалеко от аэропорта",
  },
];

const HotelListScreen = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const applyFilter = () => {
    const filtered = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(filter.toLowerCase()) ||
        hotel.description.toLowerCase().includes(filter.toLowerCase()) ||
        hotel.country.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Фильтр отелей</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите название, описание или страну"
        value={filter}
        onChangeText={setFilter}
      />
      <TouchableOpacity style={styles.button} onPress={applyFilter}>
        <Text style={styles.buttonText}>Применить фильтр</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredHotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("HotelDetails", { hotel: item })}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Нет доступных отелей</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
  button: { backgroundColor: "#007AFF", padding: 15, borderRadius: 8 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  card: { borderWidth: 1, borderRadius: 8, padding: 15, marginBottom: 10 },
  cardTitle: { fontWeight: "bold", fontSize: 18 },
  cardDescription: { color: "#666" },
  empty: { textAlign: "center", marginTop: 20, color: "#666" },
});

export default HotelListScreen;
