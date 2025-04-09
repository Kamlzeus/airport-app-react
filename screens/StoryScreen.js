import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const STORY_DURATION = 3000;

const StoryScreen = ({ route, navigation }) => {
  const { storyIndex, stories } = route.params;
  const [currentStoryIndex, setCurrentStoryIndex] = useState(storyIndex);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef(Date.now()); // когда началась анимация
  const elapsedTimeRef = useRef(0);

  useEffect(() => {
    startProgressAnimation();
    return () => progressAnim.stopAnimation();
  }, [currentStoryIndex]);

  const startProgressAnimation = (fromValue = 0) => {
    progressAnim.setValue(fromValue);
    startTimeRef.current = Date.now();

    Animated.timing(progressAnim, {
      toValue: 1,
      duration: STORY_DURATION * (1 - fromValue),
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished && !isPaused) handleNextStory();
    });
  };

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
      elapsedTimeRef.current = 0;
    } else {
      navigation.goBack();
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
      elapsedTimeRef.current = 0;
    } else {
      navigation.goBack();
    }
  };

  const pauseStory = () => {
    setIsPaused(true);
    progressAnim.stopAnimation((value) => {
      elapsedTimeRef.current =
        (Date.now() - startTimeRef.current) / STORY_DURATION;
      progressAnim.setValue(value);
    });
  };

  const resumeStory = () => {
    setIsPaused(false);
    startProgressAnimation(elapsedTimeRef.current);
  };

  const progressBarWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      {/* Заголовок сториса */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {stories[currentStoryIndex].title}
        </Text>
      </View>

      {/* Прогресс бар */}
      <View style={styles.progressContainer}>
        {stories.map((_, index) => (
          <View key={index} style={styles.progressBarBackground}>
            {index === currentStoryIndex ? (
              <Animated.View
                style={[
                  styles.progressBar,
                  { width: progressBarWidth, backgroundColor: "#fff" },
                ]}
              />
            ) : (
              <View
                style={[
                  styles.progressBar,
                  {
                    width: index < currentStoryIndex ? "100%" : "0%",
                    backgroundColor: "#999",
                  },
                ]}
              />
            )}
          </View>
        ))}
      </View>

      {/* Область сториса */}
      <TouchableOpacity
        activeOpacity={1}
        style={styles.touchArea}
        onPress={(e) => {
          const { locationX } = e.nativeEvent;
          if (locationX < width / 2) handlePrevStory();
          else handleNextStory();
        }}
        onLongPress={pauseStory}
        onPressOut={resumeStory}
      >
        <Image
          source={stories[currentStoryIndex].image}
          style={styles.storyImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    height: 4,
    zIndex: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: "100%",
    backgroundColor: "#555",
    marginHorizontal: 2,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 2,
  },
  touchArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default StoryScreen;
