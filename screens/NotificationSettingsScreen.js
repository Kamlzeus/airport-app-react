import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native"; // Добавлен useNavigation
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // ✅ Импорт MaterialCommunityIcons
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NotificationSettingsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { notifications = false, setNotifications = () => {} } =
    route.params || {};

  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const requestNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
      if (newStatus !== "granted") {
        alert(t("Разрешение на уведомления не предоставлено."));
        return false;
      }
    }
    return true;
  };

  const scheduleNotification = async () => {
    const permissionGranted = await requestNotificationPermission();
    if (!permissionGranted) return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: t("Напоминание"),
        body: t("У вас осталось 2 часа до рейса!"),
        sound: true,
      },
      trigger: {
        hour: date.getHours(),
        minute: date.getMinutes(),
        repeats: false,
      },
    });

    alert(t("Уведомление запланировано на ") + date.toLocaleTimeString());
    setNotificationsEnabled(true);
  };
  const disableNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setNotificationsEnabled(false);
    alert(t("Все уведомления отключены."));
  };

  useEffect(() => {
    requestNotificationPermission();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.description}>
        {t("Выберите время для напоминания перед рейсом.")}
      </Text>

      <TouchableOpacity
        style={styles.timePickerButton}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.buttonText}>{t("Выбрать время уведомления")}</Text>
        <MaterialCommunityIcons name="clock-outline" size={24} color="white" />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity
        style={styles.scheduleButton}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>{t("Запланировать напоминание")}</Text>
      </TouchableOpacity>

      {notificationsEnabled ? (
        <TouchableOpacity
          style={styles.disableButton}
          onPress={disableNotifications}
        >
          <Text style={styles.toggleButtonText}>
            {t("Выключить уведомления")}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.enableButton}
          onPress={scheduleNotification}
        >
          <Text style={styles.toggleButtonText}>
            {t("Включить уведомления")}
          </Text>
        </TouchableOpacity>
      )}

      <Text style={styles.notificationStatus}>
        {t("Уведомления")}{" "}
        {notificationsEnabled ? t("включены") : t("выключены")}
      </Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#007AFF",
    fontSize: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    marginRight: 65,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 160,
    marginBottom: 20,
  },
  timePickerButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    marginRight: 10,
    textTransform: "uppercase",
  },
  scheduleButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  enableButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  disableButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  toggleButtonText: {
    fontSize: 18,
    color: "white",
  },
  notificationStatus: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
});

export default NotificationSettingsScreen;
