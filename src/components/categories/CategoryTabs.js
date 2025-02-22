import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { categories } from "./categories";
const subCategories = [
  {
    name: "Sữa rửa mặt (Kem, gel, sữa)",
    image: require("../../../assets/img/sampleproduct.png"),
  },
  {
    name: "Kem chống nắng da mặt",
    image: require("../../../assets/img/sampleproduct.png"),
  },
  {
    name: "Dưỡng da mặt",
    image: require("../../../assets/img/sampleproduct.png"),
  },
  { name: "Mặt nạ", image: require("../../../assets/img/sampleproduct.png") },
  {
    name: "Serum, Essence hoặc Ampoule",
    image: require("../../../assets/img/sampleproduct.png"),
  },
  {
    name: "Toner (nước hoa hồng) / Lotion",
    image: require("../../../assets/img/sampleproduct.png"),
  },
];

const CategoryTabs = ({ selectedCategory, onSelectCategory }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            className={`px-4 py-6 h-20 ${
              selectedCategory === item
                ? "bg-white border-t-2 border-[#FB99B4]"
                : "bg-gray-200"
            }`}
            onPress={() => onSelectCategory(item)}
          >
            <Text
              className={`${
                selectedCategory === item
                  ? "text-pink-500 font-bold"
                  : "text-gray-700"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className="flex-wrap flex-row justify-center px-3 py-2 bg-white">
        {(showAll ? subCategories : subCategories.slice(0, 4)).map(
          (item, index) => (
            <View key={index} className="w-1/2 p-1">
              <TouchableOpacity className="flex-row items-center p-2 border border-gray-300 rounded-lg">
                <Image source={item.image} className="w-16 h-16 mr-2" />
                <Text className="text-gray-700 flex-shrink" numberOfLines={2}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
      {!showAll && (
        <TouchableOpacity
          onPress={() => setShowAll(true)}
          className="items-center mt-2"
        >
          <Text className="text-pink-500 font-bold">▼ Xem thêm danh mục</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategoryTabs;
