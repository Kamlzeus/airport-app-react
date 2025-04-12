import "fast-text-encoding";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Support for defaultProps"]);

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import FlyflyScreen from "./screens/FlyflyScreen";
import TicketsScreen from "./screens/TicketsScreen";
import NotificationSettingsScreen from "./screens/NotificationSettingsScreen";
import AuthScreen from "./screens/AuthScreen";
import AllServicesScreen from "./screens/AllServicesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyTicketScreen from "./screens/MyTicketScreen";
import TicketPurchaseScreen from "./screens/TicketPurchaseScreen";
import StoryScreen from "./screens/StoryScreen";
import { AuthProvider, useAuth } from "./context/AuthContext";
import TaxiTransportScreen from "./screens/TaxiTransportScreen";
import CarRentalScreen from "./screens/CarRentalScreen";
import HotelBookingScreen from "./screens/HotelBookingScreen";
import EcoTravelScreen from "./screens/EcoTravelScreen";
import HotelListScreen from "./screens/HotelListScreen";
import HotelDetailsScreen from "./screens/HotelDetailsScreen";
import ShopsScreen from "./screens/ShopsScreen";
import CafesScreen from "./screens/CafesScreen";
import "./i18n"; // Подключаем локализацию
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { resources } from "./i18n"; // Импортируем переводы
import ProfileSettings from "./screens/ProfileSettings";
import EditScreen from "./screens/EditScreen";
import InfoScreen from "./screens/InfoScreen";
import TripHistoryScreen from "./screens/TripHistoryScreen";
import SplashScreen from "./screens/SplashScreen";
import TipDetailScreen from "./screens/TipDetailScreen";
import ShopDetailsScreen from "./screens/ShopDetailsScreen";
import CafeDetailsScreen from "./screens/CafeDetailsScreen";
import ChatScreen from "./screens/ChatScreen";
import InfoDetailScreen from "./screens/InfoDetailScreen";
import { PurchasedTicketsProvider } from "./context/PurchasedTicketsContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const { t } = useTranslation();
  const mainTabName = t("Главная");

  return (
    <Tab.Navigator
      initialRouteName={mainTabName}
      screenOptions={({ route }) => {
        // Находим ключ из русской локализации
        const routeKey = Object.keys(resources["ru"].translation).find(
          (key) => t(key) === route.name
        );

        return {
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (routeKey) {
              case "Главная":
                iconName = "home-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "Рейсы":
                iconName = "airplane-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "Карта":
                iconName = "map-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "Такси":
                iconName = "car-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "Билеты":
                iconName = "ticket-alt";
                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              default:
                return null;
            }
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            textAlign: "center",
            marginBottom: 4,
          },
          tabBarStyle: {
            height: 80,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 10,
          },
        };
      }}
    >
      <Tab.Screen name={t("Рейсы")} component={FlyflyScreen} />

      <Tab.Screen name={t("Билеты")} component={TicketsScreen} />
      <Tab.Screen
        name={t("Главная")}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.openDrawer()} // Открытие бокового меню
            />
          ),
          headerRight: () => <LanguageSwitcher />,
          headerTitle: t("Главная"),
          headerTitleAlign: "center", // Центрирование заголовка
        })}
      />
      <Tab.Screen name={t("Такси")} component={TaxiTransportScreen} />
      <Tab.Screen name={t("Карта")} component={MapScreen} />
    </Tab.Navigator>
  );
}

