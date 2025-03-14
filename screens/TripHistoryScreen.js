import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const TripHistoryScreen = () => {
  const navigation = useNavigation();

  // Пример данных поездок
  const [trips] = useState([
    {
      id: "1",
      date: "12 марта 2025",
      from: "Бишкек",
      to: "Ощ",
      price: "350$",
    },
    {
      id: "2",
      date: "10 марта 2025",
      from: "Ош",
      to: "Астана",
      price: "1200$",
    },
    {
      id: "3",
      date: "8 марта 2025",
      from: "Астана",
      to: "Южная Корея",
      price: "500$",
    },
  ]);

  return (
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
        <View style={styles.container}>
          <FlatList
            data={trips}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.tripCard}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.location}>От: {item.from}</Text>
                <Text style={styles.location}>До: {item.to}</Text>
                <Text style={styles.price}>Стоимость: {item.price}</Text>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
  },
  tripCard: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 10,
    marginBottom: 20,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  date: { fontSize: 16, fontWeight: "bold", marginBottom: 6 },
  location: { fontSize: 15, color: "gray", marginBottom: 6 },
  price: { fontSize: 15, fontWeight: "bold", color: "#007AFF" },
});

export default TripHistoryScreen;
