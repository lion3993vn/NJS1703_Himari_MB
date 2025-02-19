import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ScreenWrapper = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(254, 153, 173, 0.4)", "#F7F8FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "transparent", // Đảm bảo nền trong suốt
  },
});

export default ScreenWrapper;
