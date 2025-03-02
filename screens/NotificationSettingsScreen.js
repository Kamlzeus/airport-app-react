import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NotificationSettingsScreen = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
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

  const sendInstantNotification = async (message) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: t("Подтверждение"),
        body: message,
        sound: true,
      },
      trigger: null, // Отправить мгновенное уведомление
    });
  };

  const scheduleNotification = async () => {
    const permissionGranted = await requestNotificationPermission();
    if (!permissionGranted) return;

    const triggerTime = new Date(date);
    triggerTime.setSeconds(0);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: t("Напоминание"),
        body: t("У вас осталось 2 часа до рейса!"),
        sound: true,
      },
      trigger: {
        hour: triggerTime.getHours(),
        minute: triggerTime.getMinutes(),
        repeats: false,
      },
    });

    await sendInstantNotification(
      t("Уведомление успешно запланировано на ") +
        triggerTime.toLocaleTimeString()
    );
  };

  const toggleNotifications = async () => {
    setNotificationEnabled((prev) => !prev);
    if (notificationEnabled) {
      await Notifications.cancelAllScheduledNotificationsAsync();
      alert(t("Все уведомления отключены."));
    } else {
      await scheduleNotification();
    }
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
      <Text style={styles.title}>{t("Настройка уведомлений")}</Text>
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
          onChange={onChange}
        />
      )}

      <TouchableOpacity
        style={styles.scheduleButton}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>{t("Запланировать напоминание")}</Text>
      </TouchableOpacity>

      <View style={styles.notificationSection}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            notificationEnabled ? styles.enabled : styles.disabled,
          ]}
          onPress={toggleNotifications}
        >
          <Text style={styles.toggleButtonText}>
            {notificationEnabled
              ? t("Выключить уведомления")
              : t("Включить уведомления")}
          </Text>
        </TouchableOpacity>
        <Text style={styles.notificationStatus}>
          {t("Уведомления")}{" "}
          {notificationEnabled ? t("включены") : t("выключены")}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
    marginHorizontal: 20,
  },
  timePickerButton: {
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    marginRight: 10,
    textTransform: "uppercase",
  },
  scheduleButton: {
    backgroundColor: "#03a9f4",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  notificationSection: {
    marginTop: 20,
    alignItems: "center",
  },
  toggleButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  enabled: {
    backgroundColor: "#f44336",
  },
  disabled: {
    backgroundColor: "#4caf50",
  },
  toggleButtonText: {
    fontSize: 18,
    color: "white",
  },
  notificationStatus: {
    fontSize: 16,
    color: "#333",
  },
});

export default NotificationSettingsScreen;
