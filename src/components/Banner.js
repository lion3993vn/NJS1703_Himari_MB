import React from "react";
import { View, Image } from "react-native";

const Banner = () => {
  return (
    <View className="px-2">
      <Image
        resizeMode="contain"
        source={require("../../assets/img/Banner.png")}
        className="w-full h-[250px]"
      />
    </View>
  );
};

export default Banner;
