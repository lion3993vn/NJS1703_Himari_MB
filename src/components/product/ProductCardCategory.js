import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Start from "react-native-vector-icons/AntDesign";
const ProductCardCategory = ({ product }) => {
  return (
    <View className="bg-white m-2 p-4 rounded-lg flex-1">
      <Image source={product.image} className="w-full h-40 rounded-md" />
      <Text
        className="text-md mt-2 text-gray-800 font-semibold"
        numberOfLines={2}
      >
        {product.name}
      </Text>
      <View className="flex-row items-center space-x-1 mt-1 gap-2">
        <View className="bg-[#FFB6C1] px-2 flex-row rounded-lg gap-1">
          <Text className="text-white">{product.rating}</Text>
          <Start name="star" color="#fff" className="pt-1" />
        </View>
        <Text className="text-gray-500 text-xs">({product.sold})</Text>
      </View>
      <Text className="text-lg font-bold text-gray-900 mt-2">
        {`VND ${product.price.toLocaleString()}`}
      </Text>
      <TouchableOpacity className="mt-2 bg-[#FE99AD] rounded-lg py-2 flex items-center">
        <Text className="text-white font-bold">Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCardCategory;
