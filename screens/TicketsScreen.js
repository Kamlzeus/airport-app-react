import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const airportsData = [
  { id: "1", name: "Манас (FRU)", city: "Бишкек" },
  { id: "2", name: "Ош (OSS)", city: "Ош" },
  { id: "3", name: "Иссык-Куль (IKU)", city: "Тамчи" },
  { id: "4", name: "Баткен (БТК)", city: "Баткен" },
  { id: "5", name: "Джалал-Абад (JBD)", city: "Джалал-Абад" },
];
const flightsData = [
  {
    id: "1",
    from: "Бишкек",
    to: "Ош",
    date: "2025-13-04",
    class: "Эконом",
    price: "$50",
  },
  {
    id: "2",
    from: "Бишкек",
    to: "Ош",
    date: "2025-03-10",
    class: "Бизнес",
    price: "$100",
  },
  {
    id: "3",
    from: "Ош",
    to: "Бишкек",
    date: "2025-03-12",
    class: "Эконом",
    price: "$50",
  },
  {
    id: "4",
    from: "Бишкек",
    to: "Иссык-Куль",
    date: "2025-03-15",
    class: "Эконом",
    price: "$70",
  },
  {
    id: "5",
    from: "Ош",
    to: "Иссык-Куль",
    date: "2025-03-18",
    class: "Бизнес",
    price: "$120",
  },
  {
    id: "6",
    from: "Иссык-Куль",
    to: "Бишкек",
    date: "2025-03-20",
    class: "Первый класс",
    price: "$200",
  },
  {
    id: "7",
    from: "Джалал-Абад",
    to: "Бишкек",
    date: "2025-03-22",
    class: "Эконом",
    price: "$55",
  },
  {
    id: "8",
    from: "Баткен",
    to: "Ош",
    date: "2025-03-25",
    class: "Бизнес",
    price: "$90",
  },
  {
    id: "9",
    from: "Бишкек",
    to: "Джалал-Абад",
    date: "2025-03-28",
    class: "Эконом",
    price: "$60",
  },
  {
    id: "10",
    from: "Ош",
    to: "Баткен",
    date: "2025-03-30",
    class: "Эконом",
    price: "$45",
  },
  {
    id: "11",
    from: "Бишкек",
    to: "Баткен",
    date: "2025-04-01",
    class: "Первый класс",
    price: "$250",
  },
  {
    id: "12",
    from: "Иссык-Куль",
    to: "Ош",
    date: "2025-04-05",
    class: "Эконом",
    price: "$80",
  },
  {
    id: "13",
    from: "Ош",
    to: "Иссык-Куль",
    date: "2025-04-07",
    class: "Бизнес",
    price: "$140",
  },
  {
    id: "14",
    from: "Бишкек",
    to: "Ош",
    date: "2025-04-10",
    class: "Эконом",
    price: "$50",
  },
  {
    id: "15",
    from: "Бишкек",
    to: "Ош",
    date: "2025-04-10",
    class: "Бизнес",
    price: "$110",
  },
  {
    id: "16",
    from: "Бишкек",
    to: "Джалал-Абад",
    date: "2025-04-12",
    class: "Первый класс",
    price: "$180",
  },
  {
    id: "17",
    from: "Бишкек",
    to: "Баткен",
    date: "2025-04-15",
    class: "Эконом",
    price: "$95",
  },
  {
    id: "18",
    from: "Джалал-Абад",
    to: "Ош",
    date: "2025-04-18",
    class: "Бизнес",
    price: "$105",
  },
  {
    id: "19",
    from: "Иссык-Куль",
    to: "Бишкек",
    date: "2025-04-20",
    class: "Эконом",
    price: "$75",
  },
  {
    id: "20",
    from: "Ош",
    to: "Бишкек",
    date: "2025-04-25",
    class: "Первый класс",
    price: "$220",
  },
  {
    id: "21",
    from: "Бишкек",
    to: "Ош",
    date: "2025-04-30",
    class: "Первый класс",
    price: "$260",
  },
];

const TicketsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const classOptions = [t("Эконом"), t("Бизнес"), t("Первый класс")];
  const passengerOptions = [1, 2, 3, 4, 5, 6];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const [departureDate, setDepartureDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Эконом");

  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPassengersModal, setShowPassengersModal] = useState(false);
  const [showFlights, setShowFlights] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleFromChange = (text) => {
    setFrom(text);
    if (text.length > 0) {
      setFilteredAirports(
        airportsData.filter((airport) =>
          airport.city.toLowerCase().includes(text.toLowerCase())
        )
      );
      setShowFromList(true);
    } else {
      setShowFromList(false);
    }
  };
  const searchTickets = () => {
    const formattedDate = departureDate.toISOString().split("T")[0];
    const results = flightsData.filter(
      (flight) =>
        flight.from === from && flight.to === to && flight.class === classType
    );
    if (results.length === 0) {
      Alert.alert(
        t("Рейсов не найдено"),
        t("Попробуйте изменить параметры поиска.")
      );
    }

    setFilteredFlights(results);
    setShowFlights(true);
  };

  const handleToChange = (text) => {
    setTo(text);
    if (text.length > 0) {
      setFilteredDestinations(
        airportsData.filter((airport) =>
          airport.city.toLowerCase().includes(text.toLowerCase())
        )
      );
      setShowToList(true);
    } else {
      setShowToList(false);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://triptokyrgyzstan.com/sites/default/files/styles/hero/public/images/2019-04/slide-1960x857-07.jpg.webp?itok=PMx4TeLB",
      }}
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0, 150, 255, 0.6)", "rgba(255, 255, 255, 1)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          {/* Блок поиска */}
          <View style={styles.searchBox}>
            <View style={styles.inputContainer}>
              <Ionicons name="search-outline" size={20} color="gray" />
              <TextInput
                style={styles.input}
                placeholder={t("Откуда")}
                value={from}
                onChangeText={handleFromChange}
              />
            </View>
            {showFromList && (
              <FlatList
                data={filteredAirports}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => {
                      setFrom(item.city);
                      setShowFromList(false);
                    }}
                  >
                    <Text>
                      {item.city} ({item.name})
                    </Text>
                  </TouchableOpacity>
                )}
              />
            )}

            <TextInput
              style={styles.input}
              placeholder={t("Куда")}
              value={to}
              onChangeText={handleToChange}
            />

            {showToList && (
              <FlatList
                data={filteredDestinations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => {
                      setTo(item.city);
                      setShowToList(false);
                    }}
                  >
                    <Text>
                      {item.city} ({item.name})
                    </Text>
                  </TouchableOpacity>
                )}
              />
            )}

            {/* Дата + пассажиры */}
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={[styles.optionButton, styles.dateButton]}
                onPress={() => setShowDatePicker(true)}
              >
                <Ionicons name="calendar-outline" size={20} color="gray" />
                <Text>
                  {departureDate
                    ? departureDate.toLocaleDateString()
                    : t("Выбрать даты")}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => setShowPassengersModal(true)}
              >
                <Ionicons name="person-outline" size={20} color="gray" />
                <Text>
                  {passengers}, {classType}
                </Text>
              </TouchableOpacity>
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={departureDate}
                mode="date"
                display="default"
                onChange={(event, date) => {
                  setShowDatePicker(false);
                  if (date) setDepartureDate(date);
                }}
              />
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={searchTickets}>
          <Text style={styles.searchButtonText}>{t("Найти билеты")}</Text>
        </TouchableOpacity>
        {showFlights && (
          <View style={styles.flightsContainer}>
            <FlatList
              data={filteredFlights}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.flightCard}
                  onPress={() =>
                    navigation.navigate("TicketPurchase", {
                      purchasedFlight: item,
                    })
                  }
                >
                  <Text>
                    {item.from} → {item.to}
                  </Text>
                  <Text>{item.date}</Text>
                  <Text>
                    {item.class} | {item.price}
                  </Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={styles.flightsList}
            />
          </View>
        )}

        {/* Модальное окно для выбора пассажиров и класса */}
        <Modal visible={showPassengersModal} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {t("Выберите количество пассажиров")}
              </Text>
              {passengerOptions.map((num) => (
                <TouchableOpacity
                  key={num}
                  style={styles.modalItem}
                  onPress={() => {
                    setPassengers(num);
                    setShowPassengersModal(false);
                  }}
                >
                  <Text>
                    {num} {t("пассажир(ов)")}
                  </Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.modalTitle}>{t("Выберите класс")}</Text>
              {classOptions.map((cls) => (
                <TouchableOpacity
                  key={cls}
                  style={styles.modalItem}
                  onPress={() => {
                    setClassType(cls);
                    setShowPassengersModal(false);
                  }}
                >
                  <Text>{cls}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center" },
  gradient: { flex: 1, paddingHorizontal: 20, justifyContent: "center" },
  container: { alignItems: "center" },
  searchBox: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    width: "90%",
  },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  optionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    justifyContent: "center",
  },
  searchButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    margin: 20,
  },
  searchButtonText: { color: "white", fontSize: 18 },
  flightsContainer: { width: "90%", margin: 20 },
  flightCard: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10 },
  modalItem: { padding: 10 },
});

export default TicketsScreen;
