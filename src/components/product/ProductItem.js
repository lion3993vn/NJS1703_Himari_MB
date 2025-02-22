import React from "react";
import { View, Text, Image } from "react-native";
import Start from "react-native-vector-icons/AntDesign";

const ProductItem = ({ image, title, price, start, purchase }) => {
  // const maxTitleLength = 20; // Số ký tự tối đa cho title (tăng lên để có thể hiển thị 2 dòng)
  // const displayTitle =
  //   title.length > maxTitleLength
  //     ? title.substring(0, maxTitleLength) + "..."
  //     : title;

  return (
    <View className="bg-white m-2 px-3 p-1 rounded-lg">
      <View className="items-center">
        <Image source={image} className="w-[100px] h-[100px]" />
      </View>
      <View className="">
        <Text
          className="text-[15px] text-[#091E3E] w-[120px] h-[40px]"
          numberOfLines={2}
        >
          {title}
        </Text>
      </View>
      <View className="flex-row gap-2">
        <View className="bg-[#FFB6C1] px-2 flex-row rounded-lg gap-1">
          <Text className="text-white">{start}</Text>
          <Start name="star" color="#fff" className="pt-1" />
        </View>
        <Text className="text-gray-400">({purchase})</Text>
      </View>
      <Text className="text-[14px] text-black font-bold">{price}</Text>
    </View>
  );
};

export default ProductItem;
