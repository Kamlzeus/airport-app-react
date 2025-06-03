import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Alert,
  Modal,
  TextInput,
  Linking,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const cityToIATA = {
  // Кыргызстан
  бишкек: "FRU",
  bishkek: "FRU",
  ош: "OSS",
  osh: "OSS",

  // Казахстан
  алматы: "ALA",
  almaty: "ALA",
  астана: "NQZ",
  "нур-султан": "NQZ",
  astana: "NQZ",
  nursultan: "NQZ",

  // Россия
  москва: "MOW",
  moscow: "MOW",
  "санкт-петербург": "LED",
  питер: "LED",
  "saint petersburg": "LED",
  новосибирск: "OVB",
  novosibirsk: "OVB",
  екатеринбург: "SVX",
  yekaterinburg: "SVX",
  казань: "KZN",
  kazan: "KZN",
  самара: "KUF",
  samara: "KUF",
  уфа: "UFA",
  ufa: "UFA",
  красноярск: "KJA",
  krasnoyarsk: "KJA",
  сочи: "AER",
  sochi: "AER",
  ростов: "ROV",
  rostov: "ROV",
  владивосток: "VVO",
  vladivostok: "VVO",
  иркутск: "IKT",
  irkutsk: "IKT",
  омск: "OMS",
  omsk: "OMS",
  пермь: "PEE",
  perm: "PEE",
  волгоград: "VOG",
  volgograd: "VOG",
  калининград: "KGD",
  kaliningrad: "KGD",
  "нижний новгород": "GOJ",
  "nizhny novgorod": "GOJ",
  тюмень: "TJM",
  tyumen: "TJM",
  челябинск: "CEK",
  chelyabinsk: "CEK",
  томск: "TOF",
  tomsk: "TOF",
  архангельск: "ARH",
  arkhangelsk: "ARH",

  // Европа
  лондон: "LON",
  london: "LON",
  париж: "PAR",
  paris: "PAR",
  берлин: "BER",
  berlin: "BER",
  амстердам: "AMS",
  amsterdam: "AMS",
  рим: "ROM",
  rome: "ROM",
  мадрид: "MAD",
  madrid: "MAD",
  вена: "VIE",
  vienna: "VIE",
  варшава: "WAW",
  warsaw: "WAW",
  будапешт: "BUD",
  budapest: "BUD",
  стокгольм: "STO",
  stockholm: "STO",
  хельсинки: "HEL",
  helsinki: "HEL",
  осло: "OSL",
  oslo: "OSL",
  копенгаген: "CPH",
  copenhagen: "CPH",
  женева: "GVA",
  geneva: "GVA",
  цюрих: "ZRH",
  zurich: "ZRH",
  брюссель: "BRU",
  brussels: "BRU",
  лиссабон: "LIS",
  lisbon: "LIS",
  афины: "ATH",
  athens: "ATH",
  дублин: "DUB",
  dublin: "DUB",
  флоренция: "FLR",
  florence: "FLR",
  неаполь: "NAP",
  naples: "NAP",
  малага: "AGP",
  malaga: "AGP",
  барселона: "BCN",
  barcelona: "BCN",
  милан: "MIL",
  milan: "MIL",
  венеция: "VCE",
  venice: "VCE",
  манчестер: "MAN",
  manchester: "MAN",

  // Азия
  дубай: "DXB",
  dubai: "DXB",
  "абу-даби": "AUH",
  "abu dhabi": "AUH",
  стамбул: "IST",
  istanbul: "IST",
  анкара: "ESB",
  ankara: "ESB",
  бангкок: "BKK",
  bangkok: "BKK",
  сингапур: "SIN",
  singapore: "SIN",
  токио: "TYO",
  tokyo: "TYO",
  осака: "KIX",
  osaka: "KIX",
  сеул: "SEL",
  seoul: "SEL",
  пекин: "BJS",
  beijing: "BJS",
  шанхай: "SHA",
  shanghai: "SHA",
  гоа: "GOI",
  goa: "GOI",
  дели: "DEL",
  delhi: "DEL",
  мумбаи: "BOM",
  mumbai: "BOM",
  катманду: "KTM",
  kathmandu: "KTM",
  манила: "MNL",
  manila: "MNL",
  кочи: "COK",
  cochin: "COK",

  // США и Канада
  "нью-йорк": "NYC",
  "new york": "NYC",
  "лос-анджелес": "LAX",
  "los angeles": "LAX",
  чикаго: "CHI",
  chicago: "CHI",
  "сан-франциско": "SFO",
  "san francisco": "SFO",
  майами: "MIA",
  miami: "MIA",
  "лас-вегас": "LAS",
  "las vegas": "LAS",
  вашингтон: "WAS",
  washington: "WAS",
  бостон: "BOS",
  boston: "BOS",
  сиэтл: "SEA",
  seattle: "SEA",
  орландо: "MCO",
  orlando: "MCO",
  торонто: "YTO",
  toronto: "YTO",
  ванкувер: "YVR",
  vancouver: "YVR",
  монреаль: "YMQ",
  montreal: "YMQ",

  // Южная Америка
  "рио-де-жанейро": "RIO",
  "rio de janeiro": "RIO",
  "сан-паулу": "SAO",
  "sao paulo": "SAO",
  "буэнос-айрес": "BUE",
  "buenos aires": "BUE",
  лима: "LIM",
  lima: "LIM",
  богота: "BOG",
  bogota: "BOG",

  // Африка
  кайр: "CAI",
  cairo: "CAI",
  лагос: "LOS",
  lagos: "LOS",
  капштадт: "CPT",
  "cape town": "CPT",
  йоханнесбург: "JNB",
  johannesburg: "JNB",
  найроби: "NBO",
  nairobi: "NBO",
};

