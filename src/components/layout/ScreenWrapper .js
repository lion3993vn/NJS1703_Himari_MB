import React from "react";
import { View, StyleSheet } from "react-native";
import GradientBackground from "./gradientBackground";

const ScreenWrapper = ({ children }) => {
  return (
    <GradientBackground>
      <View style={styles.container}>{children}</View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
