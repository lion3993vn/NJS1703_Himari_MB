import React from "react";
import { Image, StyleSheet } from "react-native";

const Banner = () => {
  return (
    <Image
      source={require("../../assets/img/banner1.jpg")}
      style={styles.banner}
    />
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "95%",
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default Banner;
