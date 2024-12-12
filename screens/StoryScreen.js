import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const StoryScreen = ({ route, navigation }) => {
  const { storyIndex, stories } = route.params;
  const [currentStoryIndex, setCurrentStoryIndex] = useState(storyIndex);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Управление таймером

  useEffect(() => {
    if (!isPlaying) return; // Таймер работает только если `isPlaying` true

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextStory(); // Переключение на следующую историю
          return 0;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(timer);
  }, [isPlaying]); // Управляем таймером через `isPlaying`

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      navigation.goBack(); // Возвращаемся назад, если истории закончились
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      navigation.goBack(); // Возвращаемся назад, если это первая история
    }
  };

  const pauseStory = () => setIsPlaying(false); // Остановка прогресса
  const resumeStory = () => setIsPlaying(true); // Продолжение прогресса

  return (
    <View style={styles.container}>
      {/* Прогресс бар */}
      <View style={styles.progressContainer}>
        {stories.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              {
                width: `${
                  index === currentStoryIndex
                    ? progress
                    : index < currentStoryIndex
                    ? 100
                    : 0
                }%`,
                backgroundColor: index === currentStoryIndex ? "#fff" : "#aaa",
              },
            ]}
          />
        ))}
      </View>

      {/* Сторис */}
      <TouchableOpacity
        style={styles.storyContainer}
        activeOpacity={1}
        onPress={(e) => {
          const { locationX } = e.nativeEvent;
          if (locationX < 100) {
            pauseStory(); // Приостанавливаем прогресс
            handlePrevStory();
          } else {
            pauseStory(); // Приостанавливаем прогресс
            handleNextStory();
          }
        }}
        onLongPress={pauseStory} // Остановка при долгом нажатии
        onPressOut={resumeStory} // Возобновление при отпускании
      >
        <Image
          source={stories[currentStoryIndex].image}
          style={styles.storyImage}
        />
        <Text style={styles.storyTitle}>
          {stories[currentStoryIndex].title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  progressContainer: {
    flexDirection: "row",
    height: 5,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
    marginHorizontal: 2,
  },
  storyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  storyTitle: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StoryScreen;
