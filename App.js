import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import QrScreen from "./screens/QrScreen";
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

function SettingsDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Профиль" component={ProfileScreen} />
      <Drawer.Screen name="Мой билет" component={TicketsScreen} />
      <Drawer.Screen
        name="Уведомления"
        component={NotificationSettingsScreen}
      />
    </Drawer.Navigator>
  );
}

function MainTabs() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
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
              case "Карта":
                iconName = "map-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "Такси":
                iconName = "car-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "ChatBot":
                iconName = "chatbubbles-outline";
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
      <Tab.Screen name={t("ChatBot")} component={QrScreen} />
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
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="Назад"
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
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TicketPurchase"
        component={TicketPurchaseScreen}
        options={{ headerShown: true, title: "Покупка билета" }}
      />

      <Stack.Screen
        name="Уведомления"
        component={NotificationSettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Все услуги"
        component={AllServicesScreen}
        options={{ title: "Все услуги" }}
      />
      <Stack.Screen
        name="EcoTravel"
        component={EcoTravelScreen}
        options={{ title: "Экологические путешествия" }}
      />
      <Stack.Screen
        name="АрендаМашин"
        component={CarRentalScreen}
        options={{ title: "Аренда машин" }}
      />
      <Stack.Screen
        name="БронированиеОтеля"
        component={HotelListScreen} // Устанавливаем HotelListScreen как первый экран бронирования
        options={{ title: "Бронирование отелей" }}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetailsScreen} // Экран деталей отеля
        options={{ title: "Детали отеля" }}
      />
      <Stack.Screen
        name="BookingScreen"
        component={HotelBookingScreen} // Экран бронирования
        options={{ title: "Бронирование" }}
      />
      <Stack.Screen
        name="ShopsScreen"
        component={ShopsScreen}
        options={{ title: "Магазины" }}
      />
      <Stack.Screen
        name="CafesScreen"
        component={CafesScreen}
        options={{ title: "Кафе" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const { t } = useTranslation();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name={t("Главная")}
            component={MainStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name={t("Профиль")}
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
            name={t("Мой билет")}
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
            name={t("Уведомления")}
            component={NotificationSettingsScreen}
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
    </AuthProvider>
  );
}
