import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";
import axios from "axios";

const FlyflyScreen = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("departure");
  const [searchQuery, setSearchQuery] = useState("");
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    fetchFlights();
  }, [activeTab]);

  const fetchFlights = async () => {
    try {
      const response = await axios.get(
        "http://192.168.68.112:8000/api/flights/",
        {
          params: {
            is_arrival: activeTab === "arrival",
          },
        }
      );
      setFlights(response.data);
      setFilteredFlights([]);
    } catch (error) {
      console.error("Ошибка загрузки рейсов:", error);
      Alert.alert(t("Ошибка"), t("Не удалось загрузить рейсы"));
    }
  };

  const safeLower = (str) => (typeof str === "string" ? str.toLowerCase() : "");

  const applyFilters = () => {
    const filtered = flights.filter((flight) => {
      return (
        safeLower(flight.airline).includes(searchQuery.toLowerCase()) ||
        safeLower(flight.flight_code).includes(searchQuery.toLowerCase()) ||
        safeLower(getLocalizedCity(flight)).includes(searchQuery.toLowerCase())
      );
    });

    if (filtered.length === 0) {
      Alert.alert(t("Нет рейсов"), t("Не найдено рейсов по вашему запросу."));
    } else {
      Alert.alert(
        t("Результаты найдены"),
        `${t("Найдено рейсов")}: ${filtered.length}`
      );
    }

    setFilteredFlights(filtered);
  };

  const getLocalizedCity = (flight) => {
    const lang = i18n.language;
    switch (lang) {
      case "ru":
        return flight.arrival_city;
      case "en":
        return flight.arrival_city_en;
      case "kg":
      case "ky":
        return flight.arrival_city_kg;
      default:
        return flight.arrival_city;
    }
  };

  const getLocalizedStatus = (status) => {
    const translations = {
      scheduled: t("По расписанию"),
      boarding: t("Посадка"),
      landed: t("Приземлился"),
      delayed: t("Задержан"),
      cancelled: t("Отменён"),
    };
    return translations[status] || status;
  };

  return (
    <View style={styles.container}>
      {/* Вкладки "Вылет" и "Прилет" */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "departure" && styles.activeTab]}
          onPress={() => {
            setActiveTab("departure");
            setSearchQuery("");
            setFilteredFlights([]);
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "departure" && styles.activeTabText,
            ]}
          >
            {t("Вылет")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "arrival" && styles.activeTab]}
          onPress={() => {
            setActiveTab("arrival");
            setSearchQuery("");
            setFilteredFlights([]);
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "arrival" && styles.activeTabText,
            ]}
          >
            {t("Прилет")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Поле поиска */}
      <TextInput
        style={styles.searchInput}
        placeholder={t("Искать авиакомпанию, город, № рейса...")}
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Кнопка "Фильтровать" */}
      <TouchableOpacity style={styles.filterButton} onPress={applyFilters}>
        <Text style={styles.filterButtonText}>{t("Фильтровать")}</Text>
      </TouchableOpacity>

      {/* Табло рейсов */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.headerCell]}>
            {t("Авиалиния")}
          </Text>
          <Text style={[styles.tableCell, styles.headerCell]}>{t("Рейс")}</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>
            {t("Город")}
          </Text>
          <Text style={[styles.tableCell, styles.headerCell]}>{t("Дата")}</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>
            {t("Статус")}
          </Text>
        </View>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 10 }}
          data={filteredFlights.length > 0 ? filteredFlights : flights}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.airline}</Text>
              <Text style={styles.tableCell}>{item.flight_code}</Text>
              <Text style={styles.tableCell}>{getLocalizedCity(item)}</Text>
              <Text style={styles.tableCell}>
                {new Date(item.time).toLocaleString()}
              </Text>
              <Text
                style={[
                  styles.tableCell,
                  item.status === "scheduled" && styles.statusOnTime,
                  item.status === "delayed" && styles.statusDelayed,
                  item.status === "cancelled" && styles.statusCancelled,
                ]}
              >
                {getLocalizedStatus(item.status)}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  filterButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 10,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  table: {
    flex: 1,
    paddingHorizontal: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: "#f9f9f9",
  },
  statusOnTime: {
    color: "green",
  },
  statusDelayed: {
    color: "orange",
  },
  statusCancelled: {
    color: "red",
  },
});

export default FlyflyScreen;
