import React from "react";
import { View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const banners = [
  require("../../assets/img/banner1.jpg"),
  require("../../assets/img/banner2.jpg"),
  require("../../assets/img/banner3.jpg"),
];

const Banner = () => {
  return (
    <View className="h-40">
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={true}
        dotStyle={{
          backgroundColor: "rgba(0,0,0,.2)",
          width: 10,
          height: 2,
          borderRadius: 10,
          marginTop: 20,
        }}
        activeDotStyle={{
          backgroundColor: "#ff6347",
          width: 10,
          height: 2,
          marginTop: 20,
        }}
      >
        {banners.map((image, index) => (
          <Image
            key={index}
            source={image}
            className="w-[97%] h-[150px] self-center rounded-lg mx-7"
            resizeMode="contain"
          />
        ))}
      </Swiper>
    </View>
  );
};

export default Banner;
