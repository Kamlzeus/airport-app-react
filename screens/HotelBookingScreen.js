import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";

const HotelBookingScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [country, setCountry] = useState("");
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Отель Кыргызстан",
      location: "Бишкек, Кыргызстан",
      price: "5000 сом/ночь",
    },
    {
      id: 2,
      name: "Ala-Too Resort",
      location: "Чолпон-Ата, Кыргызстан",
      price: "7000 сом/ночь",
    },
    {
      id: 3,
      name: "Plaza Hotel",
      location: "Ош, Кыргызстан",
      price: "6000 сом/ночь",
    },
  ]);

  const handleSearch = () => {
    if (!checkInDate || !checkOutDate || !country) {
      Alert.alert(t("Ошибка", "Пожалуйста, заполните все поля для поиска."));
      return;
    }

    Alert.alert(
      t("Поиск выполнен"),
      t(
        `'Дата заезда': ${checkInDate}\n'Дата выезда': ${checkOutDate}\n"Страна": ${country}`
      )
    );
    // Здесь вы можете добавить логику фильтрации отелей
  };

  const handleHotelSelect = (hotel) => {
    navigation.navigate("HotelDetails", { hotel });
  };

  const renderHotel = ({ item }) => (
    <TouchableOpacity
      style={styles.hotelCard}
      onPress={() => handleHotelSelect(item)}
    >
      <Text style={styles.hotelName}>{item.name}</Text>
      <Text style={styles.hotelLocation}>{item.location}</Text>
      <Text style={styles.hotelPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t("Бронирование отеля")}</Text>

      {/* Фильтры */}
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder={t("Дата заезда (YYYY-MM-DD)")}
          value={checkInDate}
          onChangeText={setCheckInDate}
        />
        <TextInput
          style={styles.input}
          placeholder={t("Дата выезда (YYYY-MM-DD)")}
          value={checkOutDate}
          onChangeText={setCheckOutDate}
        />
        <TextInput
          style={styles.input}
          placeholder={t("Страна/Город")}
          value={country}
          onChangeText={setCountry}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>{t("Найти отели")}</Text>
        </TouchableOpacity>
      </View>

      {/* Список отелей */}
      <FlatList
        data={hotels}
        renderItem={renderHotel}
        keyExtractor={(item) => item.id.toString()}
        style={styles.hotelList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  hotelList: {
    flex: 1,
  },
  hotelCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hotelLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
});

export default HotelBookingScreen;
