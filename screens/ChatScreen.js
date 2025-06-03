import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const flatListRef = useRef(null);
  const { t } = useTranslation();

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");

    try {
      const response = await axios.post(
        "http://192.168.68.112:8000/api/chat/message/",
        { message: userInput }
      );
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Ошибка сервера 😞" },
      ]);
    }

    Keyboard.dismiss();
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const renderItem = ({ item }) => (
    <LinearGradient
      colors={
        item.sender === "user"
          ? ["#007AFF", "#00B9FF"] // градиент для пользователя
          : ["#DADADA", "#F0F0F0"] // градиент для бота
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.messageBubble,
        item.sender === "user" ? styles.userBubble : styles.botBubble,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          { color: item.sender === "user" ? "#fff" : "#000" },
        ]}
      >
        {item.text}
      </Text>
    </LinearGradient>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={styles.chatList}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />

        {/* ⬆️ Это поле ввода ПОДНИМАЕТСЯ над клавой! */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={t("Напиши что-нибудь...")}
            value={userInput}
            onChangeText={setUserInput}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  chatList: {
    padding: 16,
    paddingBottom: 16,
  },
  messageBubble: {
    padding: 12,
    marginVertical: 6,
    maxWidth: "80%",
    borderRadius: 20,
  },
  userBubble: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  botBubble: {
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    color: "#000",
  },
  sendButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
});
