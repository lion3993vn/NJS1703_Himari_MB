import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

// Import hình ảnh thương hiệu
import loreal from "../../../assets/img/brand/loreal.png";
import cocoon from "../../../assets/img/brand/cocoon.png";
import bioderma from "../../../assets/img/brand/bioderma.png";
import cerave from "../../../assets/img/brand/Cerave.png";
import vaseline from "../../../assets/img/brand/vaseline.png";
import klairs from "../../../assets/img/brand/Klairs.png";
import vichy from "../../../assets/img/brand/Vichy.png";
import lorocheposay from "../../../assets/img/brand/lorocheposay.png";

const brands = [
  { id: "1", image: loreal },
  { id: "2", image: cocoon },
  { id: "3", image: bioderma },
  { id: "4", image: cerave },
  { id: "5", image: vaseline },
  { id: "6", image: klairs },
  { id: "7", image: vichy },
  { id: "8", image: lorocheposay },
];

const COLUMN_COUNT = 4; // Số thương hiệu mỗi hàng

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
      {formattedBrands.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between mb-2">
          {row.map((item) => (
            <View key={item.id} className="flex-1 items-center p-2">
              <Image
                source={item.image}
                className="w-20 h-10"
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default BrandList;
