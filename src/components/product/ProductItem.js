import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ProductItem = ({
  brandName,
  name,
  image,
  price,
  discountPrice,
  discount,
  rating,
  sold,
}) => (
  <View className="flex-1 m-1.5 bg-[#fff] rounded-xl p-2  relative elevation-sm">
    {/* Hình ảnh sản phẩm */}
    <Image
      source={image}
      className="w-full h-32 rounded-lg bg-[#f8f8f8]"
      resizeMode="contain"
    />

    {/* Badge giảm giá */}
    <View className="absolute top-1 right-1 bg-[#86A788] border border-orange-500 py-1 px-2 rounded-md">
      <Text className="text-black font-bold text-xs">{discount}%</Text>
    </View>

    {/* Giá */}
    <View className="flex-row items-center mt-2">
      <Text className="text-lg font-bold text-[#E68045] mr-2">
        {discountPrice.toLocaleString()}đ
      </Text>
      <Text className="text-xs line-through text-gray-500 ml-7">
        {price.toLocaleString()}đ
      </Text>
    </View>

    {/* Thương hiệu */}
    <Text className="text-xs text-green-700 mt-1 font-semibold">
      {brandName}
    </Text>

    {/* Tên sản phẩm */}
    <Text
      numberOfLines={2}
      className="text-sm font-bold text-gray-800 mt-1 h-10"
    >
      {name}
    </Text>

    {/* Đánh giá & lượt mua */}
    <View className="flex-row justify-between mt-2">
      <Text className="text-xs text-orange-500 font-semibold">⭐ {rating}</Text>
      <Text className="text-xs text-gray-500">
        {sold.toLocaleString()} đã bán
      </Text>
    </View>
  </View>
);

export default ProductItem;
