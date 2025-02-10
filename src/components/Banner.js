import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const banners = [
  require("../../assets/img/banner1.jpg"),
  require("../../assets/img/banner2.jpg"),
  require("../../assets/img/banner3.jpg"),
];

const Banner = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {banners.map((image, index) => (
          <Image key={index} source={image} style={styles.banner} />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 160 },
  banner: {
    width: width * 0.97,
    height: 150,
    alignSelf: "center",
    borderRadius: 10,
    marginHorizontal: 30,
    resizeMode: "contain",
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#ff6347",
    width: 10,
    height: 10,
  },
});

export default Banner;
