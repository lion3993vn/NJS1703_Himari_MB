import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { categories } from "./categories";
const subCategories = [
  "Da Mặt",
  "Da Mặt",
  "Da Mặt",
  "Da Mặt",
  "Da Mặt",
  "Da Mặt",
  "Da Mặt",
  "Da Mặt",
];
const CategoryTabs = ({ selectedCategory, onSelectCategory }) => {
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
      <View className="flex-wrap flex-row justify-center px-1 py-2 bg-white">
        {subCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="px-4 py-2 border border-gray-300 rounded-full m-1"
          >
            <Text className="text-gray-700">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryTabs;
