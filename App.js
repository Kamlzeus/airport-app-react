import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import FlightsScreen from "./screens/FlightsScreen";
import QrScreen from "./screens/QrScreen";
import TicketsScreen from "./screens/TicketsScreen";
import NotificationSettingsScreen from "./screens/NotificationSettingsScreen";
import AuthScreen from "./screens/AuthScreen";
import AllServicesScreen from "./screens/AllServicesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CallEmployeeScreen from "./screens/CallEmployeeScreen";
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
      <Drawer.Screen name="Вызов сотрудника" component={CallEmployeeScreen} />
      <Drawer.Screen
        name="Уведомления"
        component={NotificationSettingsScreen}
      />
    </Drawer.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Главная") {
            iconName = "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Карта") {
            iconName = "map-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Рейсы") {
            iconName = "airplane-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "QR") {
            iconName = "qr-code-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Билеты") {
            iconName = "ticket-alt";
            return <FontAwesome5 name={iconName} size={size} color={color} />;
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
      })}
    >
      <Tab.Screen name="QR" component={QrScreen} />
      <Tab.Screen name="Рейсы" component={FlightsScreen} />
      <Tab.Screen
        name="Главная"
        component={HomeScreen}
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
          headerTitle: "Главная",
          headerTitleAlign: "center", // Центрирование заголовка
        })}
      />
      <Tab.Screen name="Карта" component={MapScreen} />
      <Tab.Screen name="Билеты" component={TicketsScreen} />
    </Tab.Navigator>
  );
}

function MainStack() {
  const { isLoggedIn } = useAuth();
  return (
    <Stack.Navigator>
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EcoTravel"
        component={EcoTravelScreen}
        options={{ title: "Экологические путешествия" }}
      />
      <Stack.Screen
        name="ТаксиТранспорт"
        component={TaxiTransportScreen}
        options={{ title: "Такси и транспорт" }}
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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Главная"
            component={MainStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Профиль"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Мой билет"
            component={MyTicketScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Вызов сотрудника"
            component={CallEmployeeScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Уведомления"
            component={NotificationSettingsScreen}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
