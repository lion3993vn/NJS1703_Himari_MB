import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(254, 153, 173, 0.4)", "#F7F8FF"]} // Chỉnh màu hợp lệ
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.4 }}
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
    backgroundColor: "transparent", // Đảm bảo nội dung không che gradient
    padding: 20,
  },
});

export default GradientBackground;