function MainStack() {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();
  const [showSplash, setShowSplash] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const splashSeen = await AsyncStorage.getItem("splashShown");
        if (!splashSeen) {
          setShowSplash(true);
        }
      } catch (e) {
        console.error("Ошибка чтения splashShown", e);
      } finally {
        setLoading(false);
      }
    };
    checkFirstLaunch();
  }, []);

  const handleSplashEnd = async () => {
    await AsyncStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  if (loading) return null;

  if (showSplash) {
    return <SplashScreen onEnd={handleSplashEnd} />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {isLoggedIn ? (
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      )}

      {/* Остальные экраны */}
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoDetail"
        component={InfoDetailScreen}
        options={{
          title: t("Информация"),
          headerBackTitle: t("Назад"),
        }}
      />

      <Stack.Screen name="CafeDetails" component={CafeDetailsScreen} />
      <Stack.Screen name="ShopDetails" component={ShopDetailsScreen} />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{
          title: t("Редактировать профиль"),
          headerBackTitle: t("Назад"),
        }}
      />
      <Stack.Screen
        name="TipDetail"
        component={TipDetailScreen}
        options={{ title: t("Советы"), headerBackTitle: t("Назад") }}
      />
      <Stack.Screen
        name="TicketPurchase"
        component={TicketPurchaseScreen}
        options={{
          headerShown: true,
          title: t("Покупка билета"),
          headerBackTitle: t("Назад"),
        }}
      />
      <Stack.Screen
        name="NotificationSettingsScreen"
        component={NotificationSettingsScreen}
        options={{
          title: t("Уведомления"),
          headerBackTitle: t("Назад"),
        }}
      />
      <Stack.Screen
        name="Все услуги"
        component={AllServicesScreen}
        options={{ title: t("Все услуги"), headerBackTitle: t("Назад") }}
      />
      <Stack.Screen
        name="EcoTravel"
        component={EcoTravelScreen}
        options={{
          title: "Экологические путешествия",
          headerBackTitle: t("Назад"),
        }}
      />
      <Stack.Screen
        name="АрендаМашин"
        component={CarRentalScreen}
        options={{ title: "Аренда машин" }}
      />
      <Stack.Screen
        name="БронированиеОтеля"
        component={HotelListScreen}
        options={{ title: "Бронирование отелей" }}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetailsScreen}
        options={{ title: "Детали отеля" }}
      />
      <Stack.Screen
        name="BookingScreen"
        component={HotelBookingScreen}
        options={{ title: "Бронирование" }}
      />
      <Stack.Screen
        name="TaxiTransportScreen"
        component={TaxiTransportScreen}
        options={{ title: t("Такси"), headerBackTitle: t("Назад") }}
      />

      <Stack.Screen
        name="ShopsScreen"
        component={ShopsScreen}
        options={{ title: t("Магазины"), headerBackTitle: t("Назад") }}
      />
      <Stack.Screen
        name="CafesScreen"
        component={CafesScreen}
        options={{ title: t("Кафе"), headerBackTitle: t("Назад") }}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ title: t("Информация"), headerBackTitle: t("Назад") }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: t("Чат-бот"), headerBackTitle: t("Назад") }}
      />
    </Stack.Navigator>
  );
}

function MainDrawer() {
  const { t } = useTranslation(); // Вынес `t()` сюда

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Главная"
        component={MainStack}
        options={{ headerShown: false, title: t("Главная") }}
      />
      <Drawer.Screen
        name="Мой профиль"
        component={ProfileScreen}
        options={{
          title: t("Мой профиль"),
          headerLeft: ({ navigation }) => (
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="История Поездок"
        component={TripHistoryScreen}
        options={{
          title: t("История Поездок"),
          headerLeft: ({ navigation }) => (
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Предстоящие поездки"
        component={MyTicketScreen}
        options={{
          title: t("Предстоящие поездки"),
          headerLeft: ({ navigation }) => (
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Настройки профиля"
        component={ProfileSettings}
        options={{
          title: t("Настройки профиля"),
          headerLeft: ({ navigation }) => (
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const { t } = useTranslation();
  return (
    <AuthProvider>
      <PurchasedTicketsProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name={t("Главная")}
              component={MainStack}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name={t("Мой профиль")}
              component={ProfileScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="menu-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.openDrawer()} // Открытие бокового меню
                  />
                ),
              })}
            />
            <Drawer.Screen
              name={t("История Поездок")}
              component={TripHistoryScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="menu-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.openDrawer()} // Открытие бокового меню
                  />
                ),
              })}
            />
            <Drawer.Screen
              name={t("Предстоящие поездки")}
              component={MyTicketScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="menu-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.openDrawer()} // Открытие бокового меню
                  />
                ),
              })}
            />
            <Drawer.Screen
              name={t("Настройки профиля")}
              component={ProfileSettings}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="menu-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.openDrawer()} // Открытие бокового меню
                  />
                ),
              })}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PurchasedTicketsProvider>
    </AuthProvider>
  );
}
