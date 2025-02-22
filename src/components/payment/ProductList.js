import React from 'react';
import { View, Text, Image } from 'react-native';

const ProductList = ({ items }) => {
  return (
    <View className="p-4">
      <Text className="text-lg mb-4">Danh sách sản phẩm</Text>
      {items.map((item, index) => (
        <View key={item.id}>
          <View className="flex-row mb-4">
            <Image 
              source={item.image} 
              className="w-[60px] h-[60px] rounded-md"
              resizeMode="contain"
            />
            <View className="flex-1 ml-3 justify-center">
              <Text className="text-[14px] leading-5" numberOfLines={2}>
                {item.name}
              </Text>
              <View className="flex-row justify-between items-center mt-1">
                <Text className="text-base font-medium">
                  {item.price.toLocaleString()}đ
                </Text>
                <Text className="text-gray-500">x{item.quantity}</Text>
              </View>
              {item.discount && (
                <Text className="text-[#FF6B6B] text-sm mt-1">
                  Giảm {item.discount} đồng khi mua 1 gói tã quần Bobby...
                </Text>
              )}
            </View>
          </View>
          {index < items.length - 1 && (
            <View className="h-[1px] bg-gray-200 mb-4" />
          )}
        </View>
      ))}
    </View>
  );
};

export default ProductList; 