import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CartItem = ({ item }) => {
  return (
    <View className="p-4 bg-white">
      <View className="flex-row justify-between ">
        <View className="flex-row flex-1 ">
        <Image 
            source={item.image} 
            className="w-[60px] h-[60px] rounded-md"
            resizeMode="contain"
          />
          <View className="flex-1">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-medium flex-1 mr-2" numberOfLines={2}>{item.name}</Text>
              <TouchableOpacity 
                className="p-1 self-start"
                onPress={() => {/* Thêm hàm xóa sản phẩm */}}
              >
                <Icon name="delete-outline" size={20} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
            
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-semibold text-[#FE99AD]">
                {item.price.toLocaleString()}đ
              </Text>

              <View className="flex-row items-center">
                <TouchableOpacity 
                  className="p-1 border border-gray-300 rounded"
                  onPress={() => {/* Thêm hàm giảm số lượng */}}
                >
                  <Icon name="minus" size={20} color="#000" />
                </TouchableOpacity>
                <Text className="px-4 text-base">{item.quantity}</Text>
                <TouchableOpacity 
                  className="p-1 border border-gray-300 rounded"
                  onPress={() => {/* Thêm hàm tăng số lượng */}}
                >
                  <Icon name="plus" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="h-[1px] bg-gray-200 mt-4 mx-8" />
    </View>
  );
};

export default CartItem; 