import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const MyProfileScreen = () => {
  const navigation = useNavigation();

  // Данные пользователя
  const [user] = useState({
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    balance: "1 250$",
    bonuses: "250 Бонусов",
  });

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
        <ScrollView contentContainerStyle={styles.container}>
          {/* Профиль */}
          <View style={styles.profileCard}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>

            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate("Настройки профиля")}
            >
              <Ionicons name="create-outline" size={20} color="white" />
              <Text style={styles.editButtonText}>Редактировать профиль</Text>
            </TouchableOpacity>
          </View>

          {/* Баланс */}
          <View style={styles.balanceCard}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceText}>Баланс:</Text>
              <Text style={styles.balanceValue}>{user.balance}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.balanceItem}>
              <Text style={styles.balanceText}>Бонусы:</Text>
              <Text style={styles.balanceValue}>{user.bonuses}</Text>
            </View>
          </View>
        </ScrollView>
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
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
  },
  profileCard: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 24, fontWeight: "bold" },
  email: { fontSize: 16, color: "gray", marginBottom: 15 },
  editButton: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: { color: "white", fontSize: 16, marginLeft: 10 },
  balanceCard: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  balanceItem: { flexDirection: "row", justifyContent: "space-between" },
  balanceText: { fontSize: 18, color: "gray" },
  balanceValue: { fontSize: 18, fontWeight: "bold" },
  divider: { height: 1, backgroundColor: "#ddd", marginVertical: 12 },
  menu: { marginTop: 20, width: "100%" },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  menuText: { fontSize: 18, marginLeft: 12 },
});

export default MyProfileScreen;