const formatAviasalesLink = (item) => {
  const origin = item.origin;
  const destination = item.destination;

  const dep = new Date(item.depart_date);
  const ret = new Date(item.return_date);

  const formatDate = (d) =>
    `${String(d.getDate()).padStart(2, "0")}${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}`;

  const depStr = formatDate(dep);
  const retStr = formatDate(ret);

  return `https://aviasales.ru/search/${origin}${depStr}${destination}${retStr}1`;
};

const transformCity = (cityInput) => {
  const lower = cityInput.toLowerCase().trim();
  return cityToIATA[lower] || cityInput.toUpperCase();
};

const TicketsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);
  const [flightClass, setFlightClass] = useState(null);
  const [showClassModal, setShowClassModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);

  const classOptions = [
    { label: t("Класс.Эконом"), value: "economy" },
    { label: t("Класс.Бизнес"), value: "business" },
    { label: t("Класс.Первый класс"), value: "first" },
  ];
  const currency = "kgs";

  const searchTickets = async () => {
    if (!from || !to || !departureDate || !returnDate || !flightClass) {
      Alert.alert(
        t("Ошибка"),
        t("Пожалуйста, заполните все обязательные поля.")
      );
      return;
    }

    const formattedStart = departureDate.toISOString().split("T")[0];
    const formattedEnd = returnDate.toISOString().split("T")[0];

    const origin = transformCity(from);
    const destination = transformCity(to);

    setLoading(true);
    try {
      const response = await axios.get(
        "http://192.168.68.112:8000/api/flights/search/",
        {
          params: {
            origin,
            destination,
            start_date: formattedStart,
            end_date: formattedEnd,
            currency,
            flight_class: flightClass.value,
          },
        }
      );
      const data = response.data?.data || [];
      setFlights(data);
    } catch (error) {
      console.log(
        "Ошибка поиска билетов:",
        error?.response?.status || error.message
      );
      setFlights([]);
    }
    setLoading(false);
  };

  const handleDepartureChange = (event, date) => {
    setShowDeparturePicker(false);
    if (event.type === "set" && date) setDepartureDate(date);
  };

  const handleReturnChange = (event, date) => {
    setShowReturnPicker(false);
    if (event.type === "set" && date) setReturnDate(date);
  };

  const renderClassModal = () => (
    <Modal visible={showClassModal} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t("Выберите класс перелёта")}</Text>
          {classOptions.map((cls) => (
            <TouchableOpacity
              key={cls.value}
              style={styles.modalItem}
              onPress={() => {
                setFlightClass(cls);
                setShowClassModal(false);
              }}
            >
              <Text style={styles.modalText}>{cls.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.modalItem, { backgroundColor: "#ddd" }]}
            onPress={() => setShowClassModal(false)}
          >
            <Text style={styles.modalText}>{t("Отмена")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const renderFlight = ({ item }) => (
    <View style={styles.flightCard}>
      <Text style={styles.flightText}>
        {item.origin} → {item.destination}
      </Text>
      <Text style={styles.flightText}>
        {item.depart_date} – {item.return_date}
      </Text>
      <Text style={styles.flightText}>
        {t("Класс")}:{" "}
        {
          [t("Класс.Эконом"), t("Класс.Бизнес"), t("Класс.Первый класс")][
            item.trip_class
          ]
        }
      </Text>
      <Text style={styles.flightText}>
        {t("Цена")}: {item.value} {currency.toUpperCase()}
      </Text>
      <Text style={styles.flightText}>
        {t("Пересадок")}: {item.number_of_changes}
      </Text>
      <Text style={styles.flightText}>
        {t("Площадка")}: {item.gate}
      </Text>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => {
          navigation.navigate("TicketPurchase", {
            purchasedFlight: {
              from: item.origin,
              to: item.destination,
              date: `${item.depart_date} – ${item.return_date}`,
              class: [
                t("Класс.Эконом"),
                t("Класс.Бизнес"),
                t("Класс.Первый класс"),
              ][item.trip_class],
              price: `${item.value} ${currency.toUpperCase()}`,
            },
          });
        }}
      >
        <Text style={styles.buyButtonText}>{t("Купить")}</Text>
      </TouchableOpacity>
    </View>
  );

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
        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>{t("Поиск авиабилетов")}</Text>

            <TextInput
              style={styles.input}
              placeholder={t("Откуда (IATA или город)")}
              value={from}
              onChangeText={setFrom}
            />
            <TextInput
              style={styles.input}
              placeholder={t("Куда (IATA или город)")}
              value={to}
              onChangeText={setTo}
            />

            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDeparturePicker(true)}
            >
              <Ionicons name="calendar-outline" size={20} color="gray" />
              <Text style={styles.dateText}>
                {t("Дата отправления")}:{" "}
                {departureDate.toISOString().split("T")[0]}
              </Text>
            </TouchableOpacity>
            {showDeparturePicker && (
              <DateTimePicker
                value={departureDate}
                mode="date"
                display="default"
                onChange={handleDepartureChange}
              />
            )}

            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowReturnPicker(true)}
            >
              <Ionicons name="calendar-outline" size={20} color="gray" />
              <Text style={styles.dateText}>
                {t("Дата возвращения")}:{" "}
                {returnDate.toISOString().split("T")[0]}
              </Text>
            </TouchableOpacity>
            {showReturnPicker && (
              <DateTimePicker
                value={returnDate}
                mode="date"
                display="default"
                onChange={handleReturnChange}
              />
            )}

            <TouchableOpacity
              style={[styles.input, { justifyContent: "center" }]}
              onPress={() => setShowClassModal(true)}
            >
              <Text
                style={{ fontSize: 16, color: flightClass ? "black" : "gray" }}
              >
                {flightClass
                  ? flightClass.label
                  : t("Выберите класс (Эконом, Бизнес, Первый класс)")}
              </Text>
            </TouchableOpacity>
            {renderClassModal()}

            <View style={[styles.input, { backgroundColor: "#f0f0f0" }]}>
              <Text style={{ fontSize: 16, color: "gray" }}>
                {t("Валюта:")} {currency.toUpperCase()}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.searchButton}
              onPress={searchTickets}
            >
              <Text style={styles.searchButtonText}>{t("Найти билеты")}</Text>
            </TouchableOpacity>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#007AFF"
                style={{ marginTop: 20 }}
              />
            )}

            {flights.length > 0 && (
              <FlatList
                data={flights}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderFlight}
                contentContainerStyle={{ paddingBottom: 20 }}
                scrollEnabled={false}
              />
            )}

            {!loading && flights.length === 0 && (
              <Text style={styles.noResultsText}>
                {t("Нет найденных билетов")}
              </Text>
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 24,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    paddingVertical: 14,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 14,
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  searchButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  flightCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginVertical: 12,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: "#007AFF",
  },
  flightText: {
    fontSize: 15,
    marginBottom: 6,
    color: "#333",
  },
  noResultsText: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fefefe",
    width: "85%",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 14,
  },
  modalItem: {
    width: "100%",
    padding: 14,
    marginVertical: 6,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#007AFF",
  },
  modalText: {
    color: "white",
    fontSize: 16,
  },
  buyButton: {
    marginTop: 12,
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default TicketsScreen;
