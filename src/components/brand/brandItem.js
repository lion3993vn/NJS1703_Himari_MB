import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { brands } from "./brand";

const COLUMN_COUNT = 3; // Số thương hiệu mỗi hàng

const formatBrands = (data, columnCount) => {
  let rows = [];
  for (let i = 0; i < data.length; i += columnCount) {
    rows.push(data.slice(i, i + columnCount));
  }
  return rows;
};

const BrandList = () => {
  const formattedBrands = formatBrands(brands, COLUMN_COUNT);

  return (
    <View className="p-5 m-2 rounded-lg">
      {/* Tiêu đề */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold  text-[#FE99AD]">Thương Hiệu</Text>
        <Link href="/brand" asChild>
          <TouchableOpacity>
            <Text className="text-[#FE99AD] text-md">Xem tất cả &gt;</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Danh sách thương hiệu */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {formattedBrands.map((row, rowIndex) => (
          <View
            key={rowIndex}
            className="flex-row justify-between mb-2 w-full h-20"
          >
            {row.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="flex-1 items-center mx-2 w-[30%]"
              >
                <Image
                  source={item.image}
                  className="w-full"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BrandList;
