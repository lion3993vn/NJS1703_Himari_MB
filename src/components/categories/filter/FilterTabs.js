import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const filters = ["Mới Nhất", "Giá Thấp", "Giá Cao"];

const FilterTabs = ({ selectedFilter, onSelect }) => {
  return (
    <View className="bg-white">
      <View>
        <Text className="ml-8 text-xl">Danh sách sản phẩm </Text>
      </View>
      <View className="flex-row justify-start px-4 py-2 ">
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            className={`px-4 py-2 mx-2 rounded-full ${
              selectedFilter === filter ? "bg-pink-100" : "bg-gray-200"
            }`}
            onPress={() => onSelect(filter)}
          >
            <Text
              className={`${
                selectedFilter === filter
                  ? "text-pink-500 font-bold"
                  : "text-gray-700"
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FilterTabs;
