import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = ["Все", "Шопинг", "Еда и напитки", "Путеводитель"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Устанавливаем выбранную категорию
    if (onCategoryChange) {
      onCategoryChange(category); // Передаем выбранную категорию в родительский компонент
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filterContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.filterButton,
            selectedCategory === category && styles.selectedButton,
          ]}
          onPress={() => handleCategoryChange(category)}
        >
          <Text
            style={[
              styles.filterText,
              selectedCategory === category && styles.selectedText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  filterButton: {
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
  },
  selectedButton: {
    backgroundColor: "#007AFF",
  },
  filterText: {
    fontSize: 14,
    color: "#000",
  },
  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CategoryFilter;
