import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Picker } from "react-native";
import { useTranslation } from "react-i18next";

const TaxiTransportFilter = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(t("Эконом"));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Выберите класс такси")}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Picker.Item label={t("Эконом")} value={t("Эконом")} />
          <Picker.Item label={t("Комфорт")} value={t("Комфорт")} />
          <Picker.Item label={t("Бизнес")} value={t("Бизнес")} />
        </Picker>
      </View>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>{t("Применить фильтр")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  pickerContainer: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TaxiTransportFilter;
