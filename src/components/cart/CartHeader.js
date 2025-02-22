import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CartHeader = () => {
  return (
    <View className="flex-row items-center p-4 bg-[#FFC0CB] border-b border-gray-200">
      {/* <TouchableOpacity className="p-1">
        <Icon name="chevron-left" size={24} color="#000" />
      </TouchableOpacity> */}
      <Text className="flex-1 text-center text-white text-2xl font-semibold">
        Giỏ Hàng
      </Text>
    </View>
  );
};

export default CartHeader; 