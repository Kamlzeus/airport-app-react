import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";

const FlyflyScreen = () => {
  const [activeTab, setActiveTab] = useState("Вылет"); // "Вылет" или "Прилет"
  const [searchQuery, setSearchQuery] = useState(""); // Поле для поиска
  const [filteredFlights, setFilteredFlights] = useState([]); // Отфильтрованные рейсы

  const departureFlights = [
    {
      id: "1",
      airline: "Airline A",
      flight: "AA101",
      city: "New York",
      date: "2024-11-23",
      status: "On Time",
    },
    {
      id: "2",
      airline: "Airline B",
      flight: "BB202",
      city: "Los Angeles",
      date: "2024-11-24",
      status: "Delayed",
    },
    {
      id: "3",
      airline: "Airline C",
      flight: "CC303",
      city: "Chicago",
      date: "2024-11-25",
      status: "Cancelled",
    },
    {
      id: "4",
      airline: "Airline D",
      flight: "DD404",
      city: "Houston",
      date: "2024-11-26",
      status: "On Time",
    },
    {
      id: "5",
      airline: "Airline E",
      flight: "EE505",
      city: "Miami",
      date: "2024-11-27",
      status: "On Time",
    },
    {
      id: "6",
      airline: "Airline F",
      flight: "FF606",
      city: "Dallas",
      date: "2024-11-28",
      status: "Delayed",
    },
    {
      id: "7",
      airline: "Airline G",
      flight: "GG707",
      city: "Seattle",
      date: "2024-11-29",
      status: "Cancelled",
    },
    {
      id: "8",
      airline: "Airline H",
      flight: "HH808",
      city: "Boston",
      date: "2024-11-30",
      status: "On Time",
    },
    {
      id: "9",
      airline: "Airline I",
      flight: "II909",
      city: "Atlanta",
      date: "2024-12-01",
      status: "Delayed",
    },
    {
      id: "10",
      airline: "Airline J",
      flight: "JJ010",
      city: "Denver",
      date: "2024-12-02",
      status: "Cancelled",
    },
    {
      id: "11",
      airline: "Airline K",
      flight: "KK111",
      city: "San Diego",
      date: "2024-12-03",
      status: "On Time",
    },
    {
      id: "12",
      airline: "Airline L",
      flight: "LL212",
      city: "Las Vegas",
      date: "2024-12-04",
      status: "Delayed",
    },
    {
      id: "13",
      airline: "Airline M",
      flight: "MM313",
      city: "Orlando",
      date: "2024-12-05",
      status: "Cancelled",
    },
    {
      id: "14",
      airline: "Airline N",
      flight: "NN414",
      city: "Portland",
      date: "2024-12-06",
      status: "On Time",
    },
    {
      id: "15",
      airline: "Airline O",
      flight: "OO515",
      city: "Detroit",
      date: "2024-12-07",
      status: "Delayed",
    },
    {
      id: "16",
      airline: "Airline P",
      flight: "PP616",
      city: "Phoenix",
      date: "2024-12-08",
      status: "On Time",
    },
    {
      id: "17",
      airline: "Airline Q",
      flight: "QQ717",
      city: "San Francisco",
      date: "2024-12-09",
      status: "Cancelled",
    },
    {
      id: "18",
      airline: "Airline R",
      flight: "RR818",
      city: "Philadelphia",
      date: "2024-12-10",
      status: "Delayed",
    },
    {
      id: "19",
      airline: "Airline S",
      flight: "SS919",
      city: "Charlotte",
      date: "2024-12-11",
      status: "On Time",
    },
    {
      id: "20",
      airline: "Airline T",
      flight: "TT020",
      city: "Austin",
      date: "2024-12-12",
      status: "On Time",
    },
  ];

  // Пример списка рейсов для прилета
  const arrivalFlights = [
    {
      id: "21",
      airline: "Airline U",
      flight: "UU121",
      city: "Salt Lake City",
      date: "2024-11-23",
      status: "On Time",
    },
    {
      id: "22",
      airline: "Airline V",
      flight: "VV222",
      city: "San Antonio",
      date: "2024-11-24",
      status: "Delayed",
    },
    {
      id: "23",
      airline: "Airline W",
      flight: "WW323",
      city: "Columbus",
      date: "2024-11-25",
      status: "Cancelled",
    },
    {
      id: "24",
      airline: "Airline X",
      flight: "XX424",
      city: "Indianapolis",
      date: "2024-11-26",
      status: "On Time",
    },
    {
      id: "25",
      airline: "Airline Y",
      flight: "YY525",
      city: "Nashville",
      date: "2024-11-27",
      status: "Delayed",
    },
    {
      id: "26",
      airline: "Airline Z",
      flight: "ZZ626",
      city: "Baltimore",
      date: "2024-11-28",
      status: "On Time",
    },
    {
      id: "27",
      airline: "Airline AA",
      flight: "AAA727",
      city: "Washington",
      date: "2024-11-29",
      status: "Cancelled",
    },
    {
      id: "28",
      airline: "Airline BB",
      flight: "BBB828",
      city: "Kansas City",
      date: "2024-11-30",
      status: "Delayed",
    },
    {
      id: "29",
      airline: "Airline CC",
      flight: "CCC929",
      city: "St. Louis",
      date: "2024-12-01",
      status: "On Time",
    },
    {
      id: "30",
      airline: "Airline DD",
      flight: "DDD030",
      city: "Milwaukee",
      date: "2024-12-02",
      status: "On Time",
    },
    {
      id: "31",
      airline: "Airline EE",
      flight: "EEE131",
      city: "Cleveland",
      date: "2024-12-03",
      status: "Delayed",
    },
    {
      id: "32",
      airline: "Airline FF",
      flight: "FFF232",
      city: "Pittsburgh",
      date: "2024-12-04",
      status: "Cancelled",
    },
    {
      id: "33",
      airline: "Airline GG",
      flight: "GGG333",
      city: "Raleigh",
      date: "2024-12-05",
      status: "On Time",
    },
    {
      id: "34",
      airline: "Airline HH",
      flight: "HHH434",
      city: "Richmond",
      date: "2024-12-06",
      status: "On Time",
    },
    {
      id: "35",
      airline: "Airline II",
      flight: "III535",
      city: "Hartford",
      date: "2024-12-07",
      status: "Delayed",
    },
    {
      id: "36",
      airline: "Airline JJ",
      flight: "JJJ636",
      city: "Buffalo",
      date: "2024-12-08",
      status: "On Time",
    },
    {
      id: "37",
      airline: "Airline KK",
      flight: "KKK737",
      city: "Memphis",
      date: "2024-12-09",
      status: "Cancelled",
    },
    {
      id: "38",
      airline: "Airline LL",
      flight: "LLL838",
      city: "New Orleans",
      date: "2024-12-10",
      status: "Delayed",
    },
    {
      id: "39",
      airline: "Airline MM",
      flight: "MMM939",
      city: "Louisville",
      date: "2024-12-11",
      status: "On Time",
    },
    {
      id: "40",
      airline: "Airline NN",
      flight: "NNN040",
      city: "Oklahoma City",
      date: "2024-12-12",
      status: "On Time",
    },
  ];

  // Данные зависят от активной вкладки
  const flights = activeTab === "Вылет" ? departureFlights : arrivalFlights;

  // Фильтрация рейсов
  const applyFilters = () => {
    const filtered = flights.filter((flight) => {
      const matchesSearchQuery =
        flight.airline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flight.flight.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flight.city.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearchQuery;
    });

    if (filtered.length === 0) {
      Alert.alert("Нет рейсов", "Не найдено рейсов по вашему запросу.");
    } else {
      Alert.alert("Результаты найдены", `Найдено рейсов: ${filtered.length}`);
    }

    setFilteredFlights(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Заголовок "Табло рейсов" */}

      {/* Вкладки "Вылет" и "Прилет" */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Вылет" && styles.activeTab]}
          onPress={() => {
            setActiveTab("Вылет");
            setSearchQuery(""); // Очистка поля поиска при смене вкладки
            setFilteredFlights([]); // Очистка фильтрованных данных
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Вылет" && styles.activeTabText,
            ]}
          >
            Вылет
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Прилет" && styles.activeTab]}
          onPress={() => {
            setActiveTab("Прилет");
            setSearchQuery(""); // Очистка поля поиска при смене вкладки
            setFilteredFlights([]); // Очистка фильтрованных данных
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Прилет" && styles.activeTabText,
            ]}
          >
            Прилет
          </Text>
        </TouchableOpacity>
      </View>

      {/* Поле поиска */}
      <TextInput
        style={styles.searchInput}
        placeholder="Искать авиакомпанию, город, № рейса..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Кнопка "Фильтровать" */}
      <TouchableOpacity style={styles.filterButton} onPress={applyFilters}>
        <Text style={styles.filterButtonText}>Фильтровать</Text>
      </TouchableOpacity>

      {/* Табло рейсов */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.headerCell]}>Авиалиния</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Рейс</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Город</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Дата</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Статус</Text>
        </View>
        <FlatList
          data={filteredFlights.length > 0 ? filteredFlights : flights}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.airline}</Text>
              <Text style={styles.tableCell}>{item.flight}</Text>
              <Text style={styles.tableCell}>{item.city}</Text>
              <Text style={styles.tableCell}>{item.date}</Text>
              <Text
                style={[
                  styles.tableCell,
                  item.status === "On Time" && styles.statusOnTime,
                  item.status === "Delayed" && styles.statusDelayed,
                  item.status === "Cancelled" && styles.statusCancelled,
                ]}
              >
                {item.status}
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
  mainHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
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
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: "#007AFF",
    marginRight: 8,
  },
  dateButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginHorizontal: 4,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
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
